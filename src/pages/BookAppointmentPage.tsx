import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '../components/atoms/Button';
import { BookingForm, BookingFormData } from '../components/molecules/BookingForm';
import { doctorsData } from '../data/doctorsData';
import { Doctor } from '../types/doctor';

const BookAppointmentPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get('doctor');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Find the doctor based on the ID in the URL
  useEffect(() => {
    if (doctorId) {
      const doctor = doctorsData.find(doc => doc.id === doctorId);
      if (doctor) {
        setSelectedDoctor(doctor);
      }
    }
  }, [doctorId]);

  // Handle form submission
  const handleSubmit = (formData: BookingFormData) => {
    // In a real application, this would send data to a backend API
    console.log('Appointment booking submitted:', formData);
    // Here you would typically handle form submission, like sending data to a server
  };

  return (
    <>
      <Helmet>
        <title>Book an Appointment | AMOGHA The Ayur Hub</title>
        <meta 
          name="description" 
          content="Schedule an appointment with our expert Ayurvedic physicians at AMOGHA The Ayur Hub and begin your journey to wellness."
        />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
              Book an Appointment
            </h1>
            {selectedDoctor ? (
              <p className="text-lg text-neutral-dark dark:text-neutral-light max-w-2xl mx-auto">
                You're booking an appointment with <span className="font-semibold">{selectedDoctor.name}</span>, {selectedDoctor.title}.
              </p>
            ) : (
              <p className="text-lg text-neutral-dark dark:text-neutral-light max-w-2xl mx-auto">
                Schedule a consultation with our expert Ayurvedic physicians and begin your journey to wellness.
              </p>
            )}
          </motion.div>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-dark rounded-lg shadow-md overflow-hidden">
            {selectedDoctor && (
              <div className="p-6 bg-primary/10 dark:bg-primary/20 border-b border-primary/20 dark:border-primary/30">
                <div className="flex items-center">
                  <img 
                    src={selectedDoctor.imageUrl} 
                    alt={selectedDoctor.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-serif font-bold text-primary dark:text-primary-light">
                      {selectedDoctor.name}
                    </h2>
                    <p className="text-neutral-darker dark:text-neutral-light">{selectedDoctor.title}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {selectedDoctor.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="inline-block bg-primary/20 dark:bg-primary/30 text-primary-dark dark:text-primary-light text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="p-6">
              <BookingForm 
                showTitle={false}
                onSubmit={handleSubmit}
                preselectedDoctorId={doctorId || undefined}
                className="bg-transparent shadow-none p-0"
              />
              
              <div className="mt-8 text-center">
                <p className="text-sm text-neutral-medium mb-2">
                  Need to speak with someone directly?
                </p>
                <p className="font-medium text-neutral-darker dark:text-neutral-light">
                  Call us at <a href="tel:+911234567890" className="text-primary dark:text-primary-light">+91 123 456 7890</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-neutral-dark dark:text-neutral-light mb-4">
              Our usual response time is within 24 hours. For urgent matters, please contact us directly by phone.
            </p>
            <Link to="/treatments">
              <Button variant="secondary">
                View Our Treatments
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentPage; 