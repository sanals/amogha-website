// Centralized style constants for reuse throughout the application

// Logo sizes
export const logoSizes = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
};

// Heading sizes
export const headingSizes = {
  1: 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold',
  2: 'text-3xl md:text-4xl font-serif font-bold',
  3: 'text-2xl md:text-3xl font-serif font-semibold',
  4: 'text-xl md:text-2xl font-semibold',
  5: 'text-lg md:text-xl font-semibold',
  6: 'text-base md:text-lg font-semibold',
};

// Heading colors
export const headingColors = {
  default: 'text-neutral-darker dark:text-neutral-light',
  primary: 'text-primary dark:text-primary-light',
  secondary: 'text-secondary dark:text-secondary-light',
  light: 'text-neutral-light dark:text-neutral-dark',
};

// Container widths
export const containerWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

// Container padding
export const containerPadding = 'py-8 md:py-12 lg:py-16';

// Centralized contact info for the clinic
export const CONTACT_INFO = {
  phones: [
    { display: '+91 1234567890', tel: '+911234567890' },
    { display: '+91 9876543210', tel: '+919876543210' },
  ],
  email: 'info@amoghaayurhub.com',
  address: 'AMOGHA The Ayur Hub, 123 Wellness Drive, Green Valley, Bangalore-560001, Karnataka',
  // Clinic location coordinates (latitude, longitude)
  // To find your clinic's coordinates:
  // 1. Go to https://www.google.com/maps
  // 2. Search for your clinic address
  // 3. Right-click on the location → Click the coordinates to copy them
  // 4. Update the values below (lat, lng)
  coordinates: {
    lat: 9.988631720630101, // Update with your clinic's latitude
    lng:76.31069060713851  // Update with your clinic's longitude
  }
}; 