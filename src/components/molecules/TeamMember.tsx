import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  bio,
  image,
  socialLinks,
  index
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-neutral-dark rounded-lg shadow-md dark:shadow-lg dark:shadow-black/30 overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/40 transition-shadow duration-300 dark:border dark:border-neutral-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium text-neutral-darker dark:text-neutral-light mb-1">
          {name}
        </h3>
        
        <p className="text-primary dark:text-primary-light text-sm font-medium mb-4">
          {position}
        </p>
        
        <p className="text-neutral-dark dark:text-neutral-medium text-sm mb-5 line-clamp-4">
          {bio}
        </p>
        
        {socialLinks && (
          <div className="flex space-x-3">
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-medium hover:text-primary dark:hover:text-primary-light transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <FaLinkedin className="text-lg" />
              </a>
            )}
            
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-medium hover:text-primary dark:hover:text-primary-light transition-colors"
                aria-label={`${name}'s Twitter profile`}
              >
                <FaTwitter className="text-lg" />
              </a>
            )}
            
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`}
                className="text-neutral-medium hover:text-primary dark:hover:text-primary-light transition-colors"
                aria-label={`Email ${name}`}
              >
                <FaEnvelope className="text-lg" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMember; 