'use client';

import React from 'react';
import PageTitle from '../components/atoms/PageTitle';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll, { fadeInUp, staggerChildren } from '../components/atoms/AnimateOnScroll';
import { motion } from 'framer-motion';
import { LazyImage } from '../components/atoms';
import { doctorsData } from '../data/doctorsData';

const DoctorsPage: React.FC = () => {

  return (
    <>
      <SEO 
        title="Our Doctors"
        description="Meet our team of experienced Ayurvedic physicians at AMOGHA The Ayur Hub. Our doctors combine traditional Ayurvedic knowledge with modern medical understanding."
        keywords="ayurvedic doctors, ayurveda practitioners, experienced physicians, ayurvedic consultants"
      />
      <PageTitle title="Our Doctors" />
      
      <section className="pt-24 py-16 px-4 bg-neutral-light dark:bg-neutral-darker min-h-screen">
        <div className="container mx-auto">
          <AnimateOnScroll variant={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark dark:text-primary-light">
              Our Doctors
            </h1>
            
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-neutral-dark dark:text-neutral-light">
                Our team of experienced Ayurvedic physicians combines traditional knowledge 
                with modern medical understanding to provide the best care for your health needs.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant={staggerChildren} className="mt-12">
            <div className="grid grid-cols-1 gap-8">
              {doctorsData.map((doctor) => (
                <motion.div 
                  key={doctor.id}
                  variants={fadeInUp}
                  className="bg-white dark:bg-neutral-dark rounded-xl shadow-md overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
                    <div className="h-80 md:h-full relative overflow-hidden">
                      <img
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-1 text-primary-DEFAULT">
                          {doctor.name}
                        </h3>
                        <p className="text-neutral-medium mb-2">
                          {doctor.title}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {doctor.specialties && doctor.specialties.map((specialty, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-primary-light/20 text-primary-dark dark:text-primary-light rounded-full text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-neutral-dark dark:text-neutral-light mb-6">
                          <p>{doctor.bio}</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-neutral-medium/10 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-lg font-medium text-primary-dark dark:text-primary-light mb-2">
                              Qualifications
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {doctor.qualifications.map((qualification, index) => (
                                <li key={index} className="text-neutral-dark dark:text-neutral-light">
                                  {qualification}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-medium text-primary-dark dark:text-primary-light mb-2">
                              Languages
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {doctor.languages.map((language, index) => (
                                <li key={index} className="text-neutral-dark dark:text-neutral-light">
                                  {language}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {doctor.isAvailable && doctor.schedulingUrl && (
                          <div className="mt-6">
                            <a 
                              href={doctor.schedulingUrl}
                              className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-lg transition-colors duration-300"
                            >
                              <span>Book Appointment</span>
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
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default DoctorsPage; 