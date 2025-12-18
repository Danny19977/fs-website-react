// Google Analytics event tracking utility
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (pageName, pagePath) => {
  if (window.gtag && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageName,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent('form_submit', {
    form_name: formName,
    timestamp: new Date().toISOString(),
    ...formData,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    timestamp: new Date().toISOString(),
  });
};

// Track scroll depth
export const trackScrollDepth = (scrollPercentage) => {
  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage,
    timestamp: new Date().toISOString(),
  });
};

// Track user engagement (time on page)
export const trackEngagement = (pageName, timeSpent) => {
  trackEvent('user_engagement', {
    page_name: pageName,
    time_spent_seconds: Math.round(timeSpent / 1000),
    timestamp: new Date().toISOString(),
  });
};

const analyticsUtils = {
  trackEvent,
  trackPageView,
  trackFormSubmission,
  trackButtonClick,
  trackScrollDepth,
  trackEngagement,
};

export default analyticsUtils;
