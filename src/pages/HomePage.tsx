import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { treatmentsData } from '../data/treatmentsData';
import { doctorsData } from '../data/doctorsData';
import { testimonialsData } from '../data/testimonialsData';
import { TreatmentCard } from '../components/molecules/TreatmentCard';
import { DoctorCard } from '../components/molecules/DoctorCard';
import TestimonialCard from '../components/molecules/TestimonialCard';
import { Button } from '../components/atoms/Button';
import { Heading } from '../components/atoms/Heading';
import { HeroSection } from '../components/organisms/HeroSection';
import { DoctorsSection } from '../components/organisms/DoctorsSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { BookAppointmentSection } from '../components/organisms/BookAppointmentSection';

const HomePage: React.FC = () => {
  // Get popular treatments, featured doctors, and testimonials
  const popularTreatments = treatmentsData.filter(treatment => treatment.isPopular).slice(0, 3);
  const featuredDoctors = doctorsData.slice(0, 4);
  const featuredTestimonials = testimonialsData.filter(testimonial => testimonial.featured).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
      <Helmet>
        <title>AMOGHA The Ayur Hub - Ayurvedic Clinic</title>
        <meta 
          name="description" 
          content="AMOGHA The Ayur Hub is a premium Ayurvedic clinic providing traditional treatments and therapies for holistic wellness."
        />
      </Helmet>
      
      <HeroSection />
      
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white dark:bg-neutral-dark rounded-lg shadow-md p-6 md:p-8 mb-16">
            <h2 className="text-2xl font-serif text-primary dark:text-primary-light mb-4">Your Journey to Wellness Begins Here</h2>
            <p className="text-neutral-darker dark:text-neutral-light mb-6">
              Experience the ancient wisdom of Ayurveda in a modern setting. At AMOGHA The Ayur Hub, 
              we combine traditional Ayurvedic practices with contemporary healthcare to provide holistic 
              treatments that address the root cause of ailments.
            </p>
            <div className="flex justify-center">
              <Link to="/book-appointment">
                <Button variant="secondary">Book an Appointment</Button>
              </Link>
            </div>
          </div>
          
          {/* Popular treatments section would go here */}
        </div>
        
        {/* Doctors Section */}
        <DoctorsSection 
          doctors={featuredDoctors}
          subtitle="Meet our team of dedicated Ayurvedic physicians with years of experience in traditional healing practices"
        />
        
        {/* Testimonials Section */}
        <TestimonialsSection 
          testimonials={featuredTestimonials}
          className="bg-white dark:bg-neutral-dark/50"
        />
        
        {/* Book Appointment Section */}
        <BookAppointmentSection />
        
        {/* Contact Section */}
        <ContactSection 
          title="Get in Touch With Us" 
          subtitle="Schedule a consultation with our experts or visit our clinic for personalized Ayurvedic wellness solutions."
          showMap={false}
          className="bg-primary/5 dark:bg-primary-dark/10"
        />
      </main>
    </div>
  );
};

export default HomePage; 