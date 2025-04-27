import React from 'react';
import { PressArticle } from '../../data/pressData';
import { motion } from 'framer-motion';
import { Badge } from '../atoms';
import { LazyImage } from '../atoms';
import { 
  cardBase, 
  cardContentFlex, 
  cardTitle,
  cardFullHeight 
} from '../../theme/cardStyles';
import { defaultTransition, cardHover } from '../../theme/animationVariants';

interface PressCardProps {
  article: PressArticle;
}

const PressCard: React.FC<PressCardProps> = ({ article }) => {
  const { title, description, date, source, imageUrl, type, url, videoId, sourceUrl } = article;
  
  // Determine if the card should link externally
  const isExternalLink = type === 'mention' || (type === 'article' && url?.startsWith('http'));
  
  // Badge variant based on type
  const getBadgeVariant = () => {
    switch(type) {
      case 'article': return 'primary';
      case 'video': return 'secondary';
      default: return 'neutral';
    }
  };
  
  // Badge label based on type
  const getBadgeLabel = () => {
    switch(type) {
      case 'article': return 'Article';
      case 'video': return 'Video';
      default: return 'Press Mention';
    }
  };
  
  const cardContent = (
    <div className={`${cardBase} ${cardFullHeight} flex flex-col`}>
      <div className="relative h-48 overflow-hidden">
        {/* Video overlay icon for video type */}
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-90">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        {/* Type badge */}
        <div className="absolute top-3 right-3 z-10">
          <Badge variant={getBadgeVariant()} size="sm">
            {getBadgeLabel()}
          </Badge>
        </div>
        <LazyImage 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className={`${cardContentFlex} p-6 flex-1`}>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
          <h3 className={`${cardTitle} mb-2 line-clamp-2`}>{title}</h3>
          <p className="text-gray-600 dark:text-neutral-medium mb-4 line-clamp-3">{description}</p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Source: <span className="ml-1">{source}</span>
            </span>
            
            {(type === 'article' || type === 'mention') && (
              <span className="inline-flex items-center text-primary-dark dark:text-primary-light hover:text-primary font-medium">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            )}
            
            {type === 'video' && (
              <span className="inline-flex items-center text-primary-dark dark:text-primary-light hover:text-primary font-medium">
                Watch Video
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  // Wrap with appropriate link based on type
  if (type === 'video' && videoId) {
    // For videos, link to YouTube or video player
    return (
      <motion.div 
        variants={cardHover}
        whileHover="hover"
        transition={defaultTransition}
        className="h-full"
      >
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block h-full"
        >
          {cardContent}
        </a>
      </motion.div>
    );
  } else if (isExternalLink && url) {
    // For external links
    return (
      <motion.div 
        variants={cardHover}
        whileHover="hover"
        transition={defaultTransition}
        className="h-full"
      >
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block h-full"
        >
          {cardContent}
        </a>
      </motion.div>
    );
  } else if (type === 'article' && url) {
    // For internal article links
    return (
      <motion.div 
        variants={cardHover}
        whileHover="hover"
        transition={defaultTransition}
        className="h-full"
      >
        <a href={url} className="block h-full">
          {cardContent}
        </a>
      </motion.div>
    );
  }
  
  // Fallback for items without links
  return (
    <motion.div 
      variants={cardHover}
      whileHover="hover"
      transition={defaultTransition}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
};

export default PressCard; 