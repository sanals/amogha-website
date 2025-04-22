import React from 'react';
import { motion } from 'framer-motion';

interface DepartmentHeroProps {
  department: {
    name: string;
    description?: string;
    shortDescription?: string;
    image?: string;
    bannerImage?: string;
  };
}

export const DepartmentHero: React.FC<DepartmentHeroProps> = ({ department }) => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={department.bannerImage || department.image || '/images/hero/departments-hero.jpg'} 
          alt={`${department.name} Department at AMOGHA`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-secondary-light uppercase tracking-wider text-lg md:text-xl mb-2">
              Department
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              {department.name}
            </h1>
            {department.shortDescription && (
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                {department.shortDescription}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 