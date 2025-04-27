import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconByName } from '../../theme/iconMap';
import { cardBase, cardHoverStyle } from '../../theme/cardStyles';
import { cardEntrance } from '../../theme/animationVariants';

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
    <motion.div 
      className={`${cardBase} p-6 ${cardHoverStyle}`}
      variants={cardEntrance}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
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
    </motion.div>
  );
};

export default ValueItem; 