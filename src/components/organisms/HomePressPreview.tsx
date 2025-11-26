'use client';

import React from 'react';
import { pressData } from '../../data/pressData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LazyImage from '../atoms/LazyImage';
import AnimateOnScroll, { fadeInUp, staggerChildren } from '../atoms/AnimateOnScroll';

const HomePressPreview: React.FC = () => {
  // Get the 3 most recent press items
  const recentPressItems = pressData.slice(0, 3);
  
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <AnimateOnScroll variant={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Latest News</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the latest articles and press coverage about our Ayurvedic clinic
          </p>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentPressItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48">
                <LazyImage 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`
                    px-2 py-1 text-xs font-semibold rounded-full 
                    ${item.type === 'article' ? 'bg-primary text-white' : 
                      item.type === 'video' ? 'bg-secondary text-white' : 
                      'bg-gray-200 text-gray-700'}
                  `}>
                    {item.type === 'article' ? 'Article' : 
                     item.type === 'video' ? 'Video' : 'Press Mention'}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {item.description.length > 120 
                    ? `${item.description.substring(0, 120)}...` 
                    : item.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{item.date}</span>
                  <Link 
                    href={`/press#${item.id}`} 
                    className="text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimateOnScroll>
        
        <div className="text-center mt-12">
          <Link 
            href="/press" 
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark transition-colors text-white rounded-full font-medium"
          >
            View All Press & News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePressPreview; 