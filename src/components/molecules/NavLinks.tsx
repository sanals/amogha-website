import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink as NavLinkType } from '../../data/navigationData';

interface NavLinksProps {
  navigation: NavLinkType[];
  isMobile?: boolean;
  onLinkClick?: () => void;
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  navigation,
  isMobile = false,
  onLinkClick,
  className = '',
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Toggle submenu
  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  if (isMobile) {
    return (
      <ul className={`px-4 space-y-2 ${className}`}>
        {navigation.map((item) => (
          <li key={item.id}>
            {item.children?.length ? (
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-neutral-darker dark:text-neutral-light"
                  onClick={() => toggleSubmenu(item.id)}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSubmenu === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {/* Submenu */}
                {openSubmenu === item.id && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-primary-light dark:border-primary">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          to={child.path}
                          className="block py-2 text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light"
                          onClick={onLinkClick}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className="block py-2 text-neutral-darker dark:text-neutral-light hover:text-primary dark:hover:text-primary-light"
                onClick={onLinkClick}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  }

  // Desktop version
  return (
    <div className={`flex items-center space-x-8 ${className}`}>
      {navigation.map((item) => {
        // Special case for departments with dropdown
        if (item.id === 'departments' && item.children) {
          return (
            <div key={item.id} className="relative group">
              <Link
                to={item.path}
                className="flex items-center text-neutral-darker dark:text-neutral-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                onClick={onLinkClick}
              >
                <span>{item.label}</span>
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-neutral-darker rounded-md shadow-lg border border-neutral-light dark:border-neutral-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                <div className="grid grid-cols-1 gap-1 py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-neutral-darker dark:text-neutral-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/30 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                      onClick={onLinkClick}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // Handle items with children (dropdown menus)
        if (item.children?.length) {
          return (
            <div key={item.id} className="relative group">
              <Link
                to={item.path}
                className="flex items-center text-neutral-darker dark:text-neutral-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                onClick={onLinkClick}
              >
                <span>{item.label}</span>
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-darker rounded-md shadow-lg border border-neutral-light dark:border-neutral-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                <div className="py-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-neutral-darker dark:text-neutral-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/30 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                      onClick={onLinkClick}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // Regular navigation item
        return (
          <Link
            key={item.id}
            to={item.path}
            className="text-neutral-darker dark:text-neutral-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}; 