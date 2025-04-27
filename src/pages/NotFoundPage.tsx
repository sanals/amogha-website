import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/atoms/SEO';
import Button from '../components/atoms/Button';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for could not be found."
        canonicalUrl="/404"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-light dark:bg-neutral-darker px-4 text-center pt-20 pb-32">
        <h1 className="text-primary dark:text-primary-light text-6xl md:text-8xl font-bold font-serif mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Page Not Found</h2>
        <p className="text-neutral-dark dark:text-neutral-light max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary" size="large">Go Back Home</Button>
      </div>
    </>
  );
};

export default NotFoundPage; 