import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export interface VideoTestimonialItemProps {
  id: string;
  name: string;
  designation?: string;
  testimonial: string;
  thumbnailUrl: string;
  videoUrl: string;
  rating: number;
  onClick: (id: string) => void;
  className?: string;
}

const VideoTestimonialItem: React.FC<VideoTestimonialItemProps> = ({
  id,
  name,
  designation,
  testimonial,
  thumbnailUrl,
  videoUrl,
  rating,
  onClick,
  className = '',
}) => {
  // Generate stars based on rating
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } text-sm`}
      />
    ));
  };

  return (
    <motion.div
      className={`bg-white dark:bg-neutral-dark rounded-lg shadow-md overflow-hidden ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Video Thumbnail */}
      <div 
        className="relative aspect-video cursor-pointer"
        onClick={() => onClick(id)}
      >
        <img 
          src={thumbnailUrl} 
          alt={`${name}'s testimonial video thumbnail`} 
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-white ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex mb-2">{renderStars()}</div>
        
        <h3 className="font-bold text-lg text-neutral-darker dark:text-neutral-light">{name}</h3>
        
        {designation && (
          <p className="text-sm text-neutral-medium mb-2">{designation}</p>
        )}
        
        <p className="text-neutral-dark dark:text-neutral-medium text-sm line-clamp-3 mb-3 italic">
          "{testimonial}"
        </p>
        
        <button
          onClick={() => onClick(id)}
          className="text-primary dark:text-primary-light text-sm font-medium flex items-center hover:underline"
        >
          Watch Testimonial
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default VideoTestimonialItem; 