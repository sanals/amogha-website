import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../components/atoms/PageTitle';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll, { fadeInUp, staggerChildren } from '../components/atoms/AnimateOnScroll';
import { motion } from 'framer-motion';
import { LazyImage } from '../components/atoms';
import { HeaderOverlayProvider } from '../context/HeaderOverlayContext';

// Gallery categories
const categories = [
  { id: 'all', name: 'All', path: '/gallery' },
  { id: 'photos', name: 'Photos', path: '/gallery/photos' },
  { id: 'videos', name: 'Videos', path: '/gallery/videos' },
  { id: 'events', name: 'Events', path: '/gallery/events' }
];

// Placeholder gallery data - photos
const photoGalleryItems = Array.from({ length: 8 }, (_, i) => ({
  id: `photo-${i + 1}`,
  src: '/images/placeholder.jpg',
  alt: `Gallery photo ${i + 1}`,
  type: 'photo'
}));

// Placeholder gallery data - videos
const videoGalleryItems = Array.from({ length: 4 }, (_, i) => ({
  id: `video-${i + 1}`,
  src: '/images/placeholder.jpg',
  alt: `Gallery video ${i + 1}`,
  type: 'video',
  videoId: `dQw4w9WgXcQ` // Placeholder YouTube ID
}));

// Placeholder gallery data - events
const eventGalleryItems = Array.from({ length: 4 }, (_, i) => ({
  id: `event-${i + 1}`,
  src: '/images/placeholder.jpg',
  alt: `Gallery event ${i + 1}`,
  type: 'event'
}));

// Combined gallery items
const allGalleryItems = [
  ...photoGalleryItems,
  ...videoGalleryItems,
  ...eventGalleryItems
];

const GalleryPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Determine active category based on URL path
  useEffect(() => {
    // Extract category from path
    const path = location.pathname;
    
    if (path === '/gallery') {
      setActiveCategory('all');
    } else if (path === '/gallery/photos') {
      setActiveCategory('photos');
    } else if (path === '/gallery/videos') {
      setActiveCategory('videos');
    } else if (path === '/gallery/events') {
      setActiveCategory('events');
    }
  }, [location.pathname]);
  
  // Filter gallery items based on active category
  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return allGalleryItems;
    } else if (activeCategory === 'photos') {
      return photoGalleryItems;
    } else if (activeCategory === 'videos') {
      return videoGalleryItems;
    } else if (activeCategory === 'events') {
      return eventGalleryItems;
    }
    return allGalleryItems;
  };
  
  const filteredItems = getFilteredItems();
  
  // Handle category change by updating URL
  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      navigate(category.path);
    }
  };
  
  // Generate appropriate page title and SEO descriptions
  const getPageTitle = () => {
    if (activeCategory === 'photos') return 'Photo Gallery';
    if (activeCategory === 'videos') return 'Video Gallery';
    if (activeCategory === 'events') return 'Event Gallery';
    return 'Gallery';
  };
  
  const getPageDescription = () => {
    if (activeCategory === 'photos') {
      return 'Browse our collection of Ayurvedic clinic photos at AMOGHA The Ayur Hub.';
    } else if (activeCategory === 'videos') {
      return 'Watch videos showcasing Ayurvedic treatments and testimonials at AMOGHA The Ayur Hub.';
    } else if (activeCategory === 'events') {
      return 'See photos from events and workshops hosted by AMOGHA The Ayur Hub.';
    }
    return 'Explore our gallery showcasing our Ayurvedic clinic, treatments, and events at AMOGHA The Ayur Hub.';
  };
  
  return (
    <HeaderOverlayProvider mode="light">
      <SEO 
        title={getPageTitle()}
        description={getPageDescription()}
        keywords={`ayurvedic ${activeCategory !== 'all' ? activeCategory : 'gallery'}, ayurveda center images, natural healing visuals`}
      />
      <PageTitle title={getPageTitle()} />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimateOnScroll variant={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark">
              {getPageTitle()}
            </h1>
            
            {/* Category Navigation Tabs */}
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-DEFAULT text-white'
                      : 'bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light hover:bg-neutral-medium'
                  }`}
                  aria-pressed={activeCategory === category.id}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant={staggerChildren} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeInUp}
                  className="rounded-lg overflow-hidden shadow-md aspect-square relative group"
                >
                  {/* Display play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-DEFAULT bg-opacity-90 transition-transform duration-300 group-hover:scale-110">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-8 w-8 text-white" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  <LazyImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    width={300}
                    height={300}
                  />
                  
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                </motion.div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12 text-neutral-medium">
                No items found in this category. Please check back later.
              </div>
            )}
          </AnimateOnScroll>
        </div>
      </section>
    </HeaderOverlayProvider>
  );
};

export default GalleryPage; 