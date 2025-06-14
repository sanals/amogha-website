import React from 'react';
import { CONTACT_INFO } from '../../theme/constants';

interface ContactInfoProps {
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-medium text-neutral-light mb-4">
        Contact with us
      </h3>
      <div className="space-y-3 text-neutral-light">
        <p className="max-w-xs">
          {CONTACT_INFO.address}
        </p>
        <div>
          <p className="font-medium">Call:</p>
          {CONTACT_INFO.phones.map((phone, idx) => (
            <p key={phone.tel}><a href={`tel:${phone.tel}`}>{phone.display}</a></p>
          ))}
        </div>
        <div>
          <p className="font-medium">Email:</p>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
          >
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
}; 