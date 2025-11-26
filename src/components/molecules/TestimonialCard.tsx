import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaPlayCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cardBase, cardContentFlex } from '../../theme/cardStyles';
import { cardEntrance, cardHover, defaultTransition } from '../../theme/animationVariants';
import LazyImage from '../atoms/LazyImage';
import VideoPlayerModal from './VideoPlayerModal';

export interface TestimonialCardProps {
  name: string;
  designation: string;
  testimonial: string;
  image: string;
  rating: number;
  isVideo?: boolean;
  videoUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  designation,
  testimonial,
  image,
  rating,
  isVideo = false,
  videoUrl,
  className = '',
}) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Generate stars based on rating
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } text-lg`}
      />
    ));
  };

  const handleVideoClick = () => {
    setVideoPlaying(true);
  };

  return (
    <motion.div 
      className={`${cardBase} ${className}`}
      variants={cardEntrance}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="whileHover"
      transition={defaultTransition}
    >
      <div className={`${cardContentFlex} flex-col md:flex-row gap-6 items-center md:items-start`}>
        {/* Image or Video Section */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-primary-light">
          {isVideo && videoUrl ? (
            <>
              <div 
                className="w-full h-full flex items-center justify-center cursor-pointer group relative"
                onClick={handleVideoClick}
              >
                <LazyImage
                  src={image}
                  alt={`${name} - ${designation}`}
                  className="w-full h-full object-cover absolute inset-0"
                  width={128}
                  height={128}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center z-10">
                  <FaPlayCircle className="text-white text-3xl group-hover:text-4xl transition-all duration-300" />
                </div>
              </div>
              <VideoPlayerModal
                isOpen={videoPlaying}
                onClose={() => setVideoPlaying(false)}
                videoUrl={videoUrl}
                title={`Video testimonial by ${name}`}
              />
            </>
          ) : (
            <LazyImage
              src={image}
              alt={`${name} - ${designation}`}
              className="w-full h-full object-cover"
              width={128}
              height={128}
            />
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <FaQuoteLeft className="text-primary-light text-3xl mr-3" />
            <div className="flex">{renderStars()}</div>
          </div>
          
          <blockquote className="text-neutral-dark dark:text-neutral-light mb-5 italic">
            "{testimonial}"
          </blockquote>
          
          <div className="text-right">
            <div className="font-bold text-xl text-primary-DEFAULT">{name}</div>
            <div className="text-neutral-medium">{designation}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 