import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface PlaceholderPageProps {
  title?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Generate title based on path if not provided
  const pageTitle = title || path.split('/').filter(Boolean).map(
    segment => segment.charAt(0).toUpperCase() + segment.slice(1)
  ).join(' > ');
  
  return (
    <>
      <Helmet>
        <title>{pageTitle} | AMOGHA The Ayur Hub</title>
        <meta name="description" content={`${pageTitle} page at AMOGHA The Ayur Hub, offering authentic Ayurvedic treatments and therapies.`} />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-neutral-dark p-8 rounded-lg shadow-md">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-6 text-center">
              {pageTitle}
            </h1>
            
            <p className="text-center text-neutral-dark dark:text-neutral-medium mb-8">
              This section is currently under development. Please check back soon for updates.
            </p>
            
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-secondary-light rounded-full"></div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-neutral-dark dark:text-neutral-medium">
                We are working hard to bring you the best content for this section.
                In the meantime, feel free to explore other parts of our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceholderPage; 