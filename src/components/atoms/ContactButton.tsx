import React from 'react';
import { Link } from 'react-router-dom';
import { buttonBase, buttonVariants, buttonSizes } from '../../theme/buttonStyles';

interface ContactButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  text = 'Contact Us'
}) => {
  return (
    <Link 
      to="/contact" 
      className={`${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
    >
      {text}
    </Link>
  );
}; 