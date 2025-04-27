import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTitle from '../components/atoms/PageTitle';
import SEO from '../components/atoms/SEO';
import AnimateOnScroll, { fadeIn } from '../components/atoms/AnimateOnScroll';
import LazyImage from '../components/atoms/LazyImage';

const TreatmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally fetch data based on the id
  const treatmentName = id ? id.replace(/-/g, ' ') : '';
  const capitalizedName = treatmentName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <>
      <SEO 
        title={`${capitalizedName} | Ayurvedic Treatment`}
        description={`Learn about ${capitalizedName}, a traditional Ayurvedic treatment offered at AMOGHA The Ayur Hub.`}
        keywords={`${treatmentName}, ayurvedic treatment, ayurveda therapy, natural healing`}
      />
      <PageTitle title={capitalizedName} />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimateOnScroll variant={fadeIn}>
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/treatments" 
                className="inline-block mb-8 text-primary-DEFAULT hover:text-primary-dark"
              >
                ← Back to All Treatments
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark">
                {capitalizedName}
              </h1>
              
              <div className="bg-white dark:bg-neutral-dark rounded-xl shadow-md overflow-hidden mb-8">
                <div className="h-64 relative">
                  <LazyImage
                    src={`/images/placeholder.jpg`}
                    alt={capitalizedName}
                    className="w-full h-full object-cover"
                    width={800}
                    height={400}
                  />
                </div>
                
                <div className="p-6">
                  <p className="text-lg mb-4">
                    This is a placeholder for the {capitalizedName} treatment details. 
                    The complete information will be available soon.
                  </p>
                  
                  <div className="mt-8">
                    <Link
                      to="/book-appointment"
                      className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      Book This Treatment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default TreatmentDetailPage; 