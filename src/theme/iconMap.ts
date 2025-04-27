// Icon mapping utilities
// Centralized icon references for consistency across the application

import { 
  faCertificate, 
  faCircleNodes, 
  faUserCheck, 
  faUserMd, 
  faHandsHoldingCircle, 
  faBookOpenReader,
  faLeaf,
  faStar,
  faHeart,
  faCalendarCheck,
  faPhone,
  faEnvelope,
  faLocationDot,
  faCheck,
  faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Map icon string identifiers to FontAwesome icons
export const getIconByName = (iconName: string): IconDefinition => {
  const iconMap: Record<string, IconDefinition> = {
    'fa-certificate': faCertificate,
    'fa-circle-nodes': faCircleNodes,
    'fa-user-check': faUserCheck,
    'fa-user-md': faUserMd,
    'fa-hands-holding-circle': faHandsHoldingCircle,
    'fa-book-open-reader': faBookOpenReader,
    'fa-leaf': faLeaf,
    'fa-star': faStar,
    'fa-heart': faHeart,
    'fa-calendar-check': faCalendarCheck,
    'fa-phone': faPhone,
    'fa-envelope': faEnvelope,
    'fa-location-dot': faLocationDot,
    'fa-check': faCheck,
    'fa-clock-rotate-left': faClockRotateLeft
  };

  return iconMap[iconName] || faCertificate; // Default fallback
};

// Common icon categories for specific use cases
export const valueIcons = [
  'fa-certificate',
  'fa-circle-nodes',
  'fa-user-check',
  'fa-user-md',
  'fa-hands-holding-circle',
  'fa-book-open-reader'
];

export const contactIcons = {
  phone: faPhone,
  email: faEnvelope,
  location: faLocationDot
};

export const ratingIcon = faStar;
export const checkIcon = faCheck;
export const leafIcon = faLeaf;
export const heartIcon = faHeart;
export const calendarIcon = faCalendarCheck;
export const historyIcon = faClockRotateLeft; 