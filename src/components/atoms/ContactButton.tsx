'use client';

import React from 'react';
import Link from 'next/link';
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
      href="/contact" 
      className={`${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
    >
      {text}
    </Link>
  );
}; 