import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaVideo } from 'react-icons/fa';

const TestimonialsIndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | AMOGHA The Ayur Hub</title>
        <meta name="description" content="Read testimonials and watch video stories from patients who have experienced healing through our authentic Ayurvedic treatments at AMOGHA The Ayur Hub." />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-serif text-neutral-darker dark:text-neutral-light mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary dark:text-primary-light">Patient </span>
                Testimonials
              </motion.h1>
              <motion.p 
                className="text-lg text-neutral-dark dark:text-neutral-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover authentic stories from our patients who have experienced the healing power of Ayurveda at AMOGHA. Their journey towards wellness and rejuvenation is a testament to our holistic approach to health.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Testimonial Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Guest Quotes Card */}
              <motion.div
                className="bg-white dark:bg-neutral-dark rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[16/9] bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary-dark/30 dark:to-primary-dark/10 flex items-center justify-center">
                  <FaQuoteLeft className="text-primary dark:text-primary-light text-8xl opacity-50" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
                    Guest Quotes
                  </h2>
                  <p className="text-neutral-dark dark:text-neutral-medium mb-6">
                    Read testimonials from our patients about their experience and healing journey with our authentic Ayurvedic treatments at AMOGHA.
                  </p>
                  <Link 
                    to="/testimonials/guest-quotes"
                    className="inline-flex items-center text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/80 transition-colors duration-300"
                  >
                    <span>Read Patient Testimonials</span>
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
              </motion.div>
              
              {/* Video Testimonials Card */}
              <motion.div
                className="bg-white dark:bg-neutral-dark rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[16/9] bg-gradient-to-r from-secondary/20 to-secondary/5 dark:from-secondary-dark/30 dark:to-secondary-dark/10 flex items-center justify-center">
                  <FaVideo className="text-secondary dark:text-secondary-light text-8xl opacity-50" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
                    Video Testimonials
                  </h2>
                  <p className="text-neutral-dark dark:text-neutral-medium mb-6">
                    Watch video stories from our patients sharing their personal experiences and results achieved through our Ayurvedic treatments.
                  </p>
                  <Link 
                    to="/testimonials/video-testimonials"
                    className="inline-flex items-center text-secondary dark:text-secondary-light hover:text-secondary-dark dark:hover:text-secondary-light/80 transition-colors duration-300"
                  >
                    <span>Watch Video Stories</span>
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
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Quote Banner */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary-dark/20 dark:to-secondary-dark/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FaQuoteLeft className="mx-auto text-primary/40 dark:text-primary-light/40 text-4xl mb-6" />
              <blockquote className="text-2xl md:text-3xl font-serif text-neutral-darker dark:text-neutral-light italic mb-6">
                "The traditional Ayurvedic treatments at AMOGHA helped me recover from a condition I had been struggling with for years. The doctors and staff truly care about their patients' well-being."
              </blockquote>
              <p className="text-lg font-medium text-primary dark:text-primary-light">
                — Rajesh Sharma, Bangalore
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestimonialsIndexPage; 