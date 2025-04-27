import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../atoms/LazyImage';
import { cardBase, cardOverlayGradient, cardOverlayHover, cardTitleLight, cardSubtitleLight } from '../../theme/cardStyles';
import { cardHover, defaultTransition } from '../../theme/animationVariants';

export interface GalleryItemProps {
  id: string;
  image: string;
  title: string;
  description?: string;
  aspectRatio?: string;
  onClick: (id: string) => void;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  id,
  image,
  title,
  description,
  aspectRatio = 'aspect-square',
  onClick,
  className = '',
}) => {
  return (
    <motion.div 
      className={`relative overflow-hidden cursor-pointer ${cardBase} ${aspectRatio} ${className}`}
      variants={cardHover}
      whileHover="hover"
      transition={defaultTransition}
      onClick={() => onClick(id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <LazyImage 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className={`${cardOverlayGradient} ${cardOverlayHover} flex flex-col justify-end p-4`}>
        <h3 className={cardTitleLight}>{title}</h3>
        {description && (
          <p className={cardSubtitleLight}>{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryItem; 