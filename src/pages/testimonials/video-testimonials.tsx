import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { testimonialsData } from '../../data/testimonialsData';
import VideoTestimonials from '../../components/organisms/VideoTestimonials';
import Pagination from '../../components/molecules/Pagination';
import SEO from '../../components/atoms/SEO';

const VideoTestimonialsPage: React.FC = () => {
  // Filter only video testimonials
  const videoTestimonials = testimonialsData.filter(
    testimonial => testimonial.isVideo
  );
  
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;
  
  // Calculate pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = videoTestimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );
  
  const totalPages = Math.ceil(videoTestimonials.length / testimonialsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <SEO 
        title="Video Testimonials"
        description="Watch our patients share their healing journey and experiences with our authentic Ayurvedic treatments at AMOGHA The Ayur Hub."
        canonicalUrl="/testimonials/video-testimonials"
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <section className="relative py-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <Link 
                to="/testimonials" 
                className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark transition-colors"
              >
                <FaLongArrowAltLeft className="mr-2" />
                <span>Back to Testimonials</span>
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Video <span className="text-primary dark:text-primary-light">Testimonials</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-neutral-dark dark:text-neutral-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Watch our patients share their healing journeys and experiences with our Ayurvedic treatments.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Video Testimonials Grid Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <VideoTestimonials testimonials={currentTestimonials} className="mb-12" />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
                Read Guest Quotes
              </h2>
              <p className="text-neutral-dark dark:text-neutral-medium mb-8">
                Explore written testimonials from our patients who have experienced the positive effects of our authentic Ayurvedic treatments.
              </p>
              <Link 
                to="/testimonials/guest-quotes"
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Read Guest Quotes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoTestimonialsPage; 