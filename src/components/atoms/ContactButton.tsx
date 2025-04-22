import React from 'react';
import { Link } from 'react-router-dom';

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
  // Define variant classes
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  // Define size classes
  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6'
  };

  const baseClasses = 'rounded-md font-medium transition-colors duration-300 flex items-center justify-center whitespace-nowrap';

  return (
    <Link 
      to="/contact" 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {text}
    </Link>
  );
}; 