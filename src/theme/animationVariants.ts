// Animation variants for Framer Motion
// Reusable animation presets for consistent animations throughout the app

import { Variants } from 'framer-motion';

// Basic animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Hover animations
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }
};

export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -5 }
};

// Card animations
export const cardEntrance: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }
};

export const cardHover: Variants = {
  initial: { y: 0 },
  whileHover: { y: -5 }
};

// Staggered children animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Modal animations
export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const modalContent: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

// Transition configs (separate from variants)
export const defaultTransition = { duration: 0.3 };
export const springTransition = { type: 'spring', damping: 25, stiffness: 120 };
export const slowTransition = { duration: 0.5 };
export const pageTransitionConfig = { type: 'tween', ease: 'anticipate', duration: 0.5 }; 