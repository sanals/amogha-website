# AMOGHA The Ayur Hub - Performance Optimization Guide

This document explains the performance optimizations implemented for the AMOGHA The Ayur Hub website to ensure optimal load times, smooth user experience, and excellent SEO.

## Table of Contents

1. [Image Optimization](#image-optimization)
2. [Code Splitting and Chunking](#code-splitting-and-chunking)
3. [CSS Optimization](#css-optimization)
4. [JavaScript Optimization](#javascript-optimization)
5. [Font Loading Strategy](#font-loading-strategy)
6. [Caching and Service Worker](#caching-and-service-worker)
7. [Component-Level Optimizations](#component-level-optimizations)
8. [SEO Enhancements](#seo-enhancements)
9. [Measuring Performance](#measuring-performance)

## Image Optimization

### WebP Conversion

All site images are converted to WebP format for better compression. The site maintains fallbacks for browsers that don't support WebP.

### Responsive Images

Three strategies are used for responsive images:

1. **LazyImage Component** (`src/components/atoms/LazyImage.tsx`):
   - Uses Intersection Observer API to detect when images enter the viewport
   - Includes placeholder images during loading
   - Supports native lazy loading as a fallback

2. **ResponsiveImage Component** (`src/components/atoms/ResponsiveImage.tsx`):
   - Extends LazyImage with responsive image capabilities
   - Supports srcSet and sizes attributes
   - Handles art direction with multiple image sources
   - Automatically uses WebP with fallbacks

3. **Image Optimization Script** (`scripts/optimize-images.js`):
   - Creates multiple sizes of each image (thumbnail, small, medium, large)
   - Compresses images while maintaining quality
   - Converts all images to WebP format

### Usage Example

```jsx
// Basic usage
<LazyImage
  src="/images/treatment.jpg"
  alt="Ayurvedic Treatment"
  width={800}
  height={600}
/>

// Advanced responsive usage
<ResponsiveImage
  src="/images/hero/home-hero.jpg"
  alt="AMOGHA Ayurvedic Treatment"
  width={1920}
  height={1080}
  priority={true}
  sources={[
    { src: '/optimized/images/hero/home-hero-large.webp', width: 1920 },
    { src: '/optimized/images/hero/home-hero-medium.webp', width: 1280, mediaQuery: '(max-width: 1280px)' },
    { src: '/optimized/images/hero/home-hero-small.webp', width: 640, mediaQuery: '(max-width: 640px)' },
  ]}
/>
```

## Code Splitting and Chunking

The build process is configured to create optimal-sized chunks for better performance:

- **Vendor Chunk**: Contains all third-party libraries (React, react-router, framer-motion, etc.)
- **Route-Based Splitting**: Each page loads its own code independently
- **Dynamic Imports**: Large components are loaded dynamically when needed

This approach ensures the initial bundle is small and focused on what the user needs immediately.

## CSS Optimization

### Tailwind CSS Configuration

Tailwind is configured for optimal production usage:

- PurgeCSS removes unused styles in production
- Critical CSS is inlined in the head for fastest render
- Non-critical styles are loaded asynchronously

### CSS-in-JS Best Practices

When using CSS-in-JS (like Framer Motion):

- Prefer static styles over dynamic when possible
- Use memoization to prevent style recalculation

## JavaScript Optimization

### Bundle Analysis

Use the included visualization tool to identify bundle size issues:

```bash
npm run build
# Then open build/stats.html
```

### Minification and Compression

- Terser minification with aggressive settings
- Tree-shaking to remove unused code
- Console statements removed in production

## Font Loading Strategy

Fonts are loaded with a strategic approach:

1. **Preconnect**: Early connection to font servers
2. **Preload**: Critical fonts (headers, body text) are preloaded
3. **Font Display**: Uses `font-display: swap` for text visibility during font loading
4. **Minimal Font Variants**: Limited to essential weights and styles

## Caching and Service Worker

A service worker (`public/service-worker.js`) provides:

- Offline capability
- Smart caching strategies:
  - Cache-first for static assets
  - Network-first for API calls and HTML
- Precaching of critical resources

## Component-Level Optimizations

### AnimateOnScroll

Uses Intersection Observer to trigger animations only when components are visible, reducing main thread work.

### Page Transitions

Smooth transitions between pages enhance perceived performance.

### React Component Optimizations

- React.memo for expensive components
- useCallback and useMemo to prevent unnecessary renders
- Code-splitting via React.lazy and Suspense

## SEO Enhancements

### Structured Data

Rich structured data for better search engine understanding:

- Local Business / Medical Business schema
- BreadcrumbList schema for navigation
- FAQ schema for treatment questions

### Meta Tags

Comprehensive meta tags for all pages via the SEO component.

### Performance as SEO

Performance metrics directly impact SEO:

- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

## Measuring Performance

The site includes Web Vitals measurement (`src/reportWebVitals.ts`).

### Monitoring Tools

- Lighthouse in Chrome DevTools
- PageSpeed Insights
- Web Vitals Chrome Extension

### Continuous Improvement

1. Monitor performance in production
2. Identify bottlenecks
3. Apply targeted optimizations
4. Measure impact
5. Repeat

## Build Process Integration

Performance optimization is integrated into the build process:

```bash
# Run pre-build optimizations and then build
npm run build

# Run only image optimization
npm run optimize-images

# Generate sitemap
npm run generate-sitemap
```

The `scripts/pre-build.js` script automates these processes before each production build.

---

This performance guide should be updated as new optimizations are implemented. 