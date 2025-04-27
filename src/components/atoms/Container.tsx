import React from 'react';
import { containerWidths, containerPadding } from '../../theme/constants';

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
  const paddingClasses = paddingY ? containerPadding : '';
  
  return (
    <div className={`mx-auto px-4 sm:px-6 ${containerWidths[size]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
}; 