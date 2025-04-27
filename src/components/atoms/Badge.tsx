import React from 'react';
import { 
  badgeBase, 
  badgeSm, 
  badgeMd, 
  badgeLg, 
  badgePrimary, 
  badgeSecondary, 
  badgePrimaryLight, 
  badgeSecondaryLight, 
  badgeNeutral,
  badgeSuccess,
  badgeWarning,
  badgeDanger,
  badgeInfo
} from '../../theme/badgeStyles';

type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeVariant = 'primary' | 'secondary' | 'primary-light' | 'secondary-light' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

/**
 * Badge component for status indicators, tags, and labels.
 * Uses consistent styling based on theme constants.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  // Get size class
  const sizeClass = size === 'sm' ? badgeSm : size === 'lg' ? badgeLg : badgeMd;
  
  // Get variant class
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return badgePrimary;
      case 'secondary':
        return badgeSecondary;
      case 'primary-light':
        return badgePrimaryLight;
      case 'secondary-light':
        return badgeSecondaryLight;
      case 'neutral':
        return badgeNeutral;
      case 'success':
        return badgeSuccess;
      case 'warning':
        return badgeWarning;
      case 'danger':
        return badgeDanger;
      case 'info':
        return badgeInfo;
      default:
        return badgePrimary;
    }
  };

  return (
    <span className={`${badgeBase} ${sizeClass} ${getVariantClass()} ${className}`}>
      {children}
    </span>
  );
};

export default Badge; 