'use client';

import React from 'react';
import Link from 'next/link';
import { TreatmentCard } from '../molecules/TreatmentCard';
import { Treatment } from '../../types/treatment';

interface DepartmentTreatmentsProps {
  departmentName: string;
  treatments: Treatment[];
}

export const DepartmentTreatments: React.FC<DepartmentTreatmentsProps> = ({ departmentName, treatments }) => {
  return (
    <section className="py-12 border-t border-neutral-medium/10">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            <span className="text-primary dark:text-primary-light">Treatments</span> Offered
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Explore our specialized treatments available in the {departmentName} department
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {treatments.map((treatment) => (
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

        <div className="text-center mt-10">
          <Link 
            href="/treatments" 
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
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
      </div>
    </section>
  );
}; 