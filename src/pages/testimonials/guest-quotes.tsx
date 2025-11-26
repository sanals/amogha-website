'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Link from 'next/link';

import { testimonialsData } from '../../data/testimonialsData';
import GuestQuotes from '../../components/organisms/GuestQuotes';
import Pagination from '../../components/molecules/Pagination';
import SEO from '../../components/atoms/SEO';

const GuestQuotesPage: React.FC = () => {
  // Filter only text testimonials (not videos)
  const textTestimonials = testimonialsData.filter(
    testimonial => !testimonial.isVideo
  );
  
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;
  
  // Calculate pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = textTestimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );
  
  const totalPages = Math.ceil(textTestimonials.length / testimonialsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <SEO 
        title="Guest Quotes"
        description="Read what our patients have to say about their healing experiences and results from authentic Ayurvedic treatments at AMOGHA The Ayur Hub."
        canonicalUrl="/testimonials/quotes"
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-0">
              <Link 
                href="/testimonials" 
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
                Guest <span className="text-primary dark:text-primary-light">Quotes</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-neutral-dark dark:text-neutral-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Read authentic testimonials from our patients who have experienced the healing power of Ayurveda at AMOGHA.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Grid Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <GuestQuotes testimonials={currentTestimonials} className="mb-12" />
            
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
                Watch Our Video Testimonials
              </h2>
              <p className="text-neutral-dark dark:text-neutral-medium mb-8">
                Hear directly from our patients as they share their healing journey and experiences with our Ayurvedic treatments.
              </p>
              <Link 
                href="/testimonials/videos"
                className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Watch Video Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuestQuotesPage; 