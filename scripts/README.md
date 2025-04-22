# Image Management Scripts

This directory contains scripts to help with managing images for the AMOGHA The Ayur Hub website.

## Available Scripts

### 1. `generate-placeholder-images.js`

This script generates placeholder images for the Press & News section with custom colors and titles.

**Usage:**
```bash
# Install dependencies first (if not already done)
npm install canvas

# Run the script
node scripts/generate-placeholder-images.js
```

**What it does:**
- Creates nicely styled placeholder images with gradient backgrounds
- Sets different colors for different types of content (articles, videos, mentions)
- Includes the title text and AMOGHA branding
- Automatically detects if images already exist and creates only missing ones

### 2. `download-images.js`

This script can download images from external URLs (currently not recommended due to CORS issues).

**Usage:**
```bash
# Run the script
node scripts/download-images.js
```

### 3. `download-press-images.ps1`

PowerShell script for Windows users to download images from external sources.

**Usage:**
```powershell
# Run in PowerShell
./scripts/download-press-images.ps1
```

## How to Add New Press Images

### Option 1: Use the Generator Script (Recommended)

1. Edit the `scripts/generate-placeholder-images.js` file
2. Add new image entries to the script:

```javascript
// Add a new article image
generateImage('article-4.jpg', 'Your New Article Title', '#6a994e');

// Add a new video thumbnail
generateImage('video-3.jpg', 'Your New Video Title', '#bc6c25');

// Add a new press mention
generateImage('mention-4.jpg', 'Your New Press Mention', '#f2cc8f');
```

3. Run the script: `node scripts/generate-placeholder-images.js`

### Option 2: Manual Addition

1. Create or obtain images with 600x400 pixel dimensions
2. Name them according to their type and number (e.g., `article-4.jpg`, `video-3.jpg`)
3. Place them in the `public/images/press` directory

### Option 3: Update the Image Data

After adding new images, update the press data in `src/data/pressData.ts` to reference them:

```typescript
// Add a new article
{
  id: 'article-4',
  title: 'Your New Article Title',
  description: 'Description of your new article...',
  date: 'April 15, 2024',
  source: 'Source Name',
  sourceUrl: 'https://example.com/source',
  imageUrl: '/images/press/article-4.jpg',
  type: 'article',
  url: '/press/your-new-article'
}
``` 