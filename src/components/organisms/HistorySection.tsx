import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../molecules/TimelineItem';
import { timelineData } from '../../data/aboutData';

interface HistorySectionProps {
  className?: string;
}

const HistorySection: React.FC<HistorySectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            Our <span className="text-primary dark:text-primary-light">Journey</span>
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Discover the milestones that have shaped AMOGHA The Ayur Hub into the premier Ayurvedic wellness 
            destination it is today, from our humble beginnings to our current standing.
          </p>
        </motion.div>

        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id}
              year={item.year}
              title={item.title}
              description={item.description}
              image={item.image}
              isLeft={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 