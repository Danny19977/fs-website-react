import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register Service Worker for PWA support
if (process.env.REACT_APP_ENABLE_PWA === 'true') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log('Service Worker registered:', registration);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn('Service Worker registration failed:', error);
        });
    });
  }
}

// Measure and report Web Vitals performance metrics
// Pass a function to log results or send to analytics endpoint
reportWebVitals((metric) => {
  // Send metrics to Google Analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`${metric.name}: ${metric.value}ms`);
  }
});
