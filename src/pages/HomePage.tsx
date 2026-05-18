'use client';

import React from 'react';
import Link from 'next/link';
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
import { homeContent } from '../data/homeContent';

const HomePage: React.FC = () => {
  // Get popular treatments, featured doctors, and testimonials
  const popularTreatments = treatmentsData.filter(treatment => treatment.isPopular).slice(0, 3);
  const featuredDoctors = doctorsData.slice(0, 4);
  const featuredTestimonials = testimonialsData.filter(testimonial => testimonial.featured).slice(0, 3);
  
  // SEO data
  const seoData = {
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    keywords: homeContent.seo.keywords,
    canonicalUrl: "http://trymyapp.lovestoblog.com",
    ogTitle: homeContent.seo.ogTitle,
    ogDescription: homeContent.seo.ogDescription,
    ogImage: "/images/og-image.jpg",
    twitterTitle: homeContent.seo.twitterTitle,
    twitterDescription: homeContent.seo.twitterDescription,
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
        "streetAddress": "Thammanam",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "682032",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.9886,
        "longitude": 76.3106
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
          {/* Doctors Section */}
          <AnimateOnScroll delay={0.2}>
            <DoctorsSection 
              doctors={featuredDoctors}
              subtitle={homeContent.sections.doctors.subtitle}
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
              title={homeContent.sections.contact.title} 
              subtitle={homeContent.sections.contact.subtitle}
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