import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Doctor } from '../../types/doctor';
import Button from '../atoms/Button';
import LazyImage from '../atoms/LazyImage';
import Badge from '../atoms/Badge';
import { cardBase, cardOverlayBottom, cardTitleLight, cardSubtitleLight, cardContent } from '../../theme/cardStyles';
import { cardHover, defaultTransition } from '../../theme/animationVariants';

interface DoctorCardProps {
  doctor: Doctor;
  className?: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  className = '',
}) => {
  const { name, title, imageUrl, qualifications, specialties, schedulingUrl } = doctor;
  const navigate = useNavigate();
  
  return (
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      transition={defaultTransition}
      className={`${cardBase} ${className}`}
    >
      <div className="relative h-60 overflow-hidden">
        <LazyImage 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
        <div className={cardOverlayBottom}>
          <h3 className={cardTitleLight}>{name}</h3>
          <p className={cardSubtitleLight}>{title}</p>
        </div>
      </div>
      
      <div className={cardContent}>
        <div className="mb-4">
          <div className="flex items-center gap-1 text-neutral-dark dark:text-neutral-medium text-sm mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Specialties:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index} 
                variant="primary-light"
                size="sm"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <Button variant="primary" fullWidth onClick={() => navigate('/contact')}>
            Book Appointment
          </Button>
        </div>
      </div>
    </motion.div>
  );
}; 