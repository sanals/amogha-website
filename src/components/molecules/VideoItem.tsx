import React from 'react';
import { motion } from 'framer-motion';

export interface VideoItemProps {
  id: string;
  thumbnailUrl: string;
  title: string;
  duration?: string;
  description?: string;
  videoUrl: string;
  onClick: (id: string) => void;
  className?: string;
}

const VideoItem: React.FC<VideoItemProps> = ({
  id,
  thumbnailUrl,
  title,
  duration,
  description,
  videoUrl,
  onClick,
  className = '',
}) => {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-video ${className}`}
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
      {/* Thumbnail */}
      <img 
        src={thumbnailUrl} 
        alt={`${title} - Video Thumbnail`} 
        className="w-full h-full object-cover"
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 md:h-10 md:w-10 text-white ml-1" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      {/* Duration badge */}
      {duration && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      )}
      
      {/* Video info overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg">{title}</h3>
        {description && (
          <p className="text-white/80 text-sm mt-1 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default VideoItem; 