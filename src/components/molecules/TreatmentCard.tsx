'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LazyImage from '../atoms/LazyImage';
import Badge from '../atoms/Badge';
import { cardBase, cardFullHeight, cardContentFlex, cardTitle, cardDescription } from '../../theme/cardStyles';
import { cardHover, defaultTransition } from '../../theme/animationVariants';

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
      className={`${cardBase} ${cardFullHeight}`}
      variants={cardHover}
      whileHover="hover"
      transition={defaultTransition}
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
          <div className="absolute top-3 right-3">
            <Badge variant="primary" size="sm">
              {duration}
            </Badge>
          </div>
        )}
      </div>
      
      <div className={cardContentFlex}>
        <h3 className={cardTitle}>{name}</h3>
        <p className={`${cardDescription} flex-grow`}>
          {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>
        <Link 
          href={`/treatments/${slug}`}
          className="mt-auto inline-block text-center px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}; 