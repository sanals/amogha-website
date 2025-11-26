'use client';

import React from 'react';
import SEO from '../components/atoms/SEO';
import PressSection from '../components/organisms/PressSection';

const PressPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Press & News"
        description="Stay updated with the latest news, articles, and media coverage about AMOGHA The Ayur Hub and our Ayurvedic treatments."
        canonicalUrl="/press"
      />
      
      <div className="bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <div className="bg-primary-light/10 dark:bg-primary-dark/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-4">Press & News</h1>
              <p className="text-lg text-gray-700 dark:text-neutral-light">
                Articles, videos, and mentions about our Ayurvedic wellness journey
              </p>
            </div>
          </div>
        </div>
        
        {/* Press content */}
        <PressSection />
        
        {/* Media Kit Section */}
        <section className="py-16 bg-white dark:bg-neutral-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-primary-light/5 dark:bg-primary-dark/10 rounded-lg overflow-hidden shadow-md">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-serif font-bold text-primary dark:text-primary-light mb-4">Media Resources</h2>
                    <p className="text-gray-600 dark:text-neutral-light mb-6">
                      Download our media kit for brand assets, high-resolution images, and information about our clinic for your publications.
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="dark:text-neutral-light">Brand logos in various formats</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="dark:text-neutral-light">High-resolution facility photos</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="dark:text-neutral-light">Fact sheet about our treatments</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="dark:text-neutral-light">Doctor profiles and credentials</span>
                      </li>
                    </ul>
                    <button className="px-6 py-3 bg-primary hover:bg-primary-dark transition-colors text-white rounded-full font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Media Kit
                    </button>
                  </div>
                  <div className="md:w-1/2 bg-primary-light/20 dark:bg-primary-dark/30 flex items-center justify-center p-8">
                    <img 
                      src="/images/press/media-kit.jpg" 
                      alt="AMOGHA Media Kit" 
                      className="rounded-lg shadow-lg max-h-80 object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PressPage; 