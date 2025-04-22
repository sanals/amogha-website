import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from '../molecules/TeamMember';
import { teamData } from '../../data/aboutData';

interface TeamSectionProps {
  className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-4">
            Our <span className="text-primary dark:text-primary-light">Leadership Team</span>
          </h2>
          <p className="text-neutral-dark dark:text-neutral-medium">
            Meet the experienced professionals behind AMOGHA The Ayur Hub, whose expertise, 
            dedication, and vision drive our mission to provide authentic Ayurvedic care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamMember 
              key={member.id}
              name={member.name}
              position={member.position}
              bio={member.bio}
              image={member.image}
              socialLinks={member.socialLinks}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 