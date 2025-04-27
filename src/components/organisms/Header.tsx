import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../atoms/Logo';
import Button from '../atoms/Button';
import useTheme from '../../hooks/useTheme';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ContactButton } from '../atoms/ContactButton';
import { DesktopNav } from '../molecules/DesktopNav';
import { MobileNav } from '../molecules/MobileNav';
import { mainNavigation } from '../../data/navigationData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Treatments', path: '/treatments' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu if open and window resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Always solid background
  const headerClasses = `fixed top-0 left-0 right-0 z-40 bg-white dark:bg-neutral-darker shadow-md py-2 ${className}`;

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo is now only in DesktopNav component */}

          {/* Desktop Navigation (includes Logo) */}
          <DesktopNav 
            navigation={mainNavigation}
            isScrolled={true} // Always true, since header is always solid
            useWhiteText={false}
          />

          {/* Contact Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ContactButton 
              size="sm" 
              className="hidden md:flex"
            />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="p-2 rounded-md text-neutral-darker dark:text-neutral-light hover:text-primary dark:hover:text-primary-light"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        navigation={mainNavigation}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}; 