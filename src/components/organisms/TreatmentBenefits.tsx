import React from 'react';
import { motion } from 'framer-motion';
import { BenefitItem } from '../molecules/BenefitItem';

interface TreatmentBenefitsProps {
  title?: string;
  description?: string;
  benefits: string[];
  className?: string;
}

export const TreatmentBenefits: React.FC<TreatmentBenefitsProps> = ({
  title = 'Benefits',
  description = 'Experience the full spectrum of health advantages from this time-tested Ayurvedic treatment',
  benefits,
  className = '',
}) => {
  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary dark:text-primary-light mb-4">
            {title}
          </h2>
          <p className="text-neutral-dark dark:text-neutral-light">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index} 
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 