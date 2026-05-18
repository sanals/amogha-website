'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import PageTitle from '../components/atoms/PageTitle';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll, { fadeInUp, staggerChildren } from '../components/atoms/AnimateOnScroll';
import TestimonialCard from '../components/molecules/TestimonialCard';
import { motion } from 'framer-motion';
import { LazyImage } from '../components/atoms';

// Testimonial categories
const categories = [
  { id: 'all', name: 'All Testimonials', path: '/testimonials' },
  { id: 'quotes', name: 'Written Quotes', path: '/testimonials/quotes' },
  { id: 'videos', name: 'Video Testimonials', path: '/testimonials/videos' }
];

import { testimonialsData } from '../data/testimonialsData';

const writtenTestimonials = testimonialsData.filter(t => !t.isVideo);
const videoTestimonials = testimonialsData.filter(t => t.isVideo);
const allTestimonials = testimonialsData;

const TestimonialsPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Determine active category based on URL path
  useEffect(() => {
    const path = pathname;
    
    if (path === '/testimonials') {
      setActiveCategory('all');
    } else if (path === '/testimonials/quotes') {
      setActiveCategory('quotes');
    } else if (path === '/testimonials/videos') {
      setActiveCategory('videos');
    }
  }, [pathname]);
  
  // Filter testimonials based on active category
  const getFilteredTestimonials = () => {
    if (activeCategory === 'all') {
      return allTestimonials;
    } else if (activeCategory === 'quotes') {
      return writtenTestimonials;
    } else if (activeCategory === 'videos') {
      return videoTestimonials;
    }
    return allTestimonials;
  };
  
  const filteredTestimonials = getFilteredTestimonials();
  
  // Handle category change by updating URL
  const handleCategoryChange = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      router.push(category.path);
    }
  };
  
  // Generate appropriate page title and SEO descriptions
  const getPageTitle = () => {
    if (activeCategory === 'quotes') return 'Patient Testimonials - Written Quotes';
    if (activeCategory === 'videos') return 'Patient Testimonials - Videos';
    return 'Patient Testimonials';
  };
  
  const getPageDescription = () => {
    if (activeCategory === 'quotes') {
      return 'Read written testimonials from our patients at AMOGHA The Ayur Hub.';
    } else if (activeCategory === 'videos') {
      return 'Watch video testimonials from our patients at AMOGHA The Ayur Hub.';
    }
    return 'Read what our patients say about their experiences and results from Ayurvedic treatments at AMOGHA The Ayur Hub.';
  };
  
  return (
    <>
      <SEO 
        title={getPageTitle()}
        description={getPageDescription()}
        keywords={`ayurvedic testimonials, patient ${activeCategory !== 'all' ? activeCategory : 'reviews'}, ayurveda success stories, treatment feedback`}
      />
      <PageTitle title={getPageTitle()} />
      
      <section className="pt-24 py-16 px-4 bg-neutral-light dark:bg-neutral-darker min-h-screen">
        <div className="container mx-auto">
          <AnimateOnScroll variant={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark dark:text-primary-light">
              What Our Patients Say
            </h1>
            
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-neutral-dark dark:text-neutral-light">
                Discover how our Ayurvedic treatments have helped patients overcome various health challenges
                and improved their quality of life.
              </p>
            </div>
            
            {/* Category Navigation Tabs */}
            <div className="flex justify-center flex-wrap gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-secondary text-white font-medium'
                      : 'bg-neutral-DEFAULT dark:bg-neutral-dark text-primary-dark dark:text-neutral-light hover:bg-neutral-medium border border-primary-light'
                  }`}
                  aria-pressed={activeCategory === category.id}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {filteredTestimonials.map((testimonial, index) => (
              <AnimateOnScroll 
                key={testimonial.id} 
                variant={fadeInUp}
                delay={index * 100}
              >
                <TestimonialCard
                  name={testimonial.name}
                  designation={testimonial.designation || ''}
                  testimonial={testimonial.testimonial}
                  image={testimonial.image || '/images/placeholder.jpg'}
                  rating={testimonial.rating}
                  isVideo={testimonial.isVideo}
                  videoUrl={testimonial.videoUrl}
                  className="h-full"
                />
              </AnimateOnScroll>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12 text-neutral-medium">
              No testimonials found in this category. Please check back later.
            </div>
          )}
          
          <AnimateOnScroll variant={fadeInUp} className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-6 text-primary-DEFAULT">
              Share Your Experience
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-neutral-dark dark:text-neutral-light">
              We value your feedback. If you&apos;ve been treated at AMOGHA The Ayur Hub, 
              we&apos;d love to hear about your experience.
            </p>
            <a 
              href="mailto:testimonials@amogha.com"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300 shadow-md"
            >
              Submit Your Testimonial
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage; 