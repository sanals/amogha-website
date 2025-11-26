import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { ContactForm } from '../molecules/ContactForm';
import { Map } from '../molecules/Map';
import { CONTACT_INFO } from '../../theme/constants';

interface ContactSectionProps {
  className?: string;
  showMap?: boolean;
  showForm?: boolean;
  showContactInfo?: boolean;
  title?: string;
  subtitle?: string;
  googleMapsApiKey?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  className = '',
  showMap = true,
  showForm = true,
  showContactInfo = true,
  title = 'Contact Us',
  subtitle = 'Have questions about our treatments or want to schedule an appointment? Get in touch with our team of Ayurvedic experts.',
  googleMapsApiKey
}) => {
  return (
    <div className={`py-12 ${className}`}>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-dark dark:text-neutral-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      {(showContactInfo || showForm) && (
        <section className="mb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              {showContactInfo && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-dark p-8 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-primary/10 dark:bg-primary-dark/20 rounded-full flex items-center justify-center">
                          <FaMapMarkerAlt className="text-primary dark:text-primary-light" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-neutral-darker dark:text-neutral-light mb-1">Our Location</h4>
                        <p className="text-neutral-dark dark:text-neutral-medium">
                          {CONTACT_INFO.address}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-primary/10 dark:bg-primary-dark/20 rounded-full flex items-center justify-center">
                          <FaPhone className="text-primary dark:text-primary-light" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-neutral-darker dark:text-neutral-light mb-1">Phone Numbers</h4>
                        <p className="text-neutral-dark dark:text-neutral-medium">
                        {CONTACT_INFO.phones.map((phone, idx) => (
                          <span key={phone.tel}>
                            <a
                              href={`tel:${phone.tel}`}
                              className="text-primary hover:underline"
                              aria-label={`Call ${phone.display}`}
                            >
                              {phone.display}
                            </a>
                            {idx < CONTACT_INFO.phones.length - 1 && ', '}
                          </span>
                        ))}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-primary/10 dark:bg-primary-dark/20 rounded-full flex items-center justify-center">
                          <FaEnvelope className="text-primary dark:text-primary-light" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-neutral-darker dark:text-neutral-light mb-1">Email Address</h4>
                        <p className="text-neutral-dark dark:text-neutral-medium">
                          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
                            {CONTACT_INFO.email}
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 bg-primary/10 dark:bg-primary-dark/20 rounded-full flex items-center justify-center">
                          <FaClock className="text-primary dark:text-primary-light" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-neutral-darker dark:text-neutral-light mb-1">Working Hours</h4>
                        <p className="text-neutral-dark dark:text-neutral-medium">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Contact Form */}
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <ContactForm />
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Map Section */}
      {showMap && (
        <section>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-dark p-4 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-4 px-4">
                Find Us
              </h3>
              <Map 
                height={400} 
                apiKey={googleMapsApiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}
              />
              {!googleMapsApiKey && (
                <p className="text-neutral-medium text-sm mt-2 px-4">
                  Note: To display the map correctly, you need to provide a Google Maps API key either through environment variables or the googleMapsApiKey prop.
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}; 