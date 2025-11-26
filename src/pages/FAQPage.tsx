'use client';

import React, { useState } from 'react';
import { faqData, FAQCategory as FAQCategoryType } from '../data/faqData';
import FAQCategory from '../components/organisms/FAQCategory';
import SEO from '../components/atoms/SEO';

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Filter categories based on active filter
  const filteredCategories = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(category => category.id === activeCategory);
  
  // Create structured data for FAQPage schema
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.flatMap(category => 
      category.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    )
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about Ayurvedic treatments, our clinic, and practical information for your visit to AMOGHA The Ayur Hub."
        canonicalUrl="/faq"
        structuredData={faqStructuredData}
      />
      
      <div className="bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <div className="bg-primary-light/10 dark:bg-primary-dark/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-700 dark:text-neutral-light">
                Get answers to common questions about Ayurvedic treatments and our clinic services
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20'
                }`}
              >
                All Categories
              </button>
              {faqData.map(category => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-primary text-white' 
                      : 'bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* FAQ Categories */}
            {filteredCategories.map(category => (
              <FAQCategory key={category.id} category={category} />
            ))}
            
            {/* Still have questions */}
            <div className="mt-16 bg-primary-light/10 dark:bg-primary-dark/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-serif font-semibold text-primary dark:text-primary-light mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 dark:text-neutral-light mb-6">
                We're here to help. Contact our team for any additional information about our treatments or services.
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
      </div>
    </>
  );
};

export default FAQPage; 