/**
 * Pre-build script for AMOGHA The Ayur Hub
 * Runs optimization tasks before the production build
 * 
 * This script:
 * 1. Optimizes images (converts to WebP, creates responsive sizes)
 * 2. Generates sitemap
 * 3. Updates the service worker precache list
 * 
 * Usage: node scripts/pre-build.js
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs-extra';
import path from 'path';

const execAsync = promisify(exec);

// Configuration
const config = {
  scripts: {
    optimizeImages: 'node scripts/optimize-images.js',
    generateSitemap: 'node scripts/generate-sitemap.js'
  },
  serviceWorkerPath: 'public/service-worker.js'
};

/**
 * Main function to run all pre-build tasks
 */
async function runPreBuildTasks() {
  console.log('🚀 Starting pre-build tasks...');
  
  try {
    // Step 1: Optimize images
    console.log('\n📷 Optimizing images...');
    await execAsync(config.scripts.optimizeImages);
    console.log('✅ Images optimized successfully');
    
    // Step 2: Generate sitemap
    console.log('\n🗺️ Generating sitemap...');
    await execAsync(config.scripts.generateSitemap);
    console.log('✅ Sitemap generated successfully');
    
    // Step 3: Update service worker cache list
    console.log('\n🔄 Updating service worker cache...');
    await updateServiceWorkerCache();
    console.log('✅ Service worker updated successfully');
    
    console.log('\n✨ All pre-build tasks completed successfully!');
    console.log('🏗️ Ready for production build');
    
  } catch (error) {
    console.error('\n❌ Error during pre-build tasks:', error);
    process.exit(1);
  }
}

/**
 * Updates the service worker precache list based on optimized assets
 */
async function updateServiceWorkerCache() {
  // Find all optimized WebP images
  const optimizedDir = path.join(process.cwd(), 'public/optimized');
  
  if (!fs.existsSync(optimizedDir)) {
    console.log('Optimized directory not found, skipping service worker update');
    return;
  }
  
  // Function to recursively get all files in a directory
  const getFiles = (dir) => {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = fullPath.replace(path.join(process.cwd(), 'public'), '');
      
      if (entry.isDirectory()) {
        files.push(...getFiles(fullPath));
      } else {
        // Only include WebP images
        if (entry.name.endsWith('.webp')) {
          files.push(relativePath);
        }
      }
    }
    
    return files;
  };
  
  // Get all optimized WebP images
  const optimizedImages = getFiles(optimizedDir);
  
  // Read the service worker file
  const serviceWorkerPath = path.join(process.cwd(), config.serviceWorkerPath);
  let swContent = fs.readFileSync(serviceWorkerPath, 'utf-8');
  
  // Find the PRECACHE_ASSETS array
  const precacheRegex = /(const PRECACHE_ASSETS = \[)([\s\S]*?)(\];)/m;
  const match = swContent.match(precacheRegex);
  
  if (!match) {
    console.warn('Could not find PRECACHE_ASSETS in service worker, skipping update');
    return;
  }
  
  // Create a new precache array with the base assets
  const baseAssets = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
    '/logo512.png',
    '/static/css/main.chunk.css',
    '/static/js/main.chunk.js',
    '/static/js/vendors.chunk.js',
    '/fonts/playfair-display-v30-latin-700.woff2',
    '/fonts/inter-v12-latin-regular.woff2'
  ];
  
  // Add the most important optimized images (limit to prevent excessive caching)
  // Focus on small and medium sizes which are more likely to be used first
  const criticalImages = optimizedImages
    .filter(img => img.includes('-small.webp') || img.includes('-medium.webp'))
    .filter(img => img.includes('/hero/') || img.includes('/about/') || img.includes('/treatments/'))
    .slice(0, 10);
  
  const newPrecacheAssets = [...baseAssets, ...criticalImages];
  
  // Format the array with proper indentation
  const formattedArray = newPrecacheAssets
    .map(asset => `  '${asset}'`)
    .join(',\n');
  
  // Replace the PRECACHE_ASSETS array in the service worker file
  const updatedContent = swContent.replace(
    precacheRegex,
    `$1\n${formattedArray}\n$3`
  );
  
  // Write the updated service worker file
  fs.writeFileSync(serviceWorkerPath, updatedContent, 'utf-8');
  
  console.log(`Added ${criticalImages.length} critical optimized images to service worker cache`);
}

// Run the main function
runPreBuildTasks(); 