import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimatedElement.css';

const ScrollAnimatedElement = ({ 
  children, 
  animation = 'fade-up', 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px',
  delay = 0,
  duration = 600,
  once = true,
  className = ''
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay before triggering animation
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);

            // If animation should only happen once, stop observing
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once && hasAnimated) {
            // If animation can repeat, reset when element leaves viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay, once, hasAnimated]);

  // Generate CSS custom properties for dynamic values
  const customStyles = {
    '--animation-duration': `${duration}ms`,
    '--animation-delay': `${delay}ms`
  };

  const animationClasses = [
    'scroll-animated-element',
    `scroll-animated-element--${animation}`,
    isVisible ? 'scroll-animated-element--visible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={elementRef}
      className={animationClasses}
      style={customStyles}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedElement;