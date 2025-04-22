import React from 'react';

interface ContactInfoProps {
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-medium text-primary dark:text-primary-light mb-4">
        Contact with us
      </h3>
      <div className="space-y-3 text-neutral-dark dark:text-neutral-light">
        <p className="max-w-xs">
          AMOGHA The Ayur Hub, 123 Wellness Drive, 
          Green Valley, Bangalore-560001, Karnataka
        </p>
        <div>
          <p className="font-medium">Call:</p>
          <p>+91 123 456 7890</p>
          <p>+91 987 654 3210</p>
        </div>
        <div>
          <p className="font-medium">Email:</p>
          <a 
            href="mailto:info@amoghaayurhub.com"
            className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
          >
            info@amoghaayurhub.com
          </a>
        </div>
      </div>
    </div>
  );
}; 