'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../data/testimonialsData';
import TestimonialCard from '../molecules/TestimonialCard';

interface VideoTestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ 
  testimonials,
  className = ''
}) => {
  // Animation variants for staggering the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Filter only testimonials that have videos
  const videoTestimonials = testimonials.filter(
    testimonial => testimonial.videoUrl && testimonial.videoUrl.trim() !== ''
  );

  return (
    <div className={className}>
      {videoTestimonials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-neutral-medium dark:text-neutral-light">
            No video testimonials available at the moment.
          </p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {videoTestimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard 
                name={testimonial.name}
                designation={testimonial.designation || ''}
                testimonial={testimonial.testimonial}
                image={testimonial.image || '/images/placeholder.jpg'}
                rating={testimonial.rating}
                isVideo={true}
                videoUrl={testimonial.videoUrl}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default VideoTestimonials; 