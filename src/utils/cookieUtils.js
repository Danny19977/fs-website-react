// Cookie management utility for tracking user interactions and preferences
// GDPR compliant with consent management

const COOKIE_CONFIG = {
  domain: window.location.hostname,
  path: '/',
  maxAge: 365 * 24 * 60 * 60, // 1 year in seconds
};

/**
 * Set a cookie with specified options
 */
export const setCookie = (name, value, options = {}) => {
  const config = { ...COOKIE_CONFIG, ...options };
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))}`;

  if (config.maxAge) {
    const date = new Date();
    date.setTime(date.getTime() + config.maxAge * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }

  if (config.path) cookieString += `; path=${config.path}`;
  if (config.domain) cookieString += `; domain=${config.domain}`;
  if (config.secure) cookieString += '; secure';
  if (config.sameSite) cookieString += `; SameSite=${config.sameSite}`;

  document.cookie = cookieString;
};

/**
 * Get a cookie value
 */
export const getCookie = (name) => {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      const value = cookie.substring(nameEQ.length);
      try {
        return JSON.parse(decodeURIComponent(value));
      } catch (e) {
        return decodeURIComponent(value);
      }
    }
  }
  return null;
};

/**
 * Delete a cookie
 */
export const deleteCookie = (name) => {
  setCookie(name, '', { maxAge: -1 });
};

/**
 * Get or create user session ID
 */
export const getOrCreateSessionId = () => {
  let sessionId = getCookie('fs_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setCookie('fs_session_id', sessionId, { maxAge: 24 * 60 * 60 }); // 24 hours
  }
  return sessionId;
};

/**
 * Get or create user ID
 */
export const getOrCreateUserId = () => {
  let userId = getCookie('fs_user_id');
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setCookie('fs_user_id', userId); // Persists for 1 year
  }
  return userId;
};

/**
 * Check if user has given cookie consent
 */
export const hasConsentedToCookies = () => {
  const consent = getCookie('fs_cookie_consent');
  return consent && consent.analytics === true;
};

/**
 * Check if user has given marketing consent
 */
export const hasConsentedToMarketing = () => {
  const consent = getCookie('fs_cookie_consent');
  return consent && consent.marketing === true;
};

/**
 * Save cookie preferences
 */
export const saveCookiePreferences = (preferences) => {
  const consent = {
    essential: true, // Always true
    analytics: preferences.analytics || false,
    marketing: preferences.marketing || false,
    timestamp: new Date().toISOString(),
    consentedAt: Date.now(),
  };
  setCookie('fs_cookie_consent', consent);
  return consent;
};

/**
 * Track user interaction (only if consent given)
 */
export const trackInteraction = (interactionType, data = {}) => {
  if (!hasConsentedToCookies()) {
    return; // Don't track without consent
  }

  const userId = getOrCreateUserId();
  const sessionId = getOrCreateSessionId();
  const interactions = getCookie('fs_interactions') || [];

  const interaction = {
    type: interactionType, // 'click', 'scroll', 'form_submit', 'video_play', etc.
    data: data,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
    userId,
    sessionId,
  };

  // Keep only last 50 interactions in cookie (to avoid cookie size limits)
  const updatedInteractions = [...interactions, interaction].slice(-50);
  setCookie('fs_interactions', updatedInteractions, { maxAge: 24 * 60 * 60 });

  return interaction;
};

/**
 * Get all tracked interactions
 */
export const getTrackedInteractions = () => {
  return getCookie('fs_interactions') || [];
};

/**
 * Clear interaction history
 */
export const clearInteractionHistory = () => {
  deleteCookie('fs_interactions');
};

/**
 * Track form submission
 */
export const trackFormSubmissionCookie = (formName, fieldCount) => {
  if (!hasConsentedToCookies()) return;
  trackInteraction('form_submission', {
    formName,
    fieldCount,
    timestamp: Date.now(),
  });
};

/**
 * Track button clicks
 */
export const trackButtonClickCookie = (buttonLabel, buttonId) => {
  if (!hasConsentedToCookies()) return;
  trackInteraction('button_click', {
    buttonLabel,
    buttonId,
    timestamp: Date.now(),
  });
};

/**
 * Track page scroll depth
 */
export const trackScrollDepthCookie = (percentage) => {
  if (!hasConsentedToCookies()) return;
  trackInteraction('scroll', {
    scrollPercentage: percentage,
    timestamp: Date.now(),
  });
};

/**
 * Track video interactions
 */
export const trackVideoInteractionCookie = (videoName, action) => {
  if (!hasConsentedToCookies()) return;
  trackInteraction('video_interaction', {
    videoName,
    action, // 'play', 'pause', 'ended', 'error'
    timestamp: Date.now(),
  });
};

/**
 * Track link clicks
 */
export const trackLinkClickCookie = (linkUrl, linkText) => {
  if (!hasConsentedToCookies()) return;
  trackInteraction('link_click', {
    url: linkUrl,
    text: linkText,
    timestamp: Date.now(),
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPageCookie = (pageName, timeInSeconds) => {
  if (!hasConsentedToCookies()) return;
  trackInteraction('time_on_page', {
    page: pageName,
    seconds: timeInSeconds,
    timestamp: Date.now(),
  });
};

/**
 * Get user preferences cookie
 */
export const getUserPreferences = () => {
  return getCookie('fs_user_prefs') || { theme: 'light', language: 'en' };
};

/**
 * Save user preferences
 */
export const saveUserPreferences = (preferences) => {
  setCookie('fs_user_prefs', preferences);
  return preferences;
};

/**
 * Get all cookies data for debugging/export
 */
export const getAllCookieData = () => {
  return {
    sessionId: getCookie('fs_session_id'),
    userId: getCookie('fs_user_id'),
    consent: getCookie('fs_cookie_consent'),
    preferences: getCookie('fs_user_prefs'),
    interactions: getCookie('fs_interactions'),
  };
};

export default {
  setCookie,
  getCookie,
  deleteCookie,
  getOrCreateSessionId,
  getOrCreateUserId,
  hasConsentedToCookies,
  hasConsentedToMarketing,
  saveCookiePreferences,
  trackInteraction,
  getTrackedInteractions,
  clearInteractionHistory,
  trackFormSubmissionCookie,
  trackButtonClickCookie,
  trackScrollDepthCookie,
  trackVideoInteractionCookie,
  trackLinkClickCookie,
  trackTimeOnPageCookie,
  getUserPreferences,
  saveUserPreferences,
  getAllCookieData,
};
