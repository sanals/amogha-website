// Badge style constants for reuse throughout the application
// Used by various components for pills, tags, and status indicators

// Base badge classes
export const badgeBase = 'inline-block px-2 py-1 text-xs font-semibold rounded-full';
export const badgeSm = 'px-1.5 py-0.5 text-xs';
export const badgeMd = 'px-2 py-1 text-xs';
export const badgeLg = 'px-3 py-1 text-sm';

// Badge variants - Colors
export const badgePrimary = 'bg-primary text-white';
export const badgeSecondary = 'bg-secondary text-white';
export const badgeSuccess = 'bg-green-500 text-white';
export const badgeWarning = 'bg-yellow-500 text-neutral-dark';
export const badgeInfo = 'bg-blue-500 text-white';
export const badgeDanger = 'bg-red-500 text-white';

// Badge variants - Light versions
export const badgePrimaryLight = 'bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light';
export const badgeSecondaryLight = 'bg-secondary/10 dark:bg-secondary/20 text-secondary-dark dark:text-secondary-light';
export const badgeNeutral = 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200';

// Badge container (for groups of badges)
export const badgeContainer = 'flex flex-wrap gap-1';

// Full badge composition helpers
export const getPrimaryBadgeClasses = (size = 'md') => {
  const sizeClass = size === 'sm' ? badgeSm : size === 'lg' ? badgeLg : badgeMd;
  return `${badgeBase} ${sizeClass} ${badgePrimary}`;
};

export const getSecondaryBadgeClasses = (size = 'md') => {
  const sizeClass = size === 'sm' ? badgeSm : size === 'lg' ? badgeLg : badgeMd;
  return `${badgeBase} ${sizeClass} ${badgeSecondary}`;
};

export const getPrimaryLightBadgeClasses = (size = 'md') => {
  const sizeClass = size === 'sm' ? badgeSm : size === 'lg' ? badgeLg : badgeMd;
  return `${badgeBase} ${sizeClass} ${badgePrimaryLight}`;
}; 