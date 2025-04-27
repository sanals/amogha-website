import React from 'react';
import { motion } from 'framer-motion';

type SpinnerColor = 'primary' | 'secondary' | 'white' | 'gray';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: SpinnerColor;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  // Size mapping
  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  // Color mapping
  const colorMap: Record<SpinnerColor, string> = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    white: 'border-white',
    gray: 'border-neutral-medium',
  };

  // Animation settings
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <motion.div
        className={`${sizeMap[size]} rounded-full border-t-2 border-b-2 ${colorMap[color]}`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}; 