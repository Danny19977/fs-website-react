import React from 'react';
import errorTracker from '../utils/errorTracker';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    errorTracker.logError(error, {
      componentStack: errorInfo.componentStack,
      fatal: true,
    });

    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '40px',
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h1 style={{ color: '#dc3545', marginBottom: '20px' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
            We apologize for the inconvenience. Please refresh the page or contact support.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details
              style={{
                whiteSpace: 'pre-wrap',
                textAlign: 'left',
                padding: '20px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                maxWidth: '600px',
              }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
                Error details (development only)
              </summary>
              <p style={{ color: '#dc3545', fontFamily: 'monospace', fontSize: '12px' }}>
                {this.state.error && this.state.error.toString()}
              </p>
              {this.state.errorInfo && (
                <p style={{ color: '#999', fontFamily: 'monospace', fontSize: '12px' }}>
                  {this.state.errorInfo.componentStack}
                </p>
              )}
            </details>
          )}
          <button
            onClick={() => window.location.href = '/'}
            style={{
              marginTop: '20px',
              padding: '10px 30px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Go to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
