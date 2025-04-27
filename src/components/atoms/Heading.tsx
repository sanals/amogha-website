import React from 'react';
import { headingSizes, headingColors } from '../../theme/constants';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'light';
  centered?: boolean;
  withAccent?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className = '',
  color = 'default',
  centered = false,
  withAccent = false,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const textAlign = centered ? 'text-center' : '';
  
  const accent = withAccent ? (
    <span className="block w-20 h-1 bg-secondary mt-4 mb-6"></span>
  ) : null;
  
  return (
    <>
      <Tag className={`${headingSizes[level]} ${headingColors[color]} ${textAlign} ${className}`}>
        {children}
      </Tag>
      {withAccent && centered ? <div className="flex justify-center">{accent}</div> : accent}
    </>
  );
}; 