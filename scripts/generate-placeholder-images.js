/**
 * Node.js script to generate colored placeholder images with text
 * This doesn't require external downloads and works reliably
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image directory
const imageDir = path.join(__dirname, '../public/images/press');

// Ensure directory exists
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
  console.log(`Created directory: ${imageDir}`);
}

// Function to generate a placeholder image
function generateImage(filename, title, bgColor = '#386641', textColor = '#ffffff') {
  const width = 600;
  const height = 400;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(0,0,0,0)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.3)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add title
  ctx.fillStyle = textColor;
  ctx.font = 'bold 28px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Wrap text if needed
  const words = title.split(' ');
  let lines = [];
  let currentLine = words[0];
  
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(`${currentLine} ${word}`).width;
    
    if (width < 550) {
      currentLine += ` ${word}`;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  
  // Render lines
  const lineHeight = 40;
  const totalHeight = lines.length * lineHeight;
  const startY = height / 2 - totalHeight / 2;
  
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + i * lineHeight);
  });
  
  // Add "AMOGHA" watermark
  ctx.font = 'bold 16px Arial';
  ctx.fillText('AMOGHA The Ayur Hub', width / 2, height - 30);
  
  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imageDir, filename), buffer);
  console.log(`Generated ${filename}`);
}

// Generate all needed images
try {
  // Article images
  generateImage('article-1.jpg', 'Modern Science Meets Ancient Ayurveda', '#6a994e');
  generateImage('article-2.jpg', 'The Rise of Ayurvedic Wellness Tourism in India', '#386641');
  generateImage('article-3.jpg', 'Panchakarma: Ancient Detoxification and Rejuvenation', '#1a3521');
  
  // Video thumbnails
  generateImage('video-1.jpg', 'Inside AMOGHA: A Tour of Our Ayurvedic Clinic', '#bc6c25');
  generateImage('video-2.jpg', 'Dr. Sharma Explains: Ayurvedic Approaches to Chronic Conditions', '#8a5a44');
  
  // Press mentions
  generateImage('mention-1.jpg', 'AMOGHA Named Among Top 10 Ayurvedic Clinics in India', '#f2cc8f');
  generateImage('mention-2.jpg', 'Innovations in Ayurveda: AMOGHA\'s Approach to Integrative Medicine', '#bc6c25');
  generateImage('mention-3.jpg', 'Wellness Retreat Review: A Week at AMOGHA', '#f2cc8f');
  
  // Media kit image
  generateImage('media-kit.jpg', 'AMOGHA Media Resources', '#386641');
  
  console.log('All images generated successfully!');
} catch (err) {
  console.error('Error generating images:', err);
} 