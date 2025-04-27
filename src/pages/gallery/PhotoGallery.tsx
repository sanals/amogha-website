import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from '../../components/organisms/PhotoGallery';
import { photoGalleryData, GalleryCategory } from '../../data/galleryData';
import SEO from '../../components/atoms/SEO';

const PhotoGalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState(photoGalleryData);
  
  // Get unique categories
  const categories = [
    'all',
    ...Object.values(GalleryCategory)
  ];
  
  // Filter images based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(photoGalleryData);
    } else {
      const filtered = photoGalleryData.filter(
        (image) => image.category === selectedCategory
      );
      setFilteredImages(filtered);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
      <SEO 
        title="Photo Gallery"
        description="View our gallery of images showcasing AMOGHA The Ayur Hub's facilities, treatments, and healing environment."
        canonicalUrl="/gallery/photos"
      />

      <div className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
              <span className="text-primary dark:text-primary-light">Photo</span> Gallery
            </h1>
            <p className="text-neutral-dark dark:text-neutral-medium max-w-2xl mx-auto mb-8">
              Explore our collection of images showcasing our clinic, treatments, and healing environment. 
              Get a visual glimpse into the authentic Ayurvedic experience at AMOGHA The Ayur Hub.
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light hover:bg-primary/10 dark:hover:bg-primary-dark/20'
                  }`}
                >
                  {category === 'all' ? 'All Photos' : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery display */}
          <PhotoGallery 
            images={filteredImages} 
            title="" 
            description=""
          />

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-dark dark:text-neutral-medium">
                No images found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryPage; 