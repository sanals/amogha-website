import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import PlaceholderPage from './pages/PlaceholderPage';
import DepartmentPage from './pages/DepartmentPage';
import DoctorPage from './pages/DoctorPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import FAQPage from './pages/FAQPage';
import PressPage from './pages/PressPage';
import MapTestPage from './components/pages/MapTestPage';
import PageTransition from './components/molecules/PageTransition';

// Animation wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/treatments" element={<PageTransition><PlaceholderPage title="Our Treatments" /></PageTransition>} />
        <Route path="/departments" element={<PageTransition><PlaceholderPage title="Our Departments" /></PageTransition>} />
        <Route path="/departments/:slug" element={<PageTransition><DepartmentPage /></PageTransition>} />
        <Route path="/doctors" element={<PageTransition><PlaceholderPage title="Our Doctors" /></PageTransition>} />
        <Route path="/doctors/:slug" element={<PageTransition><DoctorPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><PlaceholderPage title="Gallery" /></PageTransition>} />
        <Route path="/gallery/photos" element={<PageTransition><PlaceholderPage title="Photo Gallery" /></PageTransition>} />
        <Route path="/gallery/videos" element={<PageTransition><PlaceholderPage title="Video Gallery" /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><PlaceholderPage title="Testimonials" /></PageTransition>} />
        <Route path="/testimonials/quotes" element={<PageTransition><PlaceholderPage title="Patient Quotes" /></PageTransition>} />
        <Route path="/testimonials/videos" element={<PageTransition><PlaceholderPage title="Video Testimonials" /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/book-appointment" element={<PageTransition><BookAppointmentPage /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
        <Route path="/press" element={<PageTransition><PressPage /></PageTransition>} />
        <Route path="/map-test" element={<PageTransition><MapTestPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 