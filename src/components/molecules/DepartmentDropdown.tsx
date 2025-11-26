'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from '../../data/navigationData';

interface DepartmentDropdownProps {
  items: NavLink[];
  className?: string;
}

export const DepartmentDropdown: React.FC<DepartmentDropdownProps> = ({
  items,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className="flex items-center text-neutral-darker dark:text-neutral-light hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>Departments</span>
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-60 rounded-md shadow-lg bg-white dark:bg-neutral-darker border border-neutral-light dark:border-neutral-dark">
          <div className="py-2" role="menu" aria-orientation="vertical">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="block px-4 py-2 text-sm text-neutral-darker dark:text-neutral-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/30 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 