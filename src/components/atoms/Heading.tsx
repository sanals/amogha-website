import React from 'react';

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
  
  const colorStyles = {
    default: 'text-neutral-darker dark:text-neutral-light',
    primary: 'text-primary dark:text-primary-light',
    secondary: 'text-secondary dark:text-secondary-light',
    light: 'text-neutral-light dark:text-neutral-dark',
  };
  
  const textAlign = centered ? 'text-center' : '';
  
  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold',
    2: 'text-3xl md:text-4xl font-serif font-bold',
    3: 'text-2xl md:text-3xl font-serif font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-semibold',
    6: 'text-base md:text-lg font-semibold',
  };
  
  const accent = withAccent ? (
    <span className="block w-20 h-1 bg-secondary mt-4 mb-6"></span>
  ) : null;
  
  return (
    <>
      <Tag className={`${sizes[level]} ${colorStyles[color]} ${textAlign} ${className}`}>
        {children}
      </Tag>
      {withAccent && centered ? <div className="flex justify-center">{accent}</div> : accent}
    </>
  );
}; 