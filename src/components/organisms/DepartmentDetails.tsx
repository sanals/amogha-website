import React from 'react';
import { motion } from 'framer-motion';

interface DepartmentDetailsProps {
  department: {
    name: string;
    description?: string;
    approach?: string;
    specialties?: string[];
    offerings?: string[];
    image?: string;
    detailImage?: string;
  };
}

export const DepartmentDetails: React.FC<DepartmentDetailsProps> = ({ department }) => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
            About <span className="text-primary dark:text-primary-light">{department.name}</span>
          </h2>
          
          {department.description && (
            <div className="text-neutral-dark dark:text-neutral-medium mb-6 space-y-4">
              {department.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
          
          {department.approach && (
            <>
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-3">
                Our Approach
              </h3>
              <div className="text-neutral-dark dark:text-neutral-medium mb-6 space-y-4">
                {department.approach.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </>
          )}
          
          {department.specialties && department.specialties.length > 0 && (
            <>
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-3">
                Our Specialties
              </h3>
              <ul className="space-y-3 mb-8">
                {department.specialties.map((specialty, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary dark:text-primary-light mt-1 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-dark dark:text-neutral-medium">{specialty}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          
          {department.offerings && department.offerings.length > 0 && (
            <>
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-3">
                What We Offer
              </h3>
              <ul className="space-y-3 mb-8">
                {department.offerings.map((offering, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary dark:text-primary-light mt-1 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-dark dark:text-neutral-medium">{offering}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
        
        {/* Image Column */}
        <div className="relative order-first lg:order-last">
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img
              src={department.detailImage || department.image || '/images/departments/default-detail.jpg'}
              alt={`${department.name} Treatment at AMOGHA`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
            <p className="text-lg font-serif">Authentic</p>
            <p className="text-sm">Traditional Treatments</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 