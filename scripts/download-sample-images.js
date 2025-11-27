/**
 * This script helps download sample placeholder images for the AMOGHA website development
 * It creates the necessary directory structure and downloads placeholder images from placeholder services
 * 
 * Usage:
 * 1. Make sure Node.js is installed
 * 2. Run: node scripts/download-sample-images.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// ES modules don't have __dirname, so we need to construct it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Image categories and counts
const IMAGE_SETS = {
  'about': [
    { name: 'about-hero-bg.jpg', width: 1920, height: 1080, category: 'about' },
    { name: 'history-2005.jpg', width: 800, height: 600, category: 'about' },
    { name: 'history-2010.jpg', width: 800, height: 600, category: 'about' },
    { name: 'history-2015.jpg', width: 800, height: 600, category: 'about' },
    { name: 'history-2020.jpg', width: 800, height: 600, category: 'about' },
    { name: 'history-present.jpg', width: 800, height: 600, category: 'about' },
  ],
  'team': [
    { name: 'dr-002.png', width: 500, height: 600, category: 'team' },
    { name: 'dr-001.png', width: 500, height: 600, category: 'team' },
    { name: 'dr-003.png', width: 500, height: 600, category: 'team' },
    { name: 'dr-004.png', width: 500, height: 600, category: 'team' },
  ],
  'treatments': [
    { name: 'panchakarma.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'varicose-veins.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'detoxification.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'endometriosis.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'developmental-delay.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'parkinsons.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'back-pain.jpg', width: 800, height: 600, category: 'treatments' },
    { name: 'piles.jpg', width: 800, height: 600, category: 'treatments' },
  ],
  'departments': [
    { name: 'general-medicine.jpg', width: 800, height: 600, category: 'departments' },
    { name: 'womens-health.jpg', width: 800, height: 600, category: 'departments' },
    { name: 'sports-medicine.jpg', width: 800, height: 600, category: 'departments' },
    { name: 'wellness.jpg', width: 800, height: 600, category: 'departments' },
    { name: 'pediatrics.jpg', width: 800, height: 600, category: 'departments' },
    { name: 'ent.jpg', width: 800, height: 600, category: 'departments' },
  ],
  'hero': [
    { name: 'home-hero.jpg', width: 1920, height: 1080, category: 'hero' },
    { name: 'treatments-hero.jpg', width: 1920, height: 1080, category: 'hero' },
    { name: 'departments-hero.jpg', width: 1920, height: 1080, category: 'hero' },
    { name: 'doctors-hero.jpg', width: 1920, height: 1080, category: 'hero' },
    { name: 'contact-hero.jpg', width: 1920, height: 1080, category: 'hero' },
  ],
  'testimonials': [
    { name: 'patient1.jpg', width: 300, height: 300, category: 'testimonials' },
    { name: 'patient2.jpg', width: 300, height: 300, category: 'testimonials' },
    { name: 'patient3.jpg', width: 300, height: 300, category: 'testimonials' },
    { name: 'patient4.jpg', width: 300, height: 300, category: 'testimonials' },
    { name: 'video-thumb1.jpg', width: 800, height: 450, category: 'testimonials' },
    { name: 'video-thumb2.jpg', width: 800, height: 450, category: 'testimonials' },
  ],
  'gallery': [
    { name: 'facility1.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'facility2.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'facility3.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'treatment1.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'treatment2.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'treatment3.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'treatment4.jpg', width: 800, height: 600, category: 'gallery' },
    { name: 'treatment5.jpg', width: 800, height: 600, category: 'gallery' },
  ],
  'logos': [
    { name: 'amogha-logo.png', width: 400, height: 200, category: 'logos' },
    { name: 'amogha-logo-dark.png', width: 400, height: 200, category: 'logos' },
    { name: 'favicon.png', width: 48, height: 48, category: 'logos' },
  ]
};

// Ensure directories exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
}

// Download image using a more reliable source
function downloadPlaceholderImage(imagePath, width, height, category) {
  return new Promise((resolve, reject) => {
    // Use picsum.photos which is more reliable than Unsplash random
    let url;
    
    // Different sources for different categories to get better results
    switch (category) {
      case 'team':
        // Use thispersondoesnotexist.com alternatives
        const seed = Math.floor(Math.random() * 1000);
        url = `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 99)}.jpg`;
        break;
      
      case 'testimonials':
        if (imagePath.includes('video-thumb')) {
          // Video thumbnails
          url = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
        } else {
          // Use randomuser.me for testimonial people
          url = `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 99)}.jpg`;
        }
        break;
      
      case 'hero':
        // Larger images for hero
        url = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
        break;
      
      case 'logos':
        // For logos, we'll create a simple colorful placeholder
        createImagePlaceholder(imagePath, width, height, [56, 102, 65]); // Green color for Ayurveda
        return resolve();
        
      default:
        // Default to picsum for everything else
        url = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
    }
    
    // Create all necessary directories
    const dir = path.dirname(imagePath);
    ensureDirectoryExists(dir);
    
    const file = fs.createWriteStream(imagePath);
    
    https.get(url, response => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        https.get(redirectUrl, redirectResponse => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${imagePath}`);
            resolve();
          });
        }).on('error', err => {
          fs.unlink(imagePath, () => {}); // Delete the file on error
          console.error(`Error downloading ${imagePath} after redirect: ${err.message}`);
          reject(err);
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${imagePath}`);
          resolve();
        });
      }
    }).on('error', err => {
      fs.unlink(imagePath, () => {}); // Delete the file on error
      console.error(`Error downloading ${imagePath}: ${err.message}`);
      reject(err);
    });
  });
}

// Create a simple colored placeholder image for logos
function createImagePlaceholder(imagePath, width, height, color) {
  try {
    // Create a simple HTML file that can be used as a placeholder
    const dir = path.dirname(imagePath);
    ensureDirectoryExists(dir);
    
    // For simplicity, we're creating a text file with instructions
    // since creating actual PNG files requires additional libraries
    const placeholderPath = `${imagePath}.txt`;
    const content = `Placeholder for: ${path.basename(imagePath)}
Width: ${width}px
Height: ${height}px
Color: rgb(${color.join(',')})

Please replace this with a real image before deployment.
You can use an online tool to create a placeholder or logo.`;
    
    fs.writeFileSync(placeholderPath, content);
    fs.writeFileSync(imagePath, Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])); // PNG file header
    console.log(`Created placeholder for: ${imagePath}`);
  } catch (error) {
    console.error(`Error creating placeholder for ${imagePath}: ${error.message}`);
  }
}

// Create placeholder video file
function createPlaceholderVideo(videoPath) {
  return new Promise((resolve, reject) => {
    // Create all necessary directories
    const dir = path.dirname(videoPath);
    ensureDirectoryExists(dir);
    
    // Create a simple HTML file that can be embedded as a video placeholder
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #386641;
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
      height: 100vh;
    }
    .placeholder {
      padding: 20px;
    }
    h2 {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="placeholder">
    <h2>AMOGHA Ayurveda</h2>
    <p>Video Placeholder</p>
    <p>${videoPath.includes('testimonials') ? 'Patient Testimonial' : 'Treatment Demonstration'}</p>
  </div>
</body>
</html>
    `.trim();
    
    // Write HTML placeholder
    const htmlPath = videoPath.replace('.mp4', '.html');
    fs.writeFile(htmlPath, htmlContent, err => {
      if (err) {
        console.error(`Error creating video placeholder at ${htmlPath}: ${err.message}`);
        reject(err);
        return;
      }
      
      // Create a small dummy MP4 file
      // This is just a minimal valid MP4 file header (not actually playable)
      const buffer = Buffer.from([
        0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70, 
        0x6D, 0x70, 0x34, 0x32, 0x00, 0x00, 0x00, 0x00, 
        0x6D, 0x70, 0x34, 0x32, 0x69, 0x73, 0x6F, 0x6D
      ]);
      
      fs.writeFile(videoPath, buffer, err => {
        if (err) {
          console.error(`Error creating video placeholder at ${videoPath}: ${err.message}`);
          reject(err);
          return;
        }
        
        console.log(`Created video placeholder: ${videoPath}`);
        resolve();
      });
    });
  });
}

// Main function
async function main() {
  // Ensure base directories exist
  ensureDirectoryExists(PUBLIC_DIR);
  ensureDirectoryExists(IMAGES_DIR);
  
  // Process each image set
  const downloadPromises = [];
  
  Object.entries(IMAGE_SETS).forEach(([directory, images]) => {
    const dirPath = path.join(IMAGES_DIR, directory);
    ensureDirectoryExists(dirPath);
    
    images.forEach(image => {
      const imagePath = path.join(IMAGES_DIR, directory, image.name);
      downloadPromises.push(downloadPlaceholderImage(imagePath, image.width, image.height, directory));
    });
  });
  
  // Create videos directory for testimonials and treatments
  const videosDir = path.join(PUBLIC_DIR, 'videos');
  const testimonialVideosDir = path.join(videosDir, 'testimonials');
  const treatmentVideosDir = path.join(videosDir, 'treatments');
  
  ensureDirectoryExists(videosDir);
  ensureDirectoryExists(testimonialVideosDir);
  ensureDirectoryExists(treatmentVideosDir);
  
  // Create placeholder videos
  const videoPromises = [
    // Testimonial videos
    createPlaceholderVideo(path.join(testimonialVideosDir, 'patient-testimonial-1.mp4')),
    createPlaceholderVideo(path.join(testimonialVideosDir, 'patient-testimonial-2.mp4')),
    createPlaceholderVideo(path.join(testimonialVideosDir, 'patient-testimonial-3.mp4')),
    
    // Treatment videos
    createPlaceholderVideo(path.join(treatmentVideosDir, 'panchakarma-treatment.mp4')),
    createPlaceholderVideo(path.join(treatmentVideosDir, 'abhyanga-massage.mp4')),
    createPlaceholderVideo(path.join(treatmentVideosDir, 'shirodhara-therapy.mp4'))
  ];
  
  try {
    // Wait for all downloads to complete
    await Promise.all([...downloadPromises, ...videoPromises]);
    
    // Update the README.md file in the images directory
    const readmePath = path.join(IMAGES_DIR, 'README.md');
    const readmeContent = `# Sample Images

This directory contains sample placeholder images for the AMOGHA Ayurvedic Clinic website.

## Directory Structure

${Object.keys(IMAGE_SETS).map(dir => `- \`${dir}/\`: ${IMAGE_SETS[dir].length} images`).join('\n')}

## Image Sources

- Team & Testimonial People: [RandomUser.me](https://randomuser.me/)
- Other Images: [Lorem Picsum](https://picsum.photos/)

## Usage

These images are placeholders only and should be replaced with actual content before the site goes live.

## License

The placeholder images are sourced from public APIs and are intended for development purposes only.
`;
    
    fs.writeFileSync(readmePath, readmeContent);
    
    console.log('All placeholder images and videos created successfully!');
    console.log('\nNext steps:');
    console.log('1. Replace these placeholders with actual content when available');
    console.log('2. Optimize images before production deployment');
    console.log('3. Update image references in your components if needed');
  } catch (error) {
    console.error('Error downloading assets:', error);
  }
}

// Execute the main function
main(); 