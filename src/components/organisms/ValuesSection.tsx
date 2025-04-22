import React from 'react';
import { motion } from 'framer-motion';
import ValueItem from '../molecules/ValueItem';
import { valuesData } from '../../data/aboutData';

interface ValuesSectionProps {
  className?: string;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-primary/5 dark:bg-primary-dark/10 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            Our <span className="text-primary dark:text-primary-light">Core Values</span>
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            The principles that guide our approach to healthcare and wellness, ensuring we provide 
            authentic, effective, and compassionate Ayurvedic treatments to all our patients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ValueItem 
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 