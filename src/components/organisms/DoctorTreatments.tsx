'use client';

import React from 'react';
import Link from 'next/link';
import { Treatment } from '../../types/treatment';
import { TreatmentLink } from '../atoms/TreatmentLink';

interface DoctorTreatmentsProps {
  doctor: {
    name: string;
    title?: string;
  };
  treatments: Treatment[];
}

export const DoctorTreatments: React.FC<DoctorTreatmentsProps> = ({ doctor, treatments }) => {
  return (
    <section className="py-12 border-t border-neutral-medium/10">
      <div>
        <h2 className="text-3xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
          Treatments by <span className="text-primary dark:text-primary-light">Dr. {doctor.name}</span>
        </h2>
        
        <p className="text-neutral-dark dark:text-neutral-medium mb-8">
          Dr. {doctor.name} specializes in the following Ayurvedic treatments and therapies:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {treatments.map((treatment) => (
            <TreatmentLink
              key={treatment.id}
              treatment={treatment}
            />
          ))}
        </div>
        
        <div className="bg-neutral-light/50 dark:bg-neutral-dark/50 p-6 rounded-lg shadow-sm mt-8">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-primary dark:text-primary-light mr-3 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium text-neutral-darker dark:text-neutral-light mb-1">
                Personalized Treatment Plans
              </p>
              <p className="text-neutral-dark dark:text-neutral-medium text-sm">
                Dr. {doctor.name} creates customized treatment plans for each patient based on their individual constitution (Prakriti), imbalances (Vikriti), and specific health concerns. The treatments listed above may be adapted or combined for optimal results.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300"
          >
            <span>Book a Consultation</span>
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}; 