import React from 'react';
import LazyImage from './LazyImage';

interface ImageSource {
  src: string;
  width: number;
  mediaQuery?: string;
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  sources?: ImageSource[];
  placeholderSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  sizes?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

/**
 * ResponsiveImage component that extends LazyImage with responsive image capabilities
 * 
 * Features:
 * - WebP support with fallbacks
 * - Art direction using multiple image sources
 * - Responsive sizing using sizes attribute
 * - Priority loading option
 * - All LazyImage features (lazy loading, placeholder)
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  fallbackSrc,
  sources = [],
  placeholderSrc,
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  style,
}) => {
  // Extract image base path and extension
  const getBasePath = (imgPath: string) => {
    const lastDotIndex = imgPath.lastIndexOf('.');
    return lastDotIndex !== -1 ? imgPath.substring(0, lastDotIndex) : imgPath;
  };
  
  const getExtension = (imgPath: string) => {
    const lastDotIndex = imgPath.lastIndexOf('.');
    return lastDotIndex !== -1 ? imgPath.substring(lastDotIndex + 1) : '';
  };
  
  // Check if src is already using optimized WebP
  const isWebP = getExtension(src).toLowerCase() === 'webp';
  const basePath = getBasePath(src);
  const fallbackPath = fallbackSrc || src;
  
  // Use specified width or default
  const imgWidth = width || 800;
  const imgHeight = height || undefined;
  
  // Sort sources by width (descending)
  const sortedSources = [...sources].sort((a, b) => b.width - a.width);
  
  // Default responsive sources if none provided
  const defaultSources: ImageSource[] = !sources.length ? [
    { src: `${basePath}-large.webp`, width: 1920 },
    { src: `${basePath}-medium.webp`, width: 1280 },
    { src: `${basePath}-small.webp`, width: 640 },
  ] : [];
  
  // Combine provided sources with defaults
  const imageSources: ImageSource[] = sources.length ? sortedSources : defaultSources;
  
  // Create srcSet for optimized images
  const srcSet = imageSources
    .map(source => `${source.src} ${source.width}w`)
    .join(', ');
  
  // If priority loading is enabled, we'll use picture element directly
  if (priority) {
    return (
      <picture>
        {/* WebP Sources */}
        {imageSources.map((source, index) => (
          source.mediaQuery ? (
            <source 
              key={`webp-${index}`}
              srcSet={source.src}
              media={source.mediaQuery}
              type="image/webp"
            />
          ) : null
        ))}
        
        {/* Fallback srcSet if no media queries */}
        {!imageSources.some(s => s.mediaQuery) && (
          <source
            srcSet={srcSet}
            sizes={sizes}
            type="image/webp"
          />
        )}
        
        {/* Original format fallback */}
        <img
          src={fallbackPath}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          className={className}
          style={style}
          fetchPriority="high"
        />
      </picture>
    );
  }
  
  // For non-priority images, use LazyImage with srcSet
  return (
    <LazyImage
      src={isWebP ? src : `${basePath}.webp`}
      alt={alt}
      placeholderSrc={placeholderSrc}
      className={className}
      width={imgWidth}
      height={imgHeight}
      srcSet={srcSet}
      sizes={sizes}
      style={style}
    />
  );
};

export default ResponsiveImage; 