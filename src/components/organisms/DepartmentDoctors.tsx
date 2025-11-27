'use client';

import React from 'react';
import Link from 'next/link';
import { DoctorCard } from '../molecules/DoctorCard';
import { Doctor } from '../../types/doctor';

interface DepartmentDoctorsProps {
  departmentName: string;
  doctors: Doctor[];
}

export const DepartmentDoctors: React.FC<DepartmentDoctorsProps> = ({ departmentName, doctors }) => {
  return (
    <section className="py-12 border-t border-neutral-medium/10">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            Our <span className="text-primary dark:text-primary-light">Expert</span> Doctors
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Meet our specialized physicians in the {departmentName} department
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              className="h-full"
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/doctors" 
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
          >
            <span>View All Doctors</span>
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