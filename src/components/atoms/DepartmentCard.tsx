import React from 'react';
import { Link } from 'react-router-dom';

interface DepartmentCardProps {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  icon: string;
  iconComponent?: React.ReactNode;
  className?: string;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  id,
  name,
  shortName,
  slug,
  icon,
  iconComponent,
  className = '',
}) => {
  return (
    <Link
      to={`/departments/${slug}`}
      className={`bg-white dark:bg-neutral-darker shadow-md hover:shadow-lg dark:shadow-neutral-darker/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {iconComponent ? (
        <div className="text-5xl text-primary dark:text-primary-light mb-4">
          {iconComponent}
        </div>
      ) : (
        <div className="w-16 h-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center mb-4">
          <i className={`${icon} text-2xl text-primary dark:text-primary-light`}></i>
        </div>
      )}
      <h3 className="text-lg font-medium text-neutral-darker dark:text-neutral-light mb-2">{shortName}</h3>
      <p className="text-sm text-neutral-dark dark:text-neutral-medium">{name}</p>
    </Link>
  );
}; 