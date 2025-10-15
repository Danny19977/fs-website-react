import React, { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll animations using Intersection Observer API
 * Provides a reusable way to add scroll animations to any React component
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {number} options.delay - Animation delay in milliseconds
 * @param {boolean} options.once - Whether animation should only happen once
 * @returns {Object} - { ref, isVisible, hasAnimated }
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  delay = 0,
  once = true
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once && hasAnimated) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay, once, hasAnimated]);

  return { ref, isVisible, hasAnimated };
};

/**
 * Higher-order component that adds scroll animations to any component
 * 
 * @param {React.Component} WrappedComponent - Component to animate
 * @param {Object} animationOptions - Animation configuration
 * @returns {React.Component} - Enhanced component with scroll animations
 */
export const withScrollAnimation = (WrappedComponent, animationOptions = {}) => {
  return function ScrollAnimatedComponent(props) {
    const {
      animation = 'fade-up',
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      delay = 0,
      once = true,
      ...restOptions
    } = animationOptions;

    const { ref, isVisible } = useScrollAnimation({
      threshold,
      rootMargin,
      delay,
      once
    });

    const animationClasses = [
      'scroll-animated-element',
      `scroll-animated-element--${animation}`,
      isVisible ? 'scroll-animated-element--visible' : ''
    ].join(' ');

    return (
      <div ref={ref} className={animationClasses} {...restOptions}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

/**
 * Utility function to create staggered animations for multiple elements
 * 
 * @param {Array} elements - Array of elements to animate
 * @param {number} staggerDelay - Delay between each element animation
 * @param {Object} baseOptions - Base animation options
 * @returns {Array} - Array of elements with staggered delays
 */
export const createStaggeredAnimations = (elements, staggerDelay = 100, baseOptions = {}) => {
  return elements.map((element, index) => ({
    ...element,
    delay: (baseOptions.delay || 0) + (index * staggerDelay)
  }));
};

/**
 * Performance monitor for scroll animations
 * Helps optimize animation performance by tracking frame rates
 */
export class ScrollAnimationPerformanceMonitor {
  constructor() {
    this.frameCount = 0;
    this.startTime = performance.now();
    this.isMonitoring = false;
  }

  start() {
    this.isMonitoring = true;
    this.frameCount = 0;
    this.startTime = performance.now();
    this.measureFPS();
  }

  stop() {
    this.isMonitoring = false;
  }

  measureFPS() {
    if (!this.isMonitoring) return;

    this.frameCount++;
    const currentTime = performance.now();
    const elapsed = currentTime - this.startTime;

    if (elapsed >= 1000) {
      const fps = Math.round((this.frameCount * 1000) / elapsed);
      
      // Log performance warning if FPS is too low
      if (fps < 30) {
        console.warn(`Scroll animation performance warning: ${fps} FPS`);
      }

      // Reset counters
      this.frameCount = 0;
      this.startTime = currentTime;
    }

    requestAnimationFrame(() => this.measureFPS());
  }
}

// Export performance monitor instance
export const performanceMonitor = new ScrollAnimationPerformanceMonitor();

/**
 * Utility function to check if device supports smooth animations
 * Used for graceful degradation on lower-end devices
 */
export const supportsModernAnimations = () => {
  // Check for Intersection Observer support
  if (!window.IntersectionObserver) {
    return false;
  }

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  // Basic hardware acceleration check
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  return !!gl;
};

/**
 * Batch animation utility for animating multiple elements efficiently
 */
export class BatchAnimationController {
  constructor() {
    this.animationQueue = [];
    this.isProcessing = false;
  }

  add(elementRef, animationConfig) {
    this.animationQueue.push({ elementRef, animationConfig });
    
    if (!this.isProcessing) {
      this.process();
    }
  }

  process() {
    this.isProcessing = true;

    const processChunk = () => {
      const chunk = this.animationQueue.splice(0, 5); // Process 5 at a time
      
      chunk.forEach(({ elementRef, animationConfig }) => {
        if (elementRef.current) {
          this.applyAnimation(elementRef.current, animationConfig);
        }
      });

      if (this.animationQueue.length > 0) {
        requestAnimationFrame(processChunk);
      } else {
        this.isProcessing = false;
      }
    };

    requestAnimationFrame(processChunk);
  }

  applyAnimation(element, config) {
    element.style.transition = `all ${config.duration || 600}ms ${config.easing || 'ease-out'}`;
    element.style.transform = config.transform || 'translateY(0)';
    element.style.opacity = config.opacity !== undefined ? config.opacity : 1;
  }
}

export const batchController = new BatchAnimationController();