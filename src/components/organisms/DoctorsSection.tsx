'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Doctor } from '../../types/doctor';
import { DoctorCard } from '../molecules/DoctorCard';
import { Heading } from '../atoms/Heading';

interface DoctorsSectionProps {
  title?: string;
  subtitle?: string;
  doctors: Doctor[];
  className?: string;
  maxDisplay?: number;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  title = 'Our Doctors',
  subtitle = 'Meet our team of dedicated Ayurvedic physicians with years of experience',
  doctors,
  className = '',
  maxDisplay = 4,
}) => {
  // Show only the specified number of doctors
  const displayedDoctors = doctors.slice(0, maxDisplay);

  return (
    <section className={`py-16 bg-neutral-light/50 dark:bg-neutral-darker ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading
            level={2}
            className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4"
          >
            {title}
          </Heading>
          <p className="text-neutral-dark dark:text-neutral-medium">
            {subtitle}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            staggerChildren: 0.1
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
        >
          {displayedDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <DoctorCard 
                doctor={doctor}
                className="h-full" 
              />
            </motion.div>
          ))}
        </motion.div>

        {doctors.length > maxDisplay && (
          <div className="text-center">
            <Link 
              href="/doctors" 
              className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
            >
              <span>View All Doctors</span>
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
        )}
      </div>
    </section>
  );
}; 