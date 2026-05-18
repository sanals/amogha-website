'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LazyImage } from '../atoms';
import AnimateOnScroll, { fadeInUp } from '../atoms/AnimateOnScroll';
import { homeContent } from '../../data/homeContent';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative w-full h-screen min-h-[600px] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/images/home/home.png" 
          alt="AMOGHA Ayurvedic Treatment" 
          className="w-full h-full object-cover"
          width="100%"
          height="100%"
          placeholderSrc="/images/home/home.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <AnimateOnScroll variant={fadeInUp} delay={0.2}>
            <div className="text-white">
              <h2 className="text-secondary-light uppercase tracking-wider text-lg md:text-xl mb-2">
                {homeContent.hero.tagline}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                {homeContent.hero.titleLine1}<br />
                {homeContent.hero.titleLine2}
              </h1>
              <p 
                className="text-lg md:text-xl text-white/80 max-w-xl mb-8"
                dangerouslySetInnerHTML={{ __html: homeContent.hero.description.replace('AMOGHA', '<strong>AMOGHA</strong>') }}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={homeContent.hero.primaryButtonLink}
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300 text-center"
                >
                  {homeContent.hero.primaryButtonText}
                </Link>
                <Link
                  href={homeContent.hero.secondaryButtonLink}
                  className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300 text-center"
                >
                  {homeContent.hero.secondaryButtonText}
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}; 