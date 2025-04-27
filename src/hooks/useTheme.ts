import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import themeConstants from '../theme/theme';

/**
 * Custom hook to provide access to theme styles and utilities
 * This gives components easy access to unified styling
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  // Create a utility object for easy component styling
  const classes = {
    // Button styling utility
    button: (
      variant: 'primary' | 'secondary' | 'outline' | 'outlineLight' = 'primary',
      size: 'small' | 'default' | 'large' = 'default',
      rounded: boolean = false,
      additionalClasses: string = ''
    ): string => {
      const styles = [
        themeConstants.componentStyles.button[variant],
        themeConstants.componentStyles.button.size[size],
        rounded ? themeConstants.componentStyles.button.rounded : '',
        additionalClasses
      ];
      
      return styles.filter(Boolean).join(' ');
    },
    
    // Card styling utility
    card: (
      variant: 'default' | 'hover' | 'interactive' = 'default',
      padding: 'none' | 'small' | 'default' | 'large' = 'default',
      additionalClasses: string = ''
    ): string => {
      const paddingClasses = {
        none: '',
        small: 'p-3',
        default: 'p-5',
        large: 'p-8'
      };
      
      const styles = [
        themeConstants.componentStyles.card[variant],
        paddingClasses[padding],
        additionalClasses
      ];
      
      return styles.filter(Boolean).join(' ');
    },
    
    // Section styling utility
    section: (
      variant: 'default' | 'light' | 'white' | 'accent' = 'default',
      additionalClasses: string = ''
    ): string => {
      const styles = [
        themeConstants.componentStyles.section[variant],
        additionalClasses
      ];
      
      return styles.filter(Boolean).join(' ');
    },
    
    // Heading styling utility
    heading: (
      level: 'h1' | 'h2' | 'h3' | 'h4',
      additionalClasses: string = ''
    ): string => {
      const styles = [
        themeConstants.componentStyles.heading[level],
        additionalClasses
      ];
      
      return styles.filter(Boolean).join(' ');
    },
    
    // Text styling utility
    text: (
      variant: 'body' | 'muted' | 'small' = 'body',
      additionalClasses: string = ''
    ): string => {
      const styles = [
        themeConstants.componentStyles.text[variant],
        additionalClasses
      ];
      
      return styles.filter(Boolean).join(' ');
    }
  };
  
  return {
    ...context,
    classes
  };
};

export default useTheme; 