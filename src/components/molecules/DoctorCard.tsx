import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Doctor } from '../../types/doctor';
import { Button } from '../atoms/Button';
import LazyImage from '../atoms/LazyImage';

interface DoctorCardProps {
  doctor: Doctor;
  className?: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  className = '',
}) => {
  const { name, title, imageUrl, qualifications, specialties, experience, schedulingUrl } = doctor;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-neutral-dark rounded-lg overflow-hidden shadow-md ${className}`}
    >
      <div className="relative h-60 overflow-hidden">
        <LazyImage 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <p className="text-white/80 text-sm">{title}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-4">
          <div className="flex items-center gap-1 text-neutral-medium text-sm mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Experience:</span>
          </div>
          <p className="font-medium text-neutral-dark dark:text-neutral-light">{experience}</p>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-1 text-neutral-medium text-sm mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Specialties:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="inline-block bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light text-xs px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <Link to={schedulingUrl || '/book-appointment'}>
            <Button variant="primary" fullWidth>
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}; 