import React from 'react';
import {
  FaCertificate, FaProjectDiagram, FaUserCheck, FaUserMd,
  FaHandsHelping, FaBookOpen, FaLeaf, FaStar, FaHeart,
  FaCalendarCheck, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaCheck, FaHistory
} from 'react-icons/fa';
import { cardBase, cardHoverStyle } from '../../theme/cardStyles';

// Map icon string identifiers to react-icons
const iconMap: Record<string, React.ReactElement> = {
  'fa-certificate': <FaCertificate className="text-2xl text-primary dark:text-primary-light" />,
  'fa-circle-nodes': <FaProjectDiagram className="text-2xl text-primary dark:text-primary-light" />,
  'fa-user-check': <FaUserCheck className="text-2xl text-primary dark:text-primary-light" />,
  'fa-user-md': <FaUserMd className="text-2xl text-primary dark:text-primary-light" />,
  'fa-hands-holding-circle': <FaHandsHelping className="text-2xl text-primary dark:text-primary-light" />,
  'fa-book-open-reader': <FaBookOpen className="text-2xl text-primary dark:text-primary-light" />,
  'fa-leaf': <FaLeaf className="text-2xl text-primary dark:text-primary-light" />,
  'fa-star': <FaStar className="text-2xl text-primary dark:text-primary-light" />,
  'fa-heart': <FaHeart className="text-2xl text-primary dark:text-primary-light" />,
  'fa-calendar-check': <FaCalendarCheck className="text-2xl text-primary dark:text-primary-light" />,
  'fa-phone': <FaPhone className="text-2xl text-primary dark:text-primary-light" />,
  'fa-envelope': <FaEnvelope className="text-2xl text-primary dark:text-primary-light" />,
  'fa-location-dot': <FaMapMarkerAlt className="text-2xl text-primary dark:text-primary-light" />,
  'fa-check': <FaCheck className="text-2xl text-primary dark:text-primary-light" />,
  'fa-clock-rotate-left': <FaHistory className="text-2xl text-primary dark:text-primary-light" />,
};

interface ValueItemProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ValueItem: React.FC<ValueItemProps> = ({ title, description, icon, index }) => {
  const renderedIcon = iconMap[icon] ?? <FaCertificate className="text-2xl text-primary dark:text-primary-light" />;

  return (
    <div className={`${cardBase} p-6 ${cardHoverStyle}`}>
      <div className="w-16 h-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 flex items-center justify-center mb-4 mx-auto text-2xl">
        {renderedIcon}
      </div>

      <h3 className="text-xl font-serif text-center text-neutral-darker dark:text-neutral-light mb-3">
        {title}
      </h3>

      <p className="text-neutral-dark dark:text-neutral-medium text-center">
        {description}
      </p>
    </div>
  );
};

export default ValueItem;