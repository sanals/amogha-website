import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PanchakarmaSectionProps {
  className?: string;
}

export const PanchakarmaSection: React.FC<PanchakarmaSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
              PANCHAKARMA
            </h2>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              Panchakarma is a fundamental detoxification treatment approach aimed at purifying and revitalizing 
              the mind, body, and consciousness. Panchakarma utilizes five distinct pathways to facilitate the removal 
              of accumulated waste and toxins from the body.
            </p>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              In the context of Panchakarma, 'pancha' translates to 'five,' while 'karma' signifies 'action.' 
              Panchakarma is an integral component of Ayurvedic therapeutic procedures, encompassing preventive, 
              curative, and promotive measures to address various ailments and unhealthy conditions, such as back pain 
              and skin issues.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-4">
                The Five Actions of Panchakarma
              </h3>
              
              <div className="space-y-3">
                {[
                  { name: 'Vamana', desc: 'Therapeutic emesis' },
                  { name: 'Virechana', desc: 'Therapeutic purgation' },
                  { name: 'Basti', desc: 'Medicated enema' },
                  { name: 'Nasya', desc: 'Nasal administration of medication' },
                  { name: 'Rakta Mokshana', desc: 'Therapeutic bloodletting' }
                ].map((action, index) => (
                  <div key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <span className="font-medium text-neutral-darker dark:text-neutral-light">{action.name}</span>
                      <span className="mx-2 text-neutral-medium">-</span>
                      <span className="text-neutral-dark dark:text-neutral-medium">{action.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              The cost of Panchakarma treatments varies depending on the specific therapies and duration involved. 
              Treatments are customized to each patient's needs, considering their particular ailments and individual 
              constitution. Consequently, they require careful monitoring and supervision.
            </p>
            
            <Link
              to="/treatments/panchakarma"
              className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
            >
              <span>View More</span>
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
          </motion.div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/panchakarma-treatment.jpg"
                alt="Panchakarma Treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-neutral-darker p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-neutral-darker dark:text-neutral-light">Authentic Treatment</p>
                  <p className="text-xs text-neutral-medium">Traditional Kerala Panchakarma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 