import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/atoms/PageTitle';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll, { fadeInUp } from '../components/atoms/AnimateOnScroll';

const TreatmentsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Treatments & Therapies" 
        description="Discover our comprehensive range of Ayurvedic treatments and therapies at AMOGHA The Ayur Hub."
        keywords="ayurvedic treatments, panchakarma, ayurveda therapies, natural healing"
      />
      <PageTitle title="Treatments & Therapies" />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimateOnScroll variant={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark">
              Our Treatments & Therapies
            </h1>
            
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-6">
                We offer a comprehensive range of authentic Ayurvedic treatments and therapies customized to address your specific health concerns.
              </p>
              
              <Link 
                to="/book-appointment"
                className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Book a Consultation
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <p className="italic text-neutral-medium">
                This is a placeholder page. The full treatments page is being developed.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage; 