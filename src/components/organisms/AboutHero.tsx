import React from 'react';
import { motion } from 'framer-motion';
import { missionStatement, visionStatement } from '../../data/aboutData';

interface AboutHeroProps {
  className?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative w-full py-20 overflow-hidden ${className}`}>
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Using backgroundImage style property instead of img tag to prevent alt text issues */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/hero/about-hero-bg.jpg")' }}
          role="img"
          aria-label="About page background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary-dark/60" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">
              About <span className="text-secondary-light">AMOGHA</span>
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Our Mission</h2>
              <p className="text-lg text-white/90 italic">
                {missionStatement}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Our Vision</h2>
              <p className="text-lg text-white/90 italic">
                {visionStatement}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 