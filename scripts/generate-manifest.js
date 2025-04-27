/**
 * Manifest.json Generator for AMOGHA The Ayur Hub
 * 
 * This script generates a manifest.json file for PWA support:
 * - Full app metadata (name, description, theme colors)
 * - Icon definitions for various devices and sizes
 * - Display and orientation settings
 * 
 * Usage:
 * node scripts/generate-manifest.js
 */

import fs from 'fs';
import path from 'path';

// App configuration
const config = {
  name: 'AMOGHA The Ayur Hub',
  shortName: 'AMOGHA',
  description: 'Premium Ayurvedic Wellness Clinic offering traditional Ayurvedic treatments and therapies',
  themeColor: '#386641', // Primary color
  backgroundColor: '#ffffff',
  display: 'standalone',
  orientation: 'portrait',
  scope: '/',
  startUrl: '/',
  // Icons should be prepared in advance and stored in public/icons/
  // Ensure that all these sizes are created
  icons: [
    {
      src: '/icons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
      purpose: 'any maskable'
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ],
  shortcuts: [
    {
      name: 'Book Appointment',
      short_name: 'Book',
      description: 'Book an appointment at AMOGHA Ayurvedic Clinic',
      url: '/book-appointment',
      icons: [{ src: '/icons/shortcut-book.png', sizes: '192x192' }]
    },
    {
      name: 'Treatments',
      short_name: 'Treatments',
      description: 'Explore our Ayurvedic treatments',
      url: '/treatments',
      icons: [{ src: '/icons/shortcut-treatments.png', sizes: '192x192' }]
    }
  ],
  screenshots: [
    {
      src: '/screenshots/home-mobile.jpg',
      sizes: '1080x1920',
      type: 'image/jpeg',
      platform: 'narrow',
      label: 'AMOGHA Home Page'
    },
    {
      src: '/screenshots/home-desktop.jpg',
      sizes: '1920x1080',
      type: 'image/jpeg',
      platform: 'wide',
      label: 'AMOGHA Home Page on Desktop'
    }
  ]
};

// Format manifest.json
const manifest = {
  name: config.name,
  short_name: config.shortName,
  description: config.description,
  theme_color: config.themeColor,
  background_color: config.backgroundColor,
  display: config.display,
  orientation: config.orientation,
  scope: config.scope,
  start_url: config.startUrl,
  icons: config.icons,
  shortcuts: config.shortcuts,
  screenshots: config.screenshots
};

// Write the manifest file
const outputPath = path.resolve('./public/manifest.json');

fs.writeFile(
  outputPath,
  JSON.stringify(manifest, null, 2),
  'utf8',
  (err) => {
    if (err) {
      console.error('Error writing manifest.json:', err);
      process.exit(1);
    }
    console.log(`manifest.json generated at ${outputPath}`);
    console.log('\nNOTE: Make sure to create the icon files at:');
    console.log('./public/icons/');
    console.log('\nAdd this to your index.html <head> section:');
    console.log('<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />');
    console.log('<meta name="theme-color" content="#386641" />');
  }
); 