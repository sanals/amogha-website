'use client';

import React from 'react';
import { DepartmentCard } from '../atoms/DepartmentCard';
import { departmentsData } from '../../data/departmentsData';
import Link from 'next/link';

interface DepartmentShowcaseProps {
  className?: string;
}

export const DepartmentShowcase: React.FC<DepartmentShowcaseProps> = ({ className = '' }) => {
  // Filter departments to show featured ones if needed
  const departments = departmentsData.filter(dept => dept.featured);

  return (
    <section className={`py-16 bg-neutral-light/50 dark:bg-neutral-dark/50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            Our <span className="text-primary dark:text-primary-light">Departments</span>
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Discover our specialized departments offering authentic Ayurvedic treatments for a wide range of conditions
            and preventive healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              id={department.id}
              name={department.name}
              shortName={department.shortName}
              slug={department.slug}
              icon={department.icon}
              className="h-full"
            />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/departments" 
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
          >
            <span>View All Departments</span>
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