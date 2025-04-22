import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../atoms/LazyImage';

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
      className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer ${aspectRatio} ${className}`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onClick={() => onClick(id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <LazyImage 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg">{title}</h3>
        {description && (
          <p className="text-white/80 text-sm mt-1">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryItem; 