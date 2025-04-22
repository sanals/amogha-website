import React from 'react';
import { motion } from 'framer-motion';
import { Department } from '../../types/department';

interface DoctorHeroProps {
  doctor: {
    name: string;
    title?: string;
    image?: string;
    bannerImage?: string;
    shortBio?: string;
  };
  departments?: Department[];
}

export const DoctorHero: React.FC<DoctorHeroProps> = ({ doctor, departments = [] }) => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={doctor.bannerImage || '/images/doctors/doctor-banner.jpg'} 
          alt={`Dr. ${doctor.name} at AMOGHA The Ayur Hub`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Doctor Image */}
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={doctor.image || '/images/doctors/doctor-default.jpg'}
              alt={`Dr. ${doctor.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center md:text-left"
          >
            <h2 className="text-secondary-light uppercase tracking-wider text-lg md:text-xl mb-1">
              {doctor.title || 'Ayurvedic Physician'}
            </h2>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-4">
              Dr. {doctor.name}
            </h1>
            
            {departments && departments.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {departments.map((department) => (
                  <span
                    key={department.id}
                    className="px-3 py-1 bg-primary-dark/30 text-white rounded-full text-sm"
                  >
                    {department.shortName || department.name}
                  </span>
                ))}
              </div>
            )}
            
            {doctor.shortBio && (
              <p className="text-lg text-white/80 max-w-2xl">
                {doctor.shortBio}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 