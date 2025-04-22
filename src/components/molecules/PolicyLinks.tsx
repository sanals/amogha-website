import React from 'react';
import { Link } from 'react-router-dom';

interface PolicyLink {
  name: string;
  path: string;
}

interface PolicyLinksProps {
  links: PolicyLink[];
  className?: string;
}

export const PolicyLinks: React.FC<PolicyLinksProps> = ({ 
  links, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-wrap gap-x-4 text-sm ${className}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="text-neutral-medium hover:text-primary-light transition-colors duration-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}; 