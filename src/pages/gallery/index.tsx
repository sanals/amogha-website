import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const GalleryIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
      <Helmet>
        <title>Gallery | AMOGHA The Ayur Hub</title>
        <meta 
          name="description" 
          content="Explore AMOGHA The Ayur Hub's photo and video gallery showcasing our Ayurvedic clinic, treatments, and patient experiences."
        />
      </Helmet>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
              <span className="text-primary dark:text-primary-light">Our</span> Gallery
            </h1>
            <p className="text-neutral-dark dark:text-neutral-medium max-w-2xl mx-auto">
              Experience the healing environment of AMOGHA The Ayur Hub through our collection of photos and videos.
              Get a visual glimpse into our Ayurvedic treatments, facilities, and patient experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Photo Gallery Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-neutral-dark rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/gallery/photo-gallery-cover.jpg" 
                  alt="AMOGHA Photo Gallery" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-serif text-primary dark:text-primary-light mb-3">
                  Photo Gallery
                </h2>
                <p className="text-neutral-dark dark:text-neutral-medium mb-6">
                  Browse through our collection of images showcasing our clinic, therapies, and facilities.
                </p>
                <Link 
                  to="/gallery/photos"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300"
                >
                  <span>Browse Photos</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Video Gallery Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-neutral-dark rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src="/images/gallery/video-gallery-cover.jpg" 
                  alt="AMOGHA Video Gallery" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-serif text-primary dark:text-primary-light mb-3">
                  Video Gallery
                </h2>
                <p className="text-neutral-dark dark:text-neutral-medium mb-6">
                  Watch videos of treatments, patient testimonials, and educational content about Ayurveda.
                </p>
                <Link 
                  to="/gallery/videos"
                  className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors duration-300"
                >
                  <span>Watch Videos</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryIndexPage; 