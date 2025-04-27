// Theme constants for AMOGHA The Ayur Hub
// This file centralizes all theme-related constants for easier maintenance

// Color palette
export const colors = {
  // Primary colors
  primary: {
    light: '#6a994e',
    DEFAULT: '#386641',
    dark: '#1a3521',
  },
  
  // Secondary colors
  secondary: {
    light: '#f2cc8f',
    DEFAULT: '#bc6c25',
    dark: '#8a5a44',
  },
  
  // Neutral colors
  neutral: {
    light: '#f8f9fa',
    DEFAULT: '#e9ecef',
    medium: '#adb5bd',
    dark: '#343a40',
    darker: '#212529',
  },
  
  // UI specific colors
  ui: {
    success: '#3e8d63',
    warning: '#fd7e14',
    error: '#d62828',
    info: '#4361ee',
  },
  
  // Text colors
  text: {
    primary: '#212529',
    secondary: '#495057',
    muted: '#6c757d',
    light: '#f8f9fa',
  },
};

// Typography
export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Playfair Display', 'Georgia', 'serif'],
  },
  
  // Font sizes (in tailwind classes)
  fontSize: {
    xs: 'text-xs',         // 0.75rem
    sm: 'text-sm',         // 0.875rem
    base: 'text-base',     // 1rem
    lg: 'text-lg',         // 1.125rem
    xl: 'text-xl',         // 1.25rem
    '2xl': 'text-2xl',     // 1.5rem
    '3xl': 'text-3xl',     // 1.875rem
    '4xl': 'text-4xl',     // 2.25rem
    '5xl': 'text-5xl',     // 3rem
    '6xl': 'text-6xl',     // 4rem
  },
  
  // Font weights
  fontWeight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  
  // Line heights
  lineHeight: {
    none: 'leading-none',
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  },
};

// Spacing
export const spacing = {
  container: 'container mx-auto px-4',
  section: 'py-12 md:py-20',
  sectionSmall: 'py-8 md:py-12',
  gap: {
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-8',
  },
  padding: {
    card: 'p-6',
    cardLarge: 'p-8',
    content: 'px-4 py-6',
  },
  margin: {
    bottom: {
      small: 'mb-2',
      default: 'mb-4',
      medium: 'mb-6',
      large: 'mb-8',
      xl: 'mb-12',
      xxl: 'mb-16',
    },
  },
};

// Layout
export const layout = {
  borderRadius: {
    none: 'rounded-none',
    small: 'rounded',
    default: 'rounded-md',
    full: 'rounded-full',
    large: 'rounded-lg',
    xl: 'rounded-xl',
  },
  shadow: {
    none: 'shadow-none',
    small: 'shadow-sm',
    default: 'shadow',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xl: 'shadow-xl',
  },
};

// Transitions and animations
export const animation = {
  transition: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500',
  },
  hover: {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-1',
    opacity: 'hover:opacity-90',
  },
};

// Dark mode specific classes
export const darkMode = {
  bg: {
    primary: 'dark:bg-neutral-darker',
    secondary: 'dark:bg-neutral-dark',
    accent: 'dark:bg-primary-dark/20',
    card: 'dark:bg-neutral-dark',
  },
  text: {
    primary: 'dark:text-neutral-light',
    secondary: 'dark:text-neutral-medium',
    accent: 'dark:text-primary-light',
  },
  border: 'dark:border-neutral-700',
  divide: 'dark:divide-neutral-700',
};

// Commonly used UI components combinations
export const componentStyles = {
  // Button styles
  button: {
    primary: 'bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300',
    secondary: 'bg-secondary-light hover:bg-secondary text-neutral-darker font-medium rounded-md transition-colors duration-300',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-medium rounded-md transition-colors duration-300',
    outlineLight: 'bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300',
    size: {
      small: 'px-3 py-1 text-sm',
      default: 'px-4 py-2',
      large: 'px-6 py-3',
    },
    rounded: 'rounded-full',
  },
  
  // Card styles
  card: {
    default: 'bg-white dark:bg-neutral-dark rounded-lg shadow-md overflow-hidden',
    hover: 'hover:shadow-lg transition-shadow duration-300',
    interactive: 'cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
  },
  
  // Section styles
  section: {
    default: 'py-12 md:py-20',
    light: 'bg-neutral-light dark:bg-neutral-darker',
    white: 'bg-white dark:bg-neutral-dark',
    accent: 'bg-primary-light/10 dark:bg-primary-dark/20',
  },
  
  // Heading styles
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-primary-light',
    h2: 'text-3xl md:text-4xl font-serif font-bold text-primary dark:text-primary-light',
    h3: 'text-2xl font-serif font-semibold text-primary dark:text-primary-light',
    h4: 'text-xl font-serif font-semibold text-primary-dark dark:text-primary-light',
  },
  
  // Text styles
  text: {
    body: 'text-neutral-dark dark:text-neutral-light',
    muted: 'text-gray-600 dark:text-neutral-medium',
    small: 'text-sm text-gray-500 dark:text-gray-400',
  },
};

// Export all theme constants as default
export default {
  colors,
  typography,
  spacing,
  layout,
  animation,
  darkMode,
  componentStyles,
}; 