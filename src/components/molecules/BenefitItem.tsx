import React from 'react';
import { motion } from 'framer-motion';

interface BenefitItemProps {
  benefit: string;
  index: number;
}

export const BenefitItem: React.FC<BenefitItemProps> = ({ benefit, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start p-4 bg-white dark:bg-neutral-darker rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex-shrink-0 mr-4 mt-1">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-light/10 text-primary dark:text-primary-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-neutral-dark dark:text-neutral-light">{benefit}</p>
      </div>
    </motion.div>
  );
}; 