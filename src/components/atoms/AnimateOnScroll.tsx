import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

// Animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: Variants;
  className?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  variant = fadeInUp,
  className = '',
  threshold = 0.1,
  delay = 0,
  once = true
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag when component mounts
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start('visible');
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
          controls.start('hidden');
        }
      },
      { 
        threshold,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold, once, isMounted]);

  // If we want to add a delay
  useEffect(() => {
    if (!isMounted) return;
    
    if (isInView && delay > 0) {
      const timer = setTimeout(() => {
        controls.start('visible');
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, controls, delay, isMounted]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 