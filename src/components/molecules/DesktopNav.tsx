import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from '../../data/navigationData';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { Logo } from '../atoms/Logo';
import useTheme from '../../hooks/useTheme';

interface DesktopNavProps {
  navigation: NavLink[];
  className?: string;
  isScrolled?: boolean;
  useWhiteText?: boolean;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navigation, 
  className = '',
  isScrolled = false,
  useWhiteText = false
}) => {
  const { isDarkMode } = useTheme();
  
  // When not scrolled and in light mode, use white text for the appointment button
  const buttonTextClass = useWhiteText
    ? 'text-white bg-transparent hover:bg-white/20 border-2 border-white'
    : 'bg-primary hover:bg-primary-dark text-white';

  return (
    <nav className={`hidden lg:flex justify-between items-center w-full ${className}`}>
      <div className="flex-1">
        <Logo size="lg" className={useWhiteText ? 'filter brightness-0 invert' : ''} />
      </div>
      
      <NavLinks 
        navigation={navigation} 
        className="flex-1 justify-center" 
        isScrolled={isScrolled}
        useWhiteText={useWhiteText}
      />
      
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <ThemeToggle />
        <Link
          to="/contact"
          className={`py-2 px-5 ${buttonTextClass} rounded-md transition-colors duration-300 shadow-sm`}
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}; 