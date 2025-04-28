import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

// Define types for testimonials
interface BaseTestimonial {
  id: string;
  name: string;
  designation: string;
  testimonial: string;
  image: string;
  rating: number;
  type: 'quote' | 'video';
}

interface QuoteTestimonial extends BaseTestimonial {
  type: 'quote';
}

interface VideoTestimonial extends BaseTestimonial {
  type: 'video';
  videoId: string;
  isVideo: boolean;
}

type Testimonial = QuoteTestimonial | VideoTestimonial;

// Placeholder written testimonials data
const writtenTestimonials: QuoteTestimonial[] = [
  {
    id: 'testimonial1',
    name: 'Rajiv Mehta',
    designation: 'Business Owner',
    testimonial: 'The panchakarma treatment I received at AMOGHA was transformative. After just one week, I felt renewed energy and my chronic back pain significantly reduced.',
    image: '/images/placeholder.jpg',
    rating: 5,
    type: 'quote'
  },
  {
    id: 'testimonial2',
    name: 'Anjali Sharma',
    designation: 'Teacher',
    testimonial: 'I visited AMOGHA for digestive issues that I had been struggling with for years. The doctors took time to understand my condition and the herbal medicines they prescribed have made a huge difference.',
    image: '/images/placeholder.jpg',
    rating: 5,
    type: 'quote'
  },
  {
    id: 'testimonial3',
    name: 'Vikram Singh',
    designation: 'Software Engineer',
    testimonial: 'After suffering from stress and insomnia for months, the treatment protocol at AMOGHA helped me regain natural sleep and reduce anxiety. Highly recommend their holistic approach.',
    image: '/images/placeholder.jpg',
    rating: 4,
    type: 'quote'
  },
  {
    id: 'testimonial4',
    name: 'Meera Patel',
    designation: 'Homemaker',
    testimonial: 'The skin treatments at AMOGHA are excellent. My eczema has significantly improved, and the doctors provided great dietary advice that complements the treatments.',
    image: '/images/placeholder.jpg',
    rating: 5,
    type: 'quote'
  }
];

// Placeholder video testimonials data
const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'video-testimonial1',
    name: 'Amit Kumar',
    designation: 'Retired Professional',
    testimonial: 'At 67, I was struggling with joint pain. The specialized Ayurvedic treatments and daily regimen prescribed by AMOGHA doctors have improved my mobility and reduced pain substantially.',
    image: '/images/placeholder.jpg',
    rating: 4,
    type: 'video',
    videoId: 'jNQXAC9IVRw',
    isVideo: true
  },
  {
    id: 'video-testimonial2',
    name: 'Priya Desai',
    designation: 'Yoga Instructor',
    testimonial: 'As a yoga instructor, I appreciate the authentic Ayurvedic approach at AMOGHA. Their treatments perfectly complement my yoga practice, and I recommend them to all my students.',
    image: '/images/placeholder.jpg',
    rating: 5,
    type: 'video',
    videoId: '_GuOjXYl5ew',
    isVideo: true
  }
];

// Combined testimonials
const allTestimonials: Testimonial[] = [
  ...writtenTestimonials,
  ...videoTestimonials
];

const TestimonialsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Determine active category based on URL path
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/testimonials') {
      setActiveCategory('all');
    } else if (path === '/testimonials/quotes') {
      setActiveCategory('quotes');
    } else if (path === '/testimonials/videos') {
      setActiveCategory('videos');
    }
  }, [location.pathname]);
  
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
      navigate(category.path);
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
                  designation={testimonial.designation}
                  testimonial={testimonial.testimonial}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  isVideo={testimonial.type === 'video'}
                  videoUrl={testimonial.type === 'video' ? `https://www.youtube-nocookie.com/embed/${(testimonial as VideoTestimonial).videoId}` : undefined}
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
              We value your feedback. If you've been treated at AMOGHA The Ayur Hub, 
              we'd love to hear about your experience.
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