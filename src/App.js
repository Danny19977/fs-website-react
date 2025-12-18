import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import './App.css';
import './styles/scroll-animations.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import CookieConsentBanner from './components/CookieConsentBanner';
import { trackPageView } from './utils/analyticsUtils';
import errorTracker from './utils/errorTracker';
import './i18n/i18n';

// Lazy load route components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Service = lazy(() => import('./pages/Service'));
const Price = lazy(() => import('./pages/Price'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));

// Fallback loading component
const PageFallback = () => (
  <div style={{ padding: '40px', textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
      <p>Loading page...</p>
    </div>
  </div>
);

// Separate component for routes - uses useLocation inside Router
function AppRoutes() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('fs_dark_mode') === '1');
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Track page views
  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
    trackPageView(pageName, location.pathname);
  }, [location]);

  // Setup scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Track at milestones
      if (scrollPercentage > 25 && !sessionStorage.getItem('scroll_25')) {
        sessionStorage.setItem('scroll_25', 'true');
        if (window.gtag) window.gtag('event', 'scroll_milestone', { milestone: 25 });
      }
      if (scrollPercentage > 50 && !sessionStorage.getItem('scroll_50')) {
        sessionStorage.setItem('scroll_50', 'true');
        if (window.gtag) window.gtag('event', 'scroll_milestone', { milestone: 50 });
      }
      if (scrollPercentage > 75 && !sessionStorage.getItem('scroll_75')) {
        sessionStorage.setItem('scroll_75', 'true');
        if (window.gtag) window.gtag('event', 'scroll_milestone', { milestone: 75 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Log any unhandled errors
  useEffect(() => {
    const handleError = (event) => {
      errorTracker.logError(event.error, {
        source: 'window.onerror',
        message: event.message,
      });
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageFallback />}>
              <Home darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
        <Route
          path="/service"
          element={
            <Suspense fallback={<PageFallback />}>
              <Service darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
        <Route
          path="/price"
          element={
            <Suspense fallback={<PageFallback />}>
              <Price darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<PageFallback />}>
              <Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
        <Route
          path="/service-details"
          element={
            <Suspense fallback={<PageFallback />}>
              <ServiceDetails darkMode={darkMode} setDarkMode={setDarkMode} />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}

// Main App component with Router
function App() {
  const [showLoading, setShowLoading] = useState(true);
  const loadingShownRef = useRef(false);

  useEffect(() => {
    // Only show loading screen once on first app load
    if (!loadingShownRef.current) {
      loadingShownRef.current = true;
      // Auto-hide loading after 3.5 seconds
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />}
      <Router>
        <AppRoutes />
      </Router>
      <CookieConsentBanner />
    </>
  );
}

export default App;
