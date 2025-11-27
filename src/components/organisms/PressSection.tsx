'use client';

import React, { useState } from 'react';
import { PressArticle, pressData } from '../../data/pressData';
import PressCard from '../molecules/PressCard';

const PressSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'article' | 'video' | 'mention'>('all');
  
  // Filter articles based on active filter
  const filteredArticles = activeFilter === 'all' 
    ? pressData 
    : pressData.filter(article => article.type === activeFilter);
  
  return (
    <section className="py-12 md:py-20 bg-neutral-light dark:bg-neutral-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeFilter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 border border-neutral-200 dark:border-neutral-700 shadow-sm'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('article')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeFilter === 'article' 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 border border-neutral-200 dark:border-neutral-700 shadow-sm'}`}
            >
              Articles
            </button>
            <button 
              onClick={() => setActiveFilter('video')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeFilter === 'video' 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 border border-neutral-200 dark:border-neutral-700 shadow-sm'}`}
            >
              Videos
            </button>
            <button 
              onClick={() => setActiveFilter('mention')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors 
                ${activeFilter === 'mention' 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 border border-neutral-200 dark:border-neutral-700 shadow-sm'}`}
            >
              Press Mentions
            </button>
          </div>
          
          {/* Grid of Press Cards */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <div key={article.id} className="h-full">
                  <PressCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500 dark:text-neutral-medium">No items found in this category.</p>
            </div>
          )}
          
          {/* Get Featured CTA */}
          <div className="mt-16 bg-primary-light/10 dark:bg-primary-dark/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-primary dark:text-primary-light mb-4">Get Featured in Our Press Section</h3>
            <p className="text-gray-700 dark:text-neutral-light mb-6">
              Are you a journalist or content creator interested in covering our Ayurvedic clinic? 
              We&apos;d love to collaborate with you.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark transition-colors text-white rounded-full font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection; 