'use client';

import React from 'react';
import Link from 'next/link';
import { Treatment } from '../../types/treatment';

interface TreatmentLinkProps {
  treatment: Treatment;
  className?: string;
}

export const TreatmentLink: React.FC<TreatmentLinkProps> = ({ treatment, className = '' }) => {
  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className={`block p-4 bg-white dark:bg-neutral-darker rounded-lg border border-neutral-light dark:border-neutral-dark hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-center">
        {treatment.icon && (
          <div className="w-10 h-10 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center mr-4 flex-shrink-0">
            <i className={`${treatment.icon} text-lg text-primary dark:text-primary-light`}></i>
          </div>
        )}
        
        <div>
          <h3 className="text-neutral-darker dark:text-neutral-light font-medium">{treatment.name}</h3>
          {treatment.shortDescription && (
            <p className="text-neutral-medium text-sm line-clamp-1">
              {treatment.shortDescription}
            </p>
          )}
        </div>
        
        <svg
          className="w-5 h-5 text-primary dark:text-primary-light ml-auto flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}; 