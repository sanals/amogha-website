import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../molecules/TestimonialCard';
import { Heading } from '../atoms/Heading';
import { Testimonial } from '../../data/testimonialsData';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  className = '',
}) => {
  return (
    <section className={`py-16 bg-neutral-light dark:bg-neutral-darker ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading
            level={2}
            className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4"
          >
            <span className="text-neutral-darker dark:text-neutral-light">What Our </span>
            <span className="text-primary dark:text-primary-light">Patients</span>
            <span className="text-neutral-darker dark:text-neutral-light"> Say</span>
          </Heading>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Read testimonials from patients who have experienced the healing power of our Ayurvedic treatments
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
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
                image={testimonial.image || '/images/testimonials/patient1.jpg'}
                rating={testimonial.rating}
                isVideo={testimonial.isVideo}
                videoUrl={testimonial.videoUrl}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a 
            href="/testimonials" 
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
          >
            <span>View All Testimonials</span>
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
          </a>
        </div>
      </div>
    </section>
  );
}; 