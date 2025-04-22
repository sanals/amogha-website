import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../molecules/TestimonialCard';
import { Testimonial } from '../../data/testimonialsData';

interface GuestQuotesProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  className?: string;
  itemsPerPage?: number;
}

const GuestQuotes: React.FC<GuestQuotesProps> = ({
  testimonials,
  title = 'What Our Patients Say',
  description = 'Read testimonials from patients who have experienced healing through our authentic Ayurvedic treatments.',
  className = '',
  itemsPerPage = 6
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Get current page items
  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the component
    window.scrollTo({
      top: window.scrollY - 100,
      behavior: 'smooth',
    });
  };

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TestimonialCard
                name={testimonial.name}
                designation={testimonial.designation || ''}
                testimonial={testimonial.testimonial}
                image={testimonial.image || '/images/testimonials/default-avatar.jpg'}
                rating={testimonial.rating}
                isVideo={testimonial.isVideo}
                videoUrl={testimonial.videoUrl}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center">
              <button
                onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className={`p-2 rounded-md mr-2 ${
                  currentPage === 0
                    ? 'text-neutral-medium cursor-not-allowed'
                    : 'text-primary dark:text-primary-light hover:bg-primary/10 dark:hover:bg-primary-dark/20'
                }`}
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`w-10 h-10 mx-1 rounded-full ${
                    currentPage === index
                      ? 'bg-primary text-white'
                      : 'text-neutral-dark dark:text-neutral-light hover:bg-neutral-light dark:hover:bg-neutral-dark'
                  }`}
                  aria-label={`Page ${index + 1}`}
                  aria-current={currentPage === index ? 'page' : undefined}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-md ml-2 ${
                  currentPage === totalPages - 1
                    ? 'text-neutral-medium cursor-not-allowed'
                    : 'text-primary dark:text-primary-light hover:bg-primary/10 dark:hover:bg-primary-dark/20'
                }`}
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuestQuotes; 