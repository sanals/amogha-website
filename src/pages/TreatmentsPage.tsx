'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { treatmentsData } from '../data/treatmentsData';
import { TreatmentCard } from '../components/molecules/TreatmentCard';
import { TreatmentCategory } from '../types/treatment';
import SEO from '../components/atoms/SEO';
import Button from '../components/atoms/Button';

const TreatmentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = [
    'all',
    ...Object.values(TreatmentCategory)
  ];

  // Filter treatments based on selected category
  const filteredTreatments = selectedCategory === 'all'
    ? treatmentsData
    : treatmentsData.filter(treatment => treatment.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Treatments & Therapies" 
        description="Discover our comprehensive range of authentic Ayurvedic treatments and therapies at AMOGHA The Ayur Hub, customized to address your specific health concerns."
        keywords="ayurvedic treatments, panchakarma, ayurveda therapies, natural healing, detoxification, wellness"
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
                Treatments & Therapies
              </h1>
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-8">
                We offer a comprehensive range of authentic Ayurvedic treatments and therapies customized to address your specific health concerns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-white dark:bg-neutral-dark border-b border-neutral-light dark:border-neutral-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-neutral-light dark:bg-neutral-darker text-neutral-dark dark:text-neutral-light hover:bg-primary/10 dark:hover:bg-primary-dark/20'
                  }`}
                >
                  {category === 'all' ? 'All Treatments' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredTreatments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-neutral-medium dark:text-neutral-light">
                  No treatments found in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTreatments.map((treatment) => (
                  <TreatmentCard
                    key={treatment.id}
                    id={treatment.id}
                    name={treatment.name}
                    slug={treatment.slug}
                    description={treatment.shortDescription || treatment.description}
                    imageUrl={treatment.imageUrl || '/images/placeholder.jpg'}
                    duration={treatment.duration}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10 dark:bg-primary-dark/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light mb-4">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-lg text-neutral-dark dark:text-neutral-light mb-8">
                Schedule a consultation with our experienced Ayurvedic physicians to discuss which treatment is best suited for your health needs.
              </p>
              <Button 
                variant="primary" 
                size="large"
                href="/book-appointment"
              >
                Book an Appointment
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TreatmentsPage; 