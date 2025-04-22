import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  paddingY?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  paddingY = true,
}) => {
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  const paddingClasses = paddingY ? 'py-8 md:py-12 lg:py-16' : '';
  
  return (
    <div className={`mx-auto px-4 sm:px-6 ${maxWidthClasses[size]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}; 