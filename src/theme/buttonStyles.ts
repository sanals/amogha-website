// Button style constants for reuse throughout the application
// Used by Button.tsx and ContactButton.tsx

// Base button classes
export const buttonBase = 'rounded-md font-medium transition-colors duration-300 flex items-center justify-center whitespace-nowrap';

// Button variants
export const buttonVariants = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-secondary hover:bg-secondary-dark text-white',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  outlineLight: 'bg-transparent border-2 border-white hover:bg-white/10 text-white'
};

// Button sizes
export const buttonSizes = {
  // For ContactButton.tsx
  sm: 'text-sm py-1 px-3',
  md: 'text-base py-2 px-4',
  lg: 'text-lg py-3 px-6',
  
  // For Button.tsx (using different naming convention)
  small: 'px-3 py-1 text-sm',
  default: 'px-4 py-2',
  large: 'px-6 py-3'
};

// Rounded button style
export const buttonRounded = 'rounded-full';

// Additional button styles
export const buttonFullWidth = 'w-full'; 