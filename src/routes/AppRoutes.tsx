import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PlaceholderPage from '../pages/PlaceholderPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<PlaceholderPage title="About Us" />} />
      <Route path="/treatments" element={<PlaceholderPage title="Our Treatments" />} />
      <Route path="/doctors" element={<PlaceholderPage title="Our Doctors" />} />
      <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
      <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
      <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes; 