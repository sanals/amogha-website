import React from 'react';
import useTheme from '../../hooks/useTheme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  padding?: 'none' | 'small' | 'default' | 'large';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const { classes } = useTheme();
  
  const cardClasses = classes.card(variant, padding, className);
  
  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card; 