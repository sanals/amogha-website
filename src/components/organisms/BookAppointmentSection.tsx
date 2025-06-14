import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import { CONTACT_INFO } from '../../theme/constants';

interface BookAppointmentSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  showDepartmentCards?: boolean;
}

export const BookAppointmentSection: React.FC<BookAppointmentSectionProps> = ({
  className = '',
  title = 'Begin Your Wellness Journey Today',
  subtitle = 'Schedule a consultation with our Ayurvedic doctors to address your health concerns and start your path to holistic wellness.',
  bgColor = 'bg-primary/10 dark:bg-primary/20',
  showDepartmentCards = false
}) => {
  const navigate = useNavigate();
  // List of key reasons to visit our clinic
  const benefits = [
    {
      title: 'Personalized Care',
      description: 'Customized treatment plans based on your unique constitution and health needs.'
    },
    {
      title: 'Holistic Approach',
      description: 'We treat the root cause of ailments, not just the symptoms.'
    },
    {
      title: 'Modern Facility',
      description: 'State-of-the-art clinic with traditional therapies in a peaceful environment.'
    }
  ];

  return (
    <section className={`py-16 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-dark dark:text-neutral-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-serif font-bold text-primary dark:text-primary-light mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-dark dark:text-neutral-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="primary" 
            size="large"
            className="inline-flex items-center px-8 py-4 text-lg"
            onClick={() => navigate('/contact')}
          >
            <span>Book an Appointment</span>
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
          </Button>
          <p className="mt-4 text-neutral-dark dark:text-neutral-light/70">
            Or call us directly at <a href={`tel:${CONTACT_INFO.phones[0].tel}`} className="text-primary dark:text-primary-light font-medium">{CONTACT_INFO.phones[0].display}</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 