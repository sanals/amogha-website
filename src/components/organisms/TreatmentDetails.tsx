import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Treatment } from '../../types/treatment';

interface TreatmentDetailsProps {
  treatment: Treatment;
}

export const TreatmentDetails: React.FC<TreatmentDetailsProps> = ({ treatment }) => {
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
            About <span className="text-primary dark:text-primary-light">{treatment.name}</span>
          </h2>
          
          <div className="text-neutral-dark dark:text-neutral-medium mb-6 space-y-4">
            {treatment.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          {/* Treatment Process Section */}
          <div className="mb-8">
            <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-4">
              Treatment Process
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-neutral-darker shadow-sm rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span>1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker dark:text-neutral-light mb-1">
                      Consultation
                    </h4>
                    <p className="text-neutral-dark dark:text-neutral-medium text-sm">
                      Initial consultation with our Ayurvedic physician to understand your specific needs, 
                      constitution (prakriti), and current imbalances (vikriti).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-darker shadow-sm rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span>2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker dark:text-neutral-light mb-1">
                      Preparation
                    </h4>
                    <p className="text-neutral-dark dark:text-neutral-medium text-sm">
                      Preparation of herbal medicines, oils, and other materials specifically 
                      formulated for your treatment needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-darker shadow-sm rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span>3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker dark:text-neutral-light mb-1">
                      Treatment
                    </h4>
                    <p className="text-neutral-dark dark:text-neutral-medium text-sm">
                      The core treatment session where specific techniques are applied by 
                      our trained therapists following authentic Ayurvedic protocols.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-darker shadow-sm rounded-lg p-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span>4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker dark:text-neutral-light mb-1">
                      Post-Treatment Care
                    </h4>
                    <p className="text-neutral-dark dark:text-neutral-medium text-sm">
                      Guidance on diet, lifestyle modifications, and herbal supplements to 
                      continue the healing process at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300"
            >
              <span>Book This Treatment</span>
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
        </motion.div>
        
        {/* Image Column */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <img
              src={treatment.image || treatment.imageUrl || '/images/treatments/default-detail.jpg'}
              alt={`${treatment.name} Treatment Process at AMOGHA`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
            <p className="text-lg font-serif">Duration</p>
            <p className="text-2xl font-bold">{treatment.duration || 'Varies'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 