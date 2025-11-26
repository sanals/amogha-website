'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryItem from '../molecules/GalleryItem';
import Lightbox from '../molecules/Lightbox';

export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  description?: string;
  category?: string;
  aspectRatio?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
  className?: string;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  images,
  title = 'Our Photo Gallery',
  description = 'Experience the healing atmosphere of our Ayurvedic clinic through these images',
  className = '',
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageId, setCurrentImageId] = useState<string>('');

  const handleImageClick = (id: string) => {
    setCurrentImageId(id);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Assign different aspect ratios for a more interesting masonry layout
  const aspectRatios = ['aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[16/9]', 'aspect-[3/2]'];
  
  // Assign aspect ratios to images if they don't already have one
  const imagesWithAspectRatios = images.map((image, index) => ({
    ...image,
    aspectRatio: image.aspectRatio || aspectRatios[index % aspectRatios.length],
  }));

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
                <span className="text-primary dark:text-primary-light">{title.split(' ')[0]}</span>
                <span> {title.split(' ').slice(1).join(' ')}</span>
              </h2>
            )}
            {description && (
              <p className="text-neutral-dark dark:text-neutral-medium">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {imagesWithAspectRatios.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <GalleryItem
                id={image.id}
                image={image.image}
                title={image.title}
                description={image.description}
                aspectRatio={image.aspectRatio}
                onClick={handleImageClick}
                className="mb-4"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={images}
          currentImageId={currentImageId}
        />
      </div>
    </section>
  );
};

export default PhotoGallery; 