'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/organisms/AboutHero';
import HistorySection from '../components/organisms/HistorySection';
import ValuesSection from '../components/organisms/ValuesSection';
import TeamSection from '../components/organisms/TeamSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { aboutDescription } from '../data/aboutData';
import SEO from '../components/atoms/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about AMOGHA The Ayur Hub, our mission, history, core values, and the expert team behind our authentic Ayurvedic treatments."
        canonicalUrl="/about"
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section with Mission and Vision */}
        <AboutHero />
        
        {/* About Description Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6 text-center">
                  Welcome to <span className="text-primary dark:text-primary-light">AMOGHA</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-neutral-dark dark:text-neutral-medium">
                  {aboutDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <ValuesSection />
        
        {/* History Timeline Section */}
        <HistorySection />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Contact Section */}
        <ContactSection 
          title="Experience Authentic Ayurveda" 
          subtitle="Schedule a consultation with our experienced Ayurvedic physicians and begin your journey towards holistic wellness."
          showMap={false}
          showContactInfo={false}
          className="bg-primary/10 dark:bg-primary-dark/20"
        />
      </div>
    </>
  );
};

export default AboutPage; 