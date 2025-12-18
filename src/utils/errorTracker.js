// Error tracking and monitoring utility
class ErrorTracker {
  constructor() {
    this.errors = [];
    this.enabled = process.env.REACT_APP_ENABLE_ERROR_TRACKING === 'true';
  }

  // Log error to console and storage
  logError(error, errorInfo = {}) {
    if (!this.enabled) return;

    const errorLog = {
      message: error.message || String(error),
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...errorInfo,
    };

    // Store in array for session tracking
    this.errors.push(errorLog);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error logged:', errorLog);
    }

    // Send to Google Analytics as an event
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: errorLog.message,
        fatal: errorInfo.fatal || false,
      });
    }

    // Optional: Send to external error tracking service
    this.sendToExternalService(errorLog);
  }

  sendToExternalService(errorLog) {
    // Integration point for services like Sentry, Rollbar, etc.
    // Example:
    // fetch('https://your-error-tracking-service.com/log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorLog),
    // }).catch(err => console.warn('Error sending to tracking service:', err));
  }

  getErrors() {
    return this.errors;
  }

  clearErrors() {
    this.errors = [];
  }
}

const errorTracker = new ErrorTracker();

export default errorTracker;
