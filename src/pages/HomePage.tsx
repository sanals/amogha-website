import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { treatmentsData } from '../data/treatmentsData';
import { doctorsData } from '../data/doctorsData';
import { testimonialsData } from '../data/testimonialsData';
import { TreatmentCard } from '../components/molecules/TreatmentCard';
import { DoctorCard } from '../components/molecules/DoctorCard';
import TestimonialCard from '../components/molecules/TestimonialCard';
import Button from '../components/atoms/Button';
import { Heading } from '../components/atoms/Heading';
import { HeroSection } from '../components/organisms/HeroSection';
import { DoctorsSection } from '../components/organisms/DoctorsSection';
import { TestimonialsSection } from '../components/organisms/TestimonialsSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { BookAppointmentSection } from '../components/organisms/BookAppointmentSection';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll from '../components/atoms/AnimateOnScroll';
import { HeaderOverlayProvider } from '../context/HeaderOverlayContext';

const HomePage: React.FC = () => {
  // Get popular treatments, featured doctors, and testimonials
  const popularTreatments = treatmentsData.filter(treatment => treatment.isPopular).slice(0, 3);
  const featuredDoctors = doctorsData.slice(0, 4);
  const featuredTestimonials = testimonialsData.filter(testimonial => testimonial.featured).slice(0, 3);
  
  // SEO data
  const seoData = {
    title: "AMOGHA The Ayur Hub - Premier Ayurvedic Clinic",
    description: "AMOGHA The Ayur Hub is a premium Ayurvedic clinic providing traditional treatments and therapies for holistic wellness and natural healing.",
    keywords: "ayurveda, ayurvedic clinic, holistic wellness, natural healing, panchakarma, ayurvedic treatments",
    canonicalUrl: "http://trymyapp.lovestoblog.com",
    ogTitle: "AMOGHA The Ayur Hub - Experience Authentic Ayurveda",
    ogDescription: "Discover traditional Ayurvedic treatments tailored for modern wellness needs at AMOGHA The Ayur Hub.",
    ogImage: "/images/og-image.jpg",
    twitterTitle: "AMOGHA The Ayur Hub - Ayurvedic Wellness Center",
    twitterDescription: "Transform your health with authentic Ayurvedic treatments at AMOGHA The Ayur Hub.",
    twitterImage: "/images/twitter-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "AMOGHA The Ayur Hub",
      "image": "http://trymyapp.lovestoblog.com/images/clinic-photo.jpg",
      "url": "http://trymyapp.lovestoblog.com",
      "telephone": "+91-9876543210",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Wellness Lane",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/AmoghaAyurHub",
        "https://www.instagram.com/amoghaayurhub",
        "https://twitter.com/AmoghaAyurHub"
      ]
    }
  };
  
  return (
    <HeaderOverlayProvider mode="dark">
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        <SEO {...seoData} />
        
        <HeroSection />
        
        <main>
          <AnimateOnScroll>
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
            </div>
          </AnimateOnScroll>
          
          {/* Doctors Section */}
          <AnimateOnScroll delay={0.2}>
            <DoctorsSection 
              doctors={featuredDoctors}
              subtitle="Meet our team of dedicated Ayurvedic physicians with years of experience in traditional healing practices"
            />
          </AnimateOnScroll>
          
          {/* Testimonials Section */}
          <AnimateOnScroll delay={0.2}>
            <TestimonialsSection 
              testimonials={featuredTestimonials}
              className="bg-white dark:bg-neutral-dark/50"
            />
          </AnimateOnScroll>
          
          {/* Book Appointment Section */}
          <AnimateOnScroll delay={0.2}>
            <BookAppointmentSection />
          </AnimateOnScroll>
          
          {/* Contact Section */}
          <AnimateOnScroll delay={0.2}>
            <ContactSection 
              title="Get in Touch With Us" 
              subtitle="Schedule a consultation with our experts or visit our clinic for personalized Ayurvedic wellness solutions."
              showMap={false}
              className="bg-primary/5 dark:bg-primary-dark/10"
            />
          </AnimateOnScroll>
        </main>
      </div>
    </HeaderOverlayProvider>
  );
};

export default HomePage; 