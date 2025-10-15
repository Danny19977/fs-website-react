import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          // Add a slight delay before hiding loading screen
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 100);

    // Cleanup interval on unmount
    return () => clearInterval(loadingInterval);
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* 3D Moving Logo */}
        <div className="loading-logo-container">
          <div className="loading-logo-3d">
            <img 
              src="/images/loadingicon.png" 
              alt="Loading..." 
              className="loading-logo-image"
            />
            <div className="loading-glow"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <h2>FREELANCE SOLUTIONS</h2>
          <p>Loading your digital experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loading-percentage">{Math.round(progress)}%</div>
        </div>

        {/* Animated Dots */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="loading-background-pattern"></div>
    </div>
  );
};

export default LoadingScreen;