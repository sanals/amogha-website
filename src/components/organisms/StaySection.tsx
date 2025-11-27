'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface StaySectionProps {
  className?: string;
}

export const StaySection: React.FC<StaySectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-neutral-light/30 dark:bg-neutral-dark/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            STAY
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Experience the perfect healing environment during your treatment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/accommodation.jpg"
              alt="AMOGHA Accommodation"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-primary dark:text-primary-light mb-4">
              A Healing-Friendly Atmosphere
            </h3>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              <strong>AMOGHA</strong> Ayurveda Hospital is purposefully designed to create a healing-friendly atmosphere. 
              Our top priority is to ensure that your healing journey, within a setting that promotes mental and physical 
              well-being, is both effective and enjoyable.
            </p>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              Our ayurvedic center is thoughtfully crafted to provide a resort-like environment with a range of 
              entertainment options, luxurious amenities, and exceptional service. It&apos;s no surprise that 
              <strong> AMOGHA</strong> is recognized as one of Bangalore&apos;s premier Ayurvedic centers.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Peaceful and serene environment',
                'Comfortable, spacious rooms',
                'Healing architecture',
                'Traditional aesthetic with modern comforts',
                'Nutritious Ayurvedic cuisine',
                'Meditation and yoga spaces',
                'Therapeutic gardens',
                'Attentive, caring staff'
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary dark:text-primary-light mt-1 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-dark dark:text-neutral-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link
              href="/accommodation"
              className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
            >
              <span>View More</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 