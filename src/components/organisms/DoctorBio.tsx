import React from 'react';
import { motion } from 'framer-motion';

interface DoctorBioProps {
  doctor: {
    name: string;
    title?: string;
    education?: string[];
    bio?: string;
    achievements?: string[];
    specialties?: string[];
  };
}

export const DoctorBio: React.FC<DoctorBioProps> = ({ doctor }) => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-darker dark:text-neutral-light mb-6">
          About <span className="text-primary dark:text-primary-light">Dr. {doctor.name}</span>
        </h2>
        
        {doctor.bio && (
          <div className="text-neutral-dark dark:text-neutral-medium mb-8 space-y-4">
            {doctor.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          {doctor.education && doctor.education.length > 0 && (
            <div>
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-4">
                Education & Qualifications
              </h3>
              <ul className="space-y-3">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary dark:text-primary-light mt-1 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="text-neutral-dark dark:text-neutral-medium">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Specialties */}
          {doctor.specialties && doctor.specialties.length > 0 && (
            <div>
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-4">
                Specializations
              </h3>
              <ul className="space-y-3">
                {doctor.specialties.map((specialty, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary dark:text-primary-light mt-1 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-dark dark:text-neutral-medium">{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Achievements */}
          {doctor.achievements && doctor.achievements.length > 0 && (
            <div>
              <h3 className="text-xl font-serif text-primary dark:text-primary-light mb-4">
                Achievements & Awards
              </h3>
              <ul className="space-y-3">
                {doctor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary dark:text-primary-light mt-1 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.657 3a1 1 0 01.707 1.707l-.707.707.707.707a1 1 0 01-1.414 1.414L14.243 7l-.707.707a1 1 0 01-1.414-1.414l.707-.707-.707-.707A1 1 0 0112 3zm2 10a1 1 0 01.707.293l.707.707 1.414-1.414a1 1 0 111.414 1.414l-.707.707.707.707a1 1 0 01-1.414 1.414L16.95 14.243l-.707.707a1 1 0 01-1.414-1.414l.707-.707-.707-.707A1 1 0 0114 13z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-dark dark:text-neutral-medium">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}; 