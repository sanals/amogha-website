/**
 * This script helps identify and manually replace react-helmet-async usage
 * with our custom DocumentHead component to avoid deprecated lifecycle methods warnings.
 * 
 * Usage:
 * 1. Run this script: node scripts/replace-helmet.js
 * 2. For each file found, manually update to use DocumentHead
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/React files
const sourceFiles = glob.sync('src/**/*.{ts,tsx}');

console.log('Checking for react-helmet-async usage...\n');

// Track files that use Helmet
const helmetFiles = [];

// Check each file for Helmet imports
sourceFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Look for Helmet imports
  if (content.includes('import') && 
      (content.includes('Helmet') || content.includes('HelmetProvider')) &&
      (content.includes('react-helmet') || content.includes('react-helmet-async'))) {
    
    helmetFiles.push(file);
  }
});

// Print results
if (helmetFiles.length === 0) {
  console.log('No files using react-helmet-async were found.');
} else {
  console.log(`Found ${helmetFiles.length} files using react-helmet-async:`);
  helmetFiles.forEach(file => {
    console.log(`  - ${file}`);
  });
  
  console.log('\nReplacement guidelines:');
  console.log('  1. Replace imports:');
  console.log('     FROM: import { Helmet } from \'react-helmet-async\';');
  console.log('     TO:   import DocumentHead from \'../components/head/DocumentHead\';');
  console.log('  2. Replace Helmet components:');
  console.log('     FROM:');
  console.log('     <Helmet>');
  console.log('       <title>{pageTitle}</title>');
  console.log('       <meta name="description" content="..."/>');
  console.log('     </Helmet>');
  console.log('     TO:');
  console.log('     <DocumentHead');
  console.log('       title={pageTitle}');
  console.log('       description="..."');
  console.log('     />');
  console.log('\nAfter replacing all instances, you can re-enable StrictMode in main.tsx');
} 