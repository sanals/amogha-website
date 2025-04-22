import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

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

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 ${className}`}>
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Image or Video Section */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-primary-light">
          {isVideo && videoUrl ? (
            <div className="relative w-full h-full">
              <iframe
                src={videoUrl}
                title={`Video testimonial by ${name}`}
                className="absolute inset-0 w-full h-full object-cover"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <FaQuoteLeft className="text-primary-light text-3xl mr-3" />
            <div className="flex">{renderStars()}</div>
          </div>
          
          <blockquote className="text-neutral-dark mb-5 italic">
            "{testimonial}"
          </blockquote>
          
          <div className="text-right">
            <div className="font-bold text-xl text-primary-DEFAULT">{name}</div>
            <div className="text-neutral-medium">{designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 