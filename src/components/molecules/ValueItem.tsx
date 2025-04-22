import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCertificate, 
  faCircleNodes, 
  faUserCheck, 
  faUserMd, 
  faHandsHoldingCircle, 
  faBookOpenReader 
} from '@fortawesome/free-solid-svg-icons';

interface ValueItemProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ValueItem: React.FC<ValueItemProps> = ({
  title,
  description,
  icon,
  index
}) => {
  // Map the icon string to the appropriate FontAwesome icon
  const getIcon = () => {
    switch (icon) {
      case 'fa-certificate':
        return faCertificate;
      case 'fa-circle-nodes':
        return faCircleNodes;
      case 'fa-user-check':
        return faUserCheck;
      case 'fa-user-md':
        return faUserMd;
      case 'fa-hands-holding-circle':
        return faHandsHoldingCircle;
      case 'fa-book-open-reader':
        return faBookOpenReader;
      default:
        return faCertificate; // Default fallback
    }
  };
  
  return (
    <div className="bg-white dark:bg-neutral-darker rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center mb-4 mx-auto">
        <FontAwesomeIcon 
          icon={getIcon()} 
          className="text-2xl text-primary dark:text-primary-light" 
          size="2x"
        />
      </div>
      
      <h3 className="text-xl font-serif text-center text-neutral-darker dark:text-neutral-light mb-3">
        {title}
      </h3>
      
      <p className="text-neutral-dark dark:text-neutral-medium text-center">
        {description}
      </p>
    </div>
  );
};

export default ValueItem; 