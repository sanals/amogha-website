'use client';

import React from 'react';
import SEO from '../components/atoms/SEO';
import { ContactSection } from '../components/organisms/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Contact AMOGHA The Ayur Hub, an Ayurvedic clinic offering traditional healing therapies. Book an appointment or visit our center."
        canonicalUrl="/contact"
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker pt-24 pb-16">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage; 