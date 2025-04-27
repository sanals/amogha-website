import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PlaceholderPage from '../pages/PlaceholderPage';
import DoctorsPage from '../pages/DoctorsPage';
import DoctorPage from '../pages/DoctorPage';
import PressPage from '../pages/PressPage';
import ArticlePage from '../pages/ArticlePage';
import FAQPage from '../pages/FAQPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<PlaceholderPage title="About Us" />} />
      <Route path="/treatments" element={<PlaceholderPage title="Our Treatments" />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/doctors/:slug" element={<DoctorPage />} />
      <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
      <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
      <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
      <Route path="/press" element={<PressPage />} />
      <Route path="/press/:slug" element={<ArticlePage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes; 