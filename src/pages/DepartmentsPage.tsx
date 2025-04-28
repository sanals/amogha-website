import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/atoms/PageTitle';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll, { fadeInUp, staggerChildren } from '../components/atoms/AnimateOnScroll';
import { motion } from 'framer-motion';
import { departmentsData } from '../data/departmentsData';

const DepartmentsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Specialized Departments"
        description="Explore our specialized Ayurvedic departments at AMOGHA The Ayur Hub, each focused on specific aspects of holistic health."
        keywords="ayurvedic departments, panchakarma, kayachikitsa, rasayana, kaumarabhritya"
      />
      <PageTitle title="Our Specialized Departments" />
      
      <section className="pt-24 py-16 px-4 bg-neutral-light dark:bg-neutral-darker min-h-screen">
        <div className="container mx-auto">
          <AnimateOnScroll variant={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark dark:text-primary-light">
              Our Specialized Departments
            </h1>
            
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-neutral-dark dark:text-neutral-light">
                Each of our specialized departments focuses on specific aspects of Ayurvedic medicine, 
                allowing us to provide targeted care for your unique health needs.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {departmentsData.map((dept) => (
              <div key={dept.id} className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-dark">
                {/* Card with two clear sections */}
                <div className="flex flex-col">
                  {/* Image Section */}
                  <div className="h-60 overflow-hidden">
                    <img
                      src={dept.image || '/images/placeholder.jpg'}
                      alt={dept.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Text Section - Completely separate from image */}
                  <div className="p-6 bg-white dark:bg-neutral-dark border-t border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-xl font-bold mb-3 text-primary-DEFAULT">
                      {dept.name}
                    </h3>
                    <p className="mb-4 text-neutral-dark dark:text-neutral-light">
                      {dept.shortDescription}
                    </p>
                    <Link
                      to={`/departments/${dept.slug}`}
                      className="inline-flex items-center text-primary-light hover:text-primary-DEFAULT"
                    >
                      <span>Learn more</span>
                      <svg 
                        className="w-4 h-4 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentsPage; 