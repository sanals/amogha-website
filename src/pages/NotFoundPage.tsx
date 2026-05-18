'use client';

import React from 'react';
import Link from 'next/link';
import SEO from '../components/atoms/SEO';
import Button from '../components/atoms/Button';
import { notFoundContent } from '../data/notFoundContent';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title={notFoundContent.seo.title}
        description={notFoundContent.seo.description}
        canonicalUrl="/404"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-light dark:bg-neutral-darker px-4 text-center pt-20 pb-32">
        <h1 className="text-primary dark:text-primary-light text-6xl md:text-8xl font-bold font-serif mb-4">{notFoundContent.page.code}</h1>
        <h2 className="text-2xl md:text-3xl font-serif mb-6">{notFoundContent.page.heading}</h2>
        <p className="text-neutral-dark dark:text-neutral-light max-w-md mb-8">
          {notFoundContent.page.message}
        </p>
        <Button href="/" variant="primary" size="large">{notFoundContent.page.backHomeLabel}</Button>
      </div>
    </>
  );
};

export default NotFoundPage; 