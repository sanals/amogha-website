/**
 * Node.js script to generate a sitemap.xml file
 * This helps search engines discover and index your pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'http://trymyapp.lovestoblog.com'; // Update with your production URL
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// List of all pages to include in the sitemap
// Format: [path, priority, changefreq]
const pages = [
  ['/', '1.0', 'weekly'],
  ['/about', '0.8', 'monthly'],
  ['/treatments', '0.9', 'weekly'],
  ['/departments', '0.9', 'weekly'],
  ['/departments/general-medicine-neurology', '0.8', 'monthly'],
  ['/departments/womens-health-gynaecology', '0.8', 'monthly'],
  ['/departments/anorectal-sports-medicine', '0.8', 'monthly'],
  ['/departments/wellness-panchakarma', '0.8', 'monthly'],
  ['/departments/ayurvedic-pediatrics', '0.8', 'monthly'],
  ['/departments/ophthalmology-ent', '0.8', 'monthly'],
  ['/doctors', '0.9', 'monthly'],
  ['/gallery', '0.7', 'monthly'],
  ['/gallery/photos', '0.7', 'monthly'],
  ['/gallery/videos', '0.7', 'monthly'],
  ['/testimonials', '0.8', 'monthly'],
  ['/testimonials/quotes', '0.7', 'monthly'],
  ['/testimonials/videos', '0.7', 'monthly'],
  ['/contact', '0.8', 'monthly'],
  ['/book-appointment', '0.9', 'weekly'],
  ['/faq', '0.8', 'monthly'],
  ['/press', '0.7', 'weekly'],
];

// Generate sitemap XML content
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each page to the sitemap
  pages.forEach(([path, priority, changefreq]) => {
    sitemapContent += '  <url>\n';
    sitemapContent += `    <loc>${SITE_URL}${path}</loc>\n`;
    sitemapContent += `    <lastmod>${today}</lastmod>\n`;
    sitemapContent += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemapContent += `    <priority>${priority}</priority>\n`;
    sitemapContent += '  </url>\n';
  });
  
  sitemapContent += '</urlset>';
  
  return sitemapContent;
}

// Write sitemap file
try {
  const sitemap = generateSitemap();
  fs.writeFileSync(OUTPUT_FILE, sitemap);
  console.log(`Sitemap generated successfully at ${OUTPUT_FILE}`);
} catch (err) {
  console.error('Error generating sitemap:', err);
} 