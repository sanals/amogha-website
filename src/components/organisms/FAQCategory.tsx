import React from 'react';
import { FAQCategory as FAQCategoryType } from '../../data/faqData';
import FAQItem from '../molecules/FAQItem';

interface FAQCategoryProps {
  category: FAQCategoryType;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category }) => {
  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-semibold text-primary dark:text-primary-light mb-2">{category.title}</h2>
        <p className="text-gray-600 dark:text-neutral-medium">{category.description}</p>
      </div>
      <div className="bg-white dark:bg-neutral-dark rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-700">
        {category.faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory; 