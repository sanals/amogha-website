'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Treatment } from '../../types/treatment';
import { Department } from '../../types/department';

interface TreatmentHeroProps {
  treatment: Treatment;
  department?: Department | null;
}

export const TreatmentHero: React.FC<TreatmentHeroProps> = ({ treatment, department }) => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={treatment.image || treatment.imageUrl || '/images/treatments/default-banner.jpg'} 
          alt={`${treatment.name} Treatment at AMOGHA`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {department && (
              <Link 
                href={`/departments/${department.slug}`}
                className="text-secondary-light uppercase tracking-wider text-lg md:text-xl mb-2 hover:text-secondary inline-block"
              >
                {department.name}
              </Link>
            )}
            
            {!department && (
              <h2 className="text-secondary-light uppercase tracking-wider text-lg md:text-xl mb-2">
                Ayurvedic Treatment
              </h2>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              {treatment.name}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-6 items-center">
              {treatment.duration && (
                <div className="bg-primary-dark/30 text-white text-sm rounded-full px-4 py-1.5 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{treatment.duration}</span>
                </div>
              )}
              
              {treatment.category && (
                <div className="bg-primary-dark/30 text-white text-sm rounded-full px-4 py-1.5">
                  {treatment.category}
                </div>
              )}
            </div>
            
            {treatment.shortDescription && (
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                {treatment.shortDescription}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 