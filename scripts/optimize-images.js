/**
 * Image Optimization Script for AMOGHA The Ayur Hub
 * 
 * This script optimizes all images in the public directory:
 * 1. Converts images to WebP format
 * 2. Resizes large images to appropriate dimensions
 * 3. Compresses images for better performance
 * 4. Creates responsive versions for different screen sizes
 * 
 * Usage: 
 * 1. Install dependencies: npm install sharp glob fs-extra
 * 2. Run: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import glob from 'glob';
import path from 'path';
import fs from 'fs-extra';

// Configuration
const config = {
  sourceDir: './public',
  outputDir: './public/optimized',
  extensions: ['.jpg', '.jpeg', '.png', '.gif'],
  sizes: {
    large: 1920,
    medium: 1280,
    small: 640,
    thumbnail: 320
  },
  quality: {
    jpeg: 80,
    webp: 75
  },
  skipExisting: true
};

// Ensure output directory exists
fs.ensureDirSync(config.outputDir);

// Find all images matching the extensions
const imageFilePaths = [];
config.extensions.forEach(ext => {
  const files = glob.sync(`${config.sourceDir}/**/*${ext}`);
  imageFilePaths.push(...files);
});

// Process each image
async function processImage(filePath) {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    const dirName = path.dirname(filePath).replace(config.sourceDir, '');
    const outputDir = path.join(config.outputDir, dirName);
    
    // Ensure output directory exists
    fs.ensureDirSync(outputDir);
    
    // Skip if all optimized versions already exist and skipExisting is true
    if (config.skipExisting) {
      const allSizesExist = Object.keys(config.sizes).every(size => {
        return fs.existsSync(path.join(outputDir, `${fileName}-${size}.webp`));
      });
      
      if (allSizesExist) {
        console.log(`Skipping ${filePath} (already optimized)`);
        return;
      }
    }
    
    // Load the image
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Process each size
    for (const [sizeName, width] of Object.entries(config.sizes)) {
      // Skip if original is smaller than target size
      if (metadata.width < width) continue;
      
      const outputPath = path.join(outputDir, `${fileName}-${sizeName}.webp`);
      
      // Skip if file exists and skipExisting is true
      if (config.skipExisting && fs.existsSync(outputPath)) {
        console.log(`Skipping ${fileName}-${sizeName}.webp (already exists)`);
        continue;
      }
      
      // Resize and convert to WebP
      await image
        .clone()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: config.quality.webp })
        .toFile(outputPath);
      
      console.log(`Created ${outputPath}`);
    }
    
    // Create a base WebP version with original dimensions
    const baseOutputPath = path.join(outputDir, `${fileName}.webp`);
    if (!config.skipExisting || !fs.existsSync(baseOutputPath)) {
      await image
        .clone()
        .webp({ quality: config.quality.webp })
        .toFile(baseOutputPath);
      
      console.log(`Created ${baseOutputPath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all images and track progress
async function processImages() {
  console.log(`Found ${imageFilePaths.length} images to process`);
  let processed = 0;
  
  await Promise.all(
    imageFilePaths.map(async (filePath) => {
      await processImage(filePath);
      processed++;
      console.log(`Progress: ${processed}/${imageFilePaths.length} (${Math.round(processed / imageFilePaths.length * 100)}%)`);
    })
  );
  
  console.log('\nImage optimization complete!');
  console.log(`Optimized images saved to ${config.outputDir}`);
  console.log('\nRecommended HTML usage:');
  console.log(`
<picture>
  <source 
    media="(min-width: 1280px)" 
    srcSet="/optimized/path/image-large.webp"
  />
  <source 
    media="(min-width: 640px)" 
    srcSet="/optimized/path/image-medium.webp"
  />
  <img 
    src="/optimized/path/image-small.webp" 
    alt="Description" 
    loading="lazy" 
    width="..." 
    height="..."
  />
</picture>
  `);
}

// Run the process
processImages().catch(err => {
  console.error('Error during image optimization:', err);
  process.exit(1);
}); 