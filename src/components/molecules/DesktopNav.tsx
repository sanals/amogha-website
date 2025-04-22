import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../../data/navigationData';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { Logo } from '../atoms/Logo';

interface DesktopNavProps {
  navigation: NavLink[];
  className?: string;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navigation, className = '' }) => {
  return (
    <nav className={`hidden lg:flex justify-between items-center w-full ${className}`}>
      <div className="flex-1">
        <Logo size="lg" />
      </div>
      
      <NavLinks navigation={navigation} className="flex-1 justify-center" />
      
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <ThemeToggle />
        <Link
          to="/contact"
          className="py-2 px-5 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300 shadow-sm"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}; 