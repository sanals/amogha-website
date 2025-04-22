import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/organisms/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | AMOGHA The Ayur Hub</title>
        <meta name="description" content="Contact AMOGHA The Ayur Hub, an Ayurvedic clinic offering traditional healing therapies. Book an appointment or visit our center." />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker pt-24 pb-16">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage; 