import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Treatment } from '../../types/treatment';

interface RelatedTreatmentsProps {
  treatments: Treatment[];
}

export const RelatedTreatments: React.FC<RelatedTreatmentsProps> = ({ treatments }) => {
  if (!treatments.length) return null;

  return (
    <section className="py-12 border-t border-neutral-medium/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            Related <span className="text-primary dark:text-primary-light">Treatments</span>
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Explore other traditional Ayurvedic treatments that complement your healing journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <Link
              key={treatment.id}
              to={`/treatments/${treatment.slug}`}
              className="group relative bg-white dark:bg-neutral-darker rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={treatment.imageUrl || treatment.image || '/images/treatments/default.jpg'} 
                  alt={treatment.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-neutral-darker dark:text-neutral-light mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                  {treatment.name}
                </h3>
                <p className="text-neutral-dark dark:text-neutral-medium text-sm line-clamp-2">
                  {treatment.shortDescription}
                </p>
                <div className="mt-4 flex items-center text-sm">
                  <div className="flex items-center text-primary dark:text-primary-light">
                    <svg 
                      className="w-5 h-5 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {treatment.duration}
                  </div>
                  <div className="mx-3 w-1 h-1 rounded-full bg-neutral-medium"></div>
                  <div className="text-secondary dark:text-secondary-light">
                    Learn more
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 