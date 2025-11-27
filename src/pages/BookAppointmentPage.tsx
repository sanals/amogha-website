'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookingForm } from '../components/molecules/BookingForm';
import { doctorsData } from '../data/doctorsData';
import SEO from '../components/atoms/SEO';
import { CONTACT_INFO } from '../theme/constants';

const BookAppointmentContent: React.FC = () => {
  const searchParams = useSearchParams();
  const doctorId = searchParams.get('doctor');
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctorsData[0] | null>(null);

  useEffect(() => {
    if (doctorId) {
      const doctor = doctorsData.find(d => d.id === doctorId);
      if (doctor) {
        setSelectedDoctor(doctor);
      }
    }
  }, [doctorId]);

  return (
    <>
      <SEO 
        title="Book an Appointment"
        description="Schedule a consultation with our Ayurvedic doctors at AMOGHA The Ayur Hub. Book your appointment online or contact us directly."
        canonicalUrl="/book-appointment"
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-4">
                Book an Appointment
              </h1>
              <p className="text-lg text-neutral-dark dark:text-neutral-light">
                Schedule a consultation with our Ayurvedic doctors to address your health concerns and start your path to holistic wellness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-neutral-dark rounded-lg shadow-lg p-8"
              >
                <BookingForm 
                  selectedDoctor={selectedDoctor}
                  showTitle={false}
                />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
              >
                <h3 className="text-2xl font-serif font-semibold text-neutral-darker dark:text-neutral-light mb-4">
                  Prefer to Call?
                </h3>
                <p className="text-neutral-dark dark:text-neutral-medium mb-4">
                  You can also reach us directly by phone
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  {CONTACT_INFO.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.tel}`}
                      className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {phone.display}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const BookAppointmentPage: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-dark dark:text-neutral-light">Loading...</p>
        </div>
      </div>
    }>
      <BookAppointmentContent />
    </Suspense>
  );
};

export default BookAppointmentPage;

