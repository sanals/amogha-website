/**
 * Node.js script to download press images
 * Run with: node scripts/download-images.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
const statAsync = promisify(fs.stat);
const mkdirAsync = promisify(fs.mkdir);

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image directory
const imageDir = path.join(__dirname, '../public/images/press');

// Create directory if it doesn't exist
async function ensureDirectoryExists(dir) {
  try {
    await statAsync(dir);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await mkdirAsync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    } else {
      throw err;
    }
  }
}

// Check if file is a placeholder
async function isPlaceholder(filePath) {
  try {
    const stats = await statAsync(filePath);
    
    // If file is larger than 1KB, assume it's not a placeholder
    if (stats.size > 1000) {
      return false;
    }
    
    const content = await readFileAsync(filePath, 'utf8');
    return content.includes('Creating placeholder images');
  } catch (err) {
    if (err.code === 'ENOENT') {
      return true; // File doesn't exist, consider it a placeholder
    }
    throw err;
  }
}

// Download image from URL
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Main function to download images if needed
async function downloadImageIfNeeded(filename, url, category) {
  const filePath = path.join(imageDir, filename);
  const needsDownload = await isPlaceholder(filePath);
  
  if (needsDownload) {
    console.log(`Downloading ${category} image: ${filename}`);
    try {
      await downloadImage(url, filePath);
      console.log(`Downloaded successfully: ${filename}`);
    } catch (err) {
      console.error(`Failed to download ${filename} from ${url}`);
      console.error(err.message);
    }
  } else {
    console.log(`Skipping ${filename} - file already exists and appears to be a real image`);
  }
}

// Main execution
async function main() {
  try {
    await ensureDirectoryExists(imageDir);
    
    // Article images
    await downloadImageIfNeeded('article-1.jpg', 'https://source.unsplash.com/random/600x400/?ayurveda', 'Article');
    await downloadImageIfNeeded('article-2.jpg', 'https://source.unsplash.com/random/600x400/?yoga', 'Article');
    await downloadImageIfNeeded('article-3.jpg', 'https://source.unsplash.com/random/600x400/?meditation', 'Article');
    
    // Video thumbnails
    await downloadImageIfNeeded('video-1.jpg', 'https://source.unsplash.com/random/600x400/?wellness', 'Video');
    await downloadImageIfNeeded('video-2.jpg', 'https://source.unsplash.com/random/600x400/?massage', 'Video');
    
    // Press mentions
    await downloadImageIfNeeded('mention-1.jpg', 'https://source.unsplash.com/random/600x400/?award', 'Press Mention');
    await downloadImageIfNeeded('mention-2.jpg', 'https://source.unsplash.com/random/600x400/?newspaper', 'Press Mention');
    await downloadImageIfNeeded('mention-3.jpg', 'https://source.unsplash.com/random/600x400/?review', 'Press Mention');
    
    // Media kit
    await downloadImageIfNeeded('media-kit.jpg', 'https://source.unsplash.com/random/600x400/?branding', 'Media Kit');
    
    console.log('Press images download completed!');
  } catch (err) {
    console.error('An error occurred:', err);
    process.exit(1);
  }
}

main(); 