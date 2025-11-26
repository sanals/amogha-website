'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/images/about-ayurveda.jpg"
                alt="AMOGHA Ayurvedic Treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-lg font-serif">25+ Years</p>
              <p className="text-sm">of Ayurvedic Excellence</p>
            </div>
          </div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
              THE BEST <span className="text-primary dark:text-primary-light">AYURVEDA HOSPITAL</span> IN BANGALORE
            </h2>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-4">
              <strong>AMOGHA</strong> stands out as a leading Ayurvedic hospital in Bangalore, offering genuine Ayurveda treatments 
              alongside physiotherapy, yoga sessions, naturopathy, and a right diet regimen.
            </p>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              We warmly invite you to embark on a healing journey with us—one rooted in the deep, 
              traditional principles of Ayurveda. Each program is firmly grounded in the authentic 
              ancient practices of Kerala Ayurveda.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Authentic Ayurvedic treatments',
                'Expert doctors with decades of experience',
                'Personalized treatment plans',
                'Integration of traditional wisdom with modern techniques',
                'Serene and healing environment'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
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
                  <span className="text-neutral-dark dark:text-neutral-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300"
            >
              <span>Learn More About Us</span>
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