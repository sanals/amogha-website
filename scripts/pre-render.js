/**
 * Pre-render Script
 * 
 * This script pre-renders critical pages to HTML for faster initial page loads
 * and improved SEO. It uses puppeteer to render the app and capture the HTML.
 * 
 * Usage:
 * node scripts/pre-render.js
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Configuration
const DEV_SERVER_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.resolve(__dirname, '../dist');
const PAGES_TO_RENDER = [
  { path: '/', outputFile: 'index.html' },
  { path: '/about', outputFile: 'about/index.html' },
  { path: '/contact', outputFile: 'contact/index.html' },
  { path: '/book-appointment', outputFile: 'book-appointment/index.html' }
];

// Ensure we have puppeteer installed
try {
  require.resolve('puppeteer');
} catch (e) {
  console.error('Puppeteer is required for pre-rendering. Please install it:');
  console.error('npm install --save-dev puppeteer');
  process.exit(1);
}

// Ensure the development server is running
async function checkServerRunning() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(DEV_SERVER_URL, { waitUntil: 'networkidle0', timeout: 5000 });
    await browser.close();
    return true;
  } catch (error) {
    console.error('❌ Development server not running. Please start it with:');
    console.error('npm run dev');
    return false;
  }
}

// Pre-render a single page
async function renderPage(browser, url, outputFilePath) {
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1280, height: 800 });
  
  // Navigate to the page and wait for it to be fully loaded
  console.log(`Rendering ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  
  // Wait a bit for any lazy-loaded content
  await page.waitForTimeout(1000);
  
  // Extract the HTML content
  const html = await page.content();
  
  // Create directory if it doesn't exist
  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write the HTML to a file
  fs.writeFileSync(outputFilePath, html);
  console.log(`✅ Successfully pre-rendered ${url} to ${outputFilePath}`);
  
  await page.close();
}

// Main function
async function preRender() {
  // Check if development server is running
  const serverRunning = await checkServerRunning();
  if (!serverRunning) return;

  console.log('📦 Starting pre-rendering process...');
  
  try {
    // Launch browser
    const browser = await puppeteer.launch({ headless: true });
    
    // Process each page
    for (const page of PAGES_TO_RENDER) {
      const url = `${DEV_SERVER_URL}${page.path}`;
      const outputPath = path.join(OUTPUT_DIR, page.outputFile);
      await renderPage(browser, url, outputPath);
    }
    
    // Close browser
    await browser.close();
    
    console.log('🎉 Pre-rendering complete!');
  } catch (error) {
    console.error('❌ Error during pre-rendering:', error);
  }
}

// Run the pre-render function
preRender(); 