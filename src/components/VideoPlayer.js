import React, { useState, useRef } from 'react';

/**
 * Enhanced Video Player Component
 * Handles video playback with error handling, retry logic, and fallbacks
 */
const VideoPlayer = ({
  src,
  poster,
  controls = true,
  width = '100%',
  height = 'auto',
  className = '',
  style = {},
  autoPlay = false,
  loop = false,
  muted = false,
  objectFit = 'contain',
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const handleError = (e) => {
    console.error('Video error:', e);
    setIsError(true);
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setIsError(false);
  };

  const handleLoadingStarted = () => {
    setIsLoading(true);
  };

  const retryPlayback = () => {
    setIsError(false);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  if (isError) {
    return (
      <div
        style={{
          width,
          height,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          ...style,
        }}
        className={className}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ marginBottom: '10px', color: '#666' }}>
            ⚠️ Video unavailable
          </p>
          <small style={{ color: '#999', display: 'block', marginBottom: '10px' }}>
            The video could not be loaded. This may be due to:
            <br />
            • File format compatibility
            <br />
            • Network issues
            <br />
            • Browser limitations
          </small>
          <button
            onClick={retryPlayback}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width,
        height: height === 'auto' ? 'auto' : height,
        backgroundColor: '#000',
        borderRadius: '4px',
        overflow: 'hidden',
        ...style,
      }}
      className={className}
    >
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '14px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div className="spinner" />
            <span>Loading video...</span>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: objectFit,
        }}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
        onError={handleError}
        onCanPlay={handleCanPlay}
        onLoadStart={handleLoadingStarted}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <p style={{ color: 'white', padding: '20px' }}>
          Your browser does not support the video tag. Please try a modern browser or
          <a
            href={src}
            style={{ color: '#007bff', marginLeft: '5px' }}
            download
          >
            download the video
          </a>
          .
        </p>
      </video>
    </div>
  );
};

export default VideoPlayer;
