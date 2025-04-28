import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  srcSet?: string;
  sizes?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc,
  className = '',
  width,
  height,
  srcSet,
  sizes,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Default placeholder - light gray color with dimensions
  const defaultPlaceholder = placeholderSrc || 
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 600} ${height || 400}'%3E%3Crect width='100%25' height='100%25' fill='%23f1f1f1'/%3E%3C/svg%3E`;

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      ref={imgRef}
    >
      {/* Placeholder image shown while loading */}
      {!isLoaded && (
        <img
          src={defaultPlaceholder}
          alt={alt}
          className="w-full h-full object-cover"
          width={width}
          height={height}
        />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} absolute inset-0`}
        onLoad={handleImageLoad}
        width={width}
        height={height}
        srcSet={srcSet}
        sizes={sizes}
        {...props}
      />
    </div>
  );
};

export default LazyImage; 