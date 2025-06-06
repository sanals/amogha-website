import React from 'react';
import { Link } from 'react-router-dom';
import { logoSizes } from '../../theme/constants';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const logoSrc = variant === 'dark' 
    ? '/images/logos/amogha-logo-dark.png'
    : '/images/logos/amogha-logo.png';
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="AMOGHA The Ayur Hub" 
        className={`${logoSizes[size]}`}
      />
    </Link>
  );
}; 