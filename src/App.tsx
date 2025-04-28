import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import PageTransition from './components/molecules/PageTransition';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { LoadingSpinner } from './components/atoms/LoadingSpinner';
import ScrollToTop from './components/atoms/ScrollToTop';

// Eagerly load the HomePage for fastest initial load
import HomePage from './pages/HomePage';

// Lazy load other pages for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage'));
const TreatmentDetailPage = lazy(() => import('./pages/TreatmentDetailPage'));
const DepartmentsPage = lazy(() => import('./pages/DepartmentsPage'));
const DepartmentPage = lazy(() => import('./pages/DepartmentPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));
const DoctorPage = lazy(() => import('./pages/DoctorPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PressPage = lazy(() => import('./pages/PressPage'));
const BookAppointmentPage = lazy(() => import('./pages/BookAppointmentPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-neutral-light dark:bg-neutral-darker text-neutral-darker dark:text-neutral-light">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/treatments" element={<TreatmentsPage />} />
                  <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
                  <Route path="/departments" element={<DepartmentsPage />} />
                  <Route path="/departments/:id" element={<DepartmentPage />} />
                  <Route path="/doctors" element={<DoctorsPage />} />
                  <Route path="/doctors/:id" element={<DoctorPage />} />
                  <Route path="/testimonials/*" element={<TestimonialsPage />} />
                  <Route path="/gallery/*" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/press" element={<PressPage />} />
                  <Route path="/book-appointment" element={<BookAppointmentPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </PageTransition>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 