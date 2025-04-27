# SEO & Performance Optimization Guide

This document describes the SEO and performance optimizations implemented in the AMOGHA The Ayur Hub website.

## Table of Contents

1. [SEO Optimizations](#seo-optimizations)
2. [Performance Optimizations](#performance-optimizations)
3. [Core Web Vitals](#core-web-vitals)
4. [Image Optimization](#image-optimization)
5. [Build Process](#build-process)
6. [Testing & Monitoring](#testing--monitoring)

## SEO Optimizations

### Meta Tags & Structured Data

- **SEO Component**: `src/components/atoms/SEO.tsx` handles dynamic meta tags for all pages
- **Structured Data**: JSON-LD format in `public/index.html` for business information
- **PageTitle Component**: `src/components/atoms/PageTitle.tsx` for consistent page titles

### XML Sitemap & Robots.txt

- **Auto-generated** using `scripts/generate-seo-files.js`
- **Updated during build** process
- **Comprehensive coverage** of all important pages with proper priorities

### Semantic HTML & Accessibility

- All components use semantic HTML5 elements
- ARIA attributes for improved accessibility
- Proper heading hierarchy (h1, h2, h3)

## Performance Optimizations

### Code Splitting & Bundle Optimization

- **Manual chunk splitting** in Vite configuration
- **Tree shaking** for smaller bundle sizes
- **Compression** using both Gzip and Brotli algorithms

### Lazy Loading

- **LazyImage Component**: `src/components/atoms/LazyImage.tsx` for optimized image loading
- **IntersectionObserver** for detecting when elements are in viewport
- **Route-based code splitting** for lazy-loading page components

### Animation Performance

- **AnimateOnScroll Component**: Efficiently triggers animations only when in viewport
- **Optimized Framer Motion** animations using hardware acceleration
- **Reduced motion** support for users with motion sensitivity

## Core Web Vitals

The following optimizations target Core Web Vitals metrics:

### Largest Contentful Paint (LCP)

- Preloading critical resources
- Optimized critical rendering path
- Server-side rendering for key pages

### First Input Delay (FID) / Interaction to Next Paint (INP)

- Minimized JavaScript execution time
- Deferred non-critical JavaScript
- Optimized event handlers

### Cumulative Layout Shift (CLS)

- Pre-defined image dimensions
- Proper font loading strategy
- Stable layout with placeholders

## Image Optimization

- **Automatic optimization** during build process
- **Format conversion** to WebP where supported
- **Responsive images** with appropriate srcset and sizes
- **Lazy loading** for improved page load performance

## Build Process

Our build process includes several optimizations:

```bash
# Development with hot reload
npm run dev

# Standard build with all optimizations
npm run build

# Build with static pre-rendering for critical pages
npm run build:static

# Generate SEO files (sitemap.xml, robots.txt)
npm run generate-seo-files

# Optimize all images in the /public/images directory
npm run optimize-images
```

## Testing & Monitoring

### Tools for Testing Performance

- Lighthouse in Chrome DevTools
- WebPageTest.org
- Google PageSpeed Insights
- Chrome User Experience Report

### Monitoring Recommendations

- Set up regular Lighthouse CI tests
- Monitor Core Web Vitals in Google Search Console
- Use Real User Monitoring (RUM) to track actual user experience

## Development Guidelines

When adding new features or pages:

1. Always include proper SEO meta tags using the SEO component
2. Use LazyImage for all images
3. Optimize animations with AnimateOnScroll
4. Test performance impact using Lighthouse
5. Update sitemap when adding new pages 