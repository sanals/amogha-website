'use client';

import React from 'react';
import Link from 'next/link';
import { TreatmentCard } from '../molecules/TreatmentCard';
import { treatmentsData } from '../../data/treatmentsData';

interface TreatmentShowcaseProps {
  className?: string;
  treatmentLimit?: number;
  title?: string;
  description?: string;
  showAllLink?: boolean;
}

export const TreatmentShowcase: React.FC<TreatmentShowcaseProps> = ({ 
  className = '',
  treatmentLimit = 8,
  title = 'Ayurvedic Treatments',
  description = 'Our comprehensive Ayurvedic healing interventions focus on Wellness, Care, and Curative programs, addressing a wide range of chronic and acute conditions for both adults and children.',
  showAllLink = true
}) => {
  // Filter treatments to show featured ones
  const featuredTreatments = treatmentsData
    .filter(treatment => treatment.featured)
    .slice(0, treatmentLimit);

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            <span className="text-primary dark:text-primary-light">Ayurvedic</span> {title}
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {featuredTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              id={treatment.id}
              name={treatment.name}
              slug={treatment.slug}
              description={treatment.shortDescription || treatment.description}
              imageUrl={treatment.imageUrl}
              duration={treatment.duration}
            />
          ))}
        </div>

        {showAllLink && (
          <div className="text-center">
            <Link 
              href="/treatments" 
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300"
            >
              <span>View All Treatments</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}; 