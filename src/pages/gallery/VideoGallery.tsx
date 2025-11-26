'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoGallery from '../../components/organisms/VideoGallery';
import { videoGalleryData, GalleryCategory } from '../../data/galleryData';
import SEO from '../../components/atoms/SEO';

const VideoGalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredVideos, setFilteredVideos] = useState(videoGalleryData);
  
  // Get unique categories
  const categories = [
    'all',
    ...Object.values(GalleryCategory)
  ];
  
  // Filter videos based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredVideos(videoGalleryData);
    } else {
      const filtered = videoGalleryData.filter(
        (video) => video.category === selectedCategory
      );
      setFilteredVideos(filtered);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
      <SEO 
        title="Video Gallery"
        description="Watch videos about our Ayurvedic treatments, patient testimonials, and educational content from AMOGHA The Ayur Hub."
        canonicalUrl="/gallery/videos"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
              <span className="text-primary dark:text-primary-light">Video</span> Gallery
            </h1>
            <p className="text-neutral-dark dark:text-neutral-medium max-w-2xl mx-auto mb-8">
              Watch our collection of videos featuring treatments, patient testimonials, and educational 
              content. Learn more about Ayurvedic practices and see real results from our therapies.
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
                  {category === 'all' ? 'All Videos' : category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery display */}
          <VideoGallery 
            videos={filteredVideos} 
            title="" 
            description=""
          />

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-dark dark:text-neutral-medium">
                No videos found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryPage; 