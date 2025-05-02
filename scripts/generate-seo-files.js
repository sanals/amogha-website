/**
 * SEO Files Generator Script
 * 
 * This script automatically generates:
 * 1. sitemap.xml - helps search engines discover and index your pages
 * 2. robots.txt - controls search engine crawling of your site
 * 
 * Usage:
 * node scripts/generate-seo-files.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Site configuration
const SITE_URL = 'http://trymyapp.lovestoblog.com'; // Replace with your production URL
const OUTPUT_DIR = path.resolve(__dirname, '../public');

// Pages to include in sitemap
const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/treatments', priority: '0.9', changefreq: 'weekly' },
  { path: '/doctors', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/book-appointment', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  // Department pages
  { path: '/departments/panchakarma', priority: '0.8', changefreq: 'monthly' },
  { path: '/departments/kayachikitsa', priority: '0.8', changefreq: 'monthly' },
  { path: '/departments/rasayana', priority: '0.8', changefreq: 'monthly' },
  { path: '/departments/kaumarabhritya', priority: '0.8', changefreq: 'monthly' },
];

// Generate sitemap.xml
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add each page to the sitemap
  pages.forEach(page => {
    sitemapContent += `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemapContent += `</urlset>`;
  
  return sitemapContent;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `# robots.txt for ${SITE_URL}
User-agent: *
Allow: /

# Disallow admin areas
Disallow: /admin/
Disallow: /wp-admin/

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// Write files to disk
try {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Write sitemap.xml
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'sitemap.xml'),
    generateSitemap()
  );
  console.log('✅ sitemap.xml generated successfully!');
  
  // Write robots.txt
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'robots.txt'),
    generateRobotsTxt()
  );
  console.log('✅ robots.txt generated successfully!');
  
} catch (error) {
  console.error('❌ Error generating SEO files:', error);
} 