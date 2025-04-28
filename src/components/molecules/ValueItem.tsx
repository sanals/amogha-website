import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconByName } from '../../theme/iconMap';
import { cardBase, cardHoverStyle } from '../../theme/cardStyles';

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
  return (
    <div className={`${cardBase} p-6 ${cardHoverStyle}`}>
      <div className="w-16 h-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center mb-4 mx-auto">
        <FontAwesomeIcon 
          icon={getIconByName(icon)} 
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