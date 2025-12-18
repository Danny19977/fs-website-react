import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCookie, saveCookiePreferences } from '../utils/cookieUtils';
import './CookieConsentBanner.css';

const CookieConsentBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = getCookie('fs_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    saveCookiePreferences(allPreferences);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    saveCookiePreferences(minimalPreferences);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
    setShowBanner(false);
    setShowDetails(false);
  };

  const handlePreferenceChange = (key) => {
    if (key === 'essential') return; // Essential cannot be unchecked
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-container">
        {!showDetails ? (
          <>
            <div className="cookie-consent-content">
              <h3>{t('cookies.title') || 'We Value Your Privacy'}</h3>
              <p>{t('cookies.description') || 'We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.'}</p>
            </div>
            <div className="cookie-consent-actions">
              <button
                className="cookie-btn cookie-btn-reject"
                onClick={handleRejectAll}
              >
                {t('cookies.reject') || 'Reject'}
              </button>
              <button
                className="cookie-btn cookie-btn-details"
                onClick={() => setShowDetails(true)}
              >
                {t('cookies.details') || 'Manage Preferences'}
              </button>
              <button
                className="cookie-btn cookie-btn-accept"
                onClick={handleAcceptAll}
              >
                {t('cookies.acceptAll') || 'Accept All'}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-consent-details">
              <h3>{t('cookies.preferences') || 'Cookie Preferences'}</h3>
              <p>{t('cookies.preferencesDesc') || 'Below you can manage your cookie preferences:'}</p>

              <div className="cookie-preference-item">
                <div className="preference-header">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={preferences.essential}
                    disabled
                    readOnly
                  />
                  <label htmlFor="essential">
                    <strong>{t('cookies.essential') || 'Essential Cookies'}</strong>
                  </label>
                </div>
                <p>{t('cookies.essentialDesc') || 'These cookies are necessary for the website to function properly.'}</p>
              </div>

              <div className="cookie-preference-item">
                <div className="preference-header">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                  />
                  <label htmlFor="analytics">
                    <strong>{t('cookies.analytics') || 'Analytics Cookies'}</strong>
                  </label>
                </div>
                <p>{t('cookies.analyticsDesc') || 'Help us understand how visitors interact with our website to improve user experience.'}</p>
              </div>

              <div className="cookie-preference-item">
                <div className="preference-header">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                  />
                  <label htmlFor="marketing">
                    <strong>{t('cookies.marketing') || 'Marketing Cookies'}</strong>
                  </label>
                </div>
                <p>{t('cookies.marketingDesc') || 'Used to track visitors and show personalized ads based on their interests.'}</p>
              </div>
            </div>

            <div className="cookie-consent-actions">
              <button
                className="cookie-btn cookie-btn-reject"
                onClick={handleRejectAll}
              >
                {t('cookies.rejectAll') || 'Reject All'}
              </button>
              <button
                className="cookie-btn cookie-btn-cancel"
                onClick={() => setShowDetails(false)}
              >
                {t('cookies.back') || 'Back'}
              </button>
              <button
                className="cookie-btn cookie-btn-save"
                onClick={handleSavePreferences}
              >
                {t('cookies.save') || 'Save Preferences'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;
