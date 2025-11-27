import React from 'react';
import DocumentHead from '../components/head/DocumentHead';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <>
      <DocumentHead
        title={`${title} | AMOGHA The Ayur Hub`}
        description={`${title} page for AMOGHA The Ayur Hub. Content coming soon.`}
      />
      
      <div className="bg-neutral-light dark:bg-neutral-darker min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-dark rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif text-primary dark:text-primary-light mb-6">{title}</h1>
            <p className="text-neutral-dark dark:text-neutral-light mb-8 text-lg">
              This page is under construction. We&apos;re working hard to bring you amazing content soon!
            </p>
            
            <div className="w-20 h-20 mx-auto mb-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-full w-full text-primary-light dark:text-primary-light" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                />
              </svg>
            </div>
            
            <a 
              href="/" 
              className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceholderPage; 