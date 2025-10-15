import React, { useState, useEffect } from 'react';
import './PageTransitionLoader.css';

const PageTransitionLoader = ({ isLoading, currentPage }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      setProgress(0);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowLoader(false), 300);
            return 100;
          }
          return prev + Math.random() * 25 + 10;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className="page-transition-loader">
      <div className="transition-content">
        {/* Animated Logo */}
        <div className="transition-logo-container">
          <div className="transition-logo-3d">
            <img 
              src="/images/loadingicon.png" 
              alt="Loading..." 
              className="transition-logo-image"
            />
          </div>
        </div>

        {/* Page Info */}
        <div className="transition-info">
          <h3>FREELANCE SOLUTIONS</h3>
          <p>Loading {currentPage}...</p>
        </div>

        {/* Progress Bar */}
        <div className="transition-progress">
          <div 
            className="transition-progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PageTransitionLoader;