'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/organisms/AboutHero';
import HistorySection from '../components/organisms/HistorySection';
import ValuesSection from '../components/organisms/ValuesSection';
import TeamSection from '../components/organisms/TeamSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { aboutDescription, aboutContent } from '../data/aboutData';
import SEO from '../components/atoms/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title={aboutContent.seo.title}
        description={aboutContent.seo.description}
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
                <h2 
                  className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6 text-center"
                  dangerouslySetInnerHTML={{ __html: aboutContent.sections.welcome.heading.replace('AMOGHA', '<span className="text-primary dark:text-primary-light">AMOGHA</span>') }}
                />
                
                <div className="prose prose-lg max-w-none text-neutral-dark dark:text-neutral-medium">
                  {aboutDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
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
          title={aboutContent.sections.contact.title} 
          subtitle={aboutContent.sections.contact.subtitle}
          showMap={false}
          showContactInfo={false}
          className="bg-primary/10 dark:bg-primary-dark/20"
        />
      </div>
    </>
  );
};

export default AboutPage; 