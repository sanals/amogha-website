import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyImage from '../atoms/LazyImage';

interface TreatmentCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  duration?: string;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  id,
  name,
  slug,
  description,
  imageUrl,
  duration,
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-neutral-dark rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48">
        <LazyImage
          src={imageUrl || '/images/treatments/default.jpg'}
          alt={name}
          className="w-full h-full object-cover"
        />
        {duration && (
          <div className="absolute top-3 right-3 bg-primary-light/90 text-white text-xs px-2 py-1 rounded-full">
            {duration}
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-2">{name}</h3>
        <p className="text-neutral-dark dark:text-neutral-light text-sm mb-4 flex-grow">
          {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>
        <Link 
          to={`/treatments/${slug}`}
          className="mt-auto inline-block text-center px-4 py-2 bg-secondary-light hover:bg-secondary text-neutral-darker font-medium rounded transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}; 