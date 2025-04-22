# AMOGHA The Ayur Hub - Public Assets

This directory contains all public static assets for the AMOGHA website. These files are directly accessible and served as-is by the web server.

## Directory Structure

```
/public
├── images/          # All image assets (see images/README.md for details)
│   ├── about/       # About page images
│   ├── departments/ # Department-specific images
│   ├── gallery/     # Photo gallery images
│   ├── hero/        # Hero banner images
│   ├── logos/       # Logo variations
│   ├── team/        # Team member photos
│   ├── testimonials/# Testimonial images
│   └── treatments/  # Treatment-related images
├── videos/          # Video assets (see videos/README.md for details)
│   ├── testimonials/# Patient video testimonials
│   └── treatments/  # Treatment demonstration videos
├── fonts/           # Custom font files (if not using CDN)
├── favicon.ico      # Site favicon
├── robots.txt       # Instructions for search engine crawlers
├── manifest.json    # PWA manifest file
└── index.html       # Entry point HTML file
```

## Usage Guidelines

### Accessing Assets

In your React components, reference public assets using the relative path from the public directory:

```jsx
// Correct way to reference images in JSX
<img src="/images/hero/home-banner.webp" alt="AMOGHA Ayurvedic Treatments" />

// For dynamic images, using template literals
<img src={`/images/treatments/${treatment.imageUrl}`} alt={treatment.name} />
```

### Adding New Assets

1. Choose the appropriate directory based on asset type and content
2. Follow the naming conventions specified in each directory's README
3. Optimize assets before adding them (compress images, minify videos)
4. Update any references in code if replacing existing assets

### Best Practices

1. **Versioning**: Consider adding version query parameters for cache busting
2. **Preloading**: Add preload hints for critical assets
3. **Metadata**: Ensure appropriate metadata in manifest.json
4. **Backups**: Keep original high-resolution files in a separate backup

## Important Notes

- Files in the public directory are copied as-is during the build process
- The public directory is useful for assets that need a specific URL
- For assets that should be processed by the build tool, place them in the `src/assets` directory instead 