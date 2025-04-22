import React from 'react';
import { Helmet } from 'react-helmet';
import { faqData } from '../data/faqData';
import FAQCategory from '../components/organisms/FAQCategory';

const FAQPage: React.FC = () => {
  // Create structured data for FAQPage schema
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.flatMap(category => 
      category.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | AMOGHA The Ayur Hub</title>
        <meta name="description" content="Find answers to common questions about Ayurvedic treatments, our clinic, and practical information for your visit to AMOGHA The Ayur Hub." />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      
      <div className="bg-neutral-light dark:bg-neutral-darker">
        {/* Hero Section */}
        <div className="bg-primary-light/10 dark:bg-primary-dark/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-700 dark:text-neutral-light">
                Get answers to common questions about Ayurvedic treatments and our clinic services
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Filter tabs - optional enhancement */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                All Categories
              </button>
              {faqData.map(category => (
                <button 
                  key={category.id}
                  className="px-4 py-2 bg-white dark:bg-neutral-dark text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 transition-colors rounded-full text-sm font-medium"
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            {/* FAQ Categories */}
            {faqData.map(category => (
              <FAQCategory key={category.id} category={category} />
            ))}
            
            {/* Still have questions */}
            <div className="mt-16 bg-primary-light/10 dark:bg-primary-dark/20 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-serif font-semibold text-primary dark:text-primary-light mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 dark:text-neutral-light mb-6">
                We're here to help. Contact our team for any additional information about our treatments or services.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark transition-colors text-white rounded-full font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage; 