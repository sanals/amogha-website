import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  links, 
  className = '' 
}) => {
  return (
    <div className={`${className}`}>
      <h4 className="text-lg font-medium text-primary-dark dark:text-primary-light mb-4">
        Connect With Us
      </h4>
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}; 