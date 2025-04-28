import React from 'react';
import { Link } from 'react-router-dom';

interface LinkItem {
  name: string;
  path: string;
}

interface QuickLinksProps {
  title: string;
  links: LinkItem[];
  className?: string;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ 
  title, 
  links, 
  className = '' 
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h4 className="text-neutral-light font-semibold text-lg">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="text-neutral-light hover:text-primary-light transition-colors duration-300 text-sm flex items-center"
            >
              <span className="text-primary-light mr-2">›</span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 