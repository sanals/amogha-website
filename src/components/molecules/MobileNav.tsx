import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink as NavLinkType } from '../../data/navigationData';
import { Logo } from '../atoms/Logo';

interface MobileNavProps {
  navigation: NavLinkType[];
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  navigation,
  className = '',
  isOpen,
  onClose,
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Toggle submenu
  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  if (!isOpen) return null;

  return (
    <div className={`lg:hidden fixed inset-0 z-50 ${className}`}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-darker/70"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white dark:bg-neutral-darker shadow-xl flex flex-col">
        {/* Header with Logo and Close button */}
        <div className="p-4 flex items-center justify-between border-b border-neutral-light dark:border-neutral-dark">
          <Logo size="md" />
          <button
            onClick={onClose}
            className="p-2 text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary-light"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="px-4 space-y-2">
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
                              onClick={onClose}
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
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-neutral-light dark:border-neutral-dark">
          <Link
            to="/contact"
            className="block w-full py-2 px-4 text-center bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}; 