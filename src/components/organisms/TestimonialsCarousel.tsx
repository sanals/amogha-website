import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TestimonialCard from '../molecules/TestimonialCard';
import { Testimonial } from '../../types/testimonial';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  featuredOnly?: boolean;
  className?: string;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  featuredOnly = false,
  className = '',
  autoScroll = true,
  autoScrollInterval = 5000,
}) => {
  // Filter testimonials if featuredOnly is true
  const filteredTestimonials = featuredOnly
    ? testimonials.filter(testimonial => testimonial.featured)
    : testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset the timer when testimonials change
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredTestimonials]);

  // Handle auto scrolling
  useEffect(() => {
    if (autoScroll && !isPaused && filteredTestimonials.length > 1) {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      
      autoScrollTimeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTestimonials.length);
      }, autoScrollInterval);
    }

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [currentIndex, autoScroll, isPaused, filteredTestimonials.length, autoScrollInterval]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  }, [filteredTestimonials.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % filteredTestimonials.length
    );
  }, [filteredTestimonials.length]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  if (filteredTestimonials.length === 0) {
    return null;
  }

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <TestimonialCard
              name={currentTestimonial.patientName}
              designation={currentTestimonial.location || ''}
              testimonial={currentTestimonial.testimonial}
              image={currentTestimonial.imageUrl || '/images/default-avatar.jpg'}
              rating={currentTestimonial.rating}
              isVideo={!!currentTestimonial.videoUrl}
              videoUrl={currentTestimonial.videoUrl}
              className="w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - only show if more than one testimonial */}
      {filteredTestimonials.length > 1 && (
        <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 pointer-events-none">
          <button
            onClick={goToPrevious}
            className="bg-white/80 dark:bg-neutral-dark/80 text-primary-DEFAULT rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-neutral-dark transition-colors -ml-4 pointer-events-auto"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="bg-white/80 dark:bg-neutral-dark/80 text-primary-DEFAULT rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-neutral-dark transition-colors -mr-4 pointer-events-auto"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Dot Indicators - only show if more than one testimonial */}
      {filteredTestimonials.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-primary-DEFAULT' 
                  : 'bg-neutral-medium hover:bg-primary-light'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel; 