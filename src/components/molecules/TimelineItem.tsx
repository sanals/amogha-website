import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  isLeft?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  image,
  isLeft = false,
  index
}) => {
  return (
    <div className={`relative ${isLeft ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center`}>
      {/* Timeline vertical line */}
      <div className="absolute left-[19px] lg:left-1/2 top-0 h-full w-1 bg-primary-light/20 dark:bg-primary-dark/30 -z-10 lg:-ml-0.5">
      </div>

      {/* Content */}
      <motion.div 
        className={`w-full lg:w-1/2 ${isLeft ? 'lg:pl-0 lg:pr-16' : 'lg:pl-16 lg:pr-0'} pl-16 mb-10 relative`}
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Year Marker - Mobile (left aligned for all) */}
        <div className="absolute left-0 lg:hidden w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-10">
          <span className="text-sm font-bold">{year}</span>
        </div>

        {/* Year Marker - Desktop */}
        <div className={`hidden lg:flex absolute ${isLeft ? 'left-0' : 'right-0'} -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white items-center justify-center z-10`}>
          <span className="text-sm font-bold">{year}</span>
        </div>
        
        {/* Content Card */}
        <div className="bg-white dark:bg-neutral-darker rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          {image && (
            <div className="mb-4 h-48 overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          
          <h3 className="text-xl font-serif font-medium text-neutral-darker dark:text-neutral-light mb-2">
            {title}
          </h3>
          
          <p className="text-neutral-dark dark:text-neutral-medium text-base">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem; 