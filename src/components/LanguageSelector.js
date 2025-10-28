import React from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguageFromCountry } from '../utils/currencyUtils';
import ReactCountryFlag from 'react-country-flag';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const countries = [
    { code: 'za', name: 'South Africa', flagCode: 'ZA' },
    { code: 'cd', name: 'DR Congo', flagCode: 'CD' },
    { code: 'gb', name: 'Europe', flagCode: 'GB' }
  ];

  const handleCountryChange = (countryCode) => {
    const language = getLanguageFromCountry(countryCode);
    i18n.changeLanguage(language);
    // Store both country and language preferences in localStorage
    localStorage.setItem('selectedCountry', countryCode);
    localStorage.setItem('language', language);
    // Trigger a custom event to notify other components about the country change
    window.dispatchEvent(new CustomEvent('countryChange', { detail: countryCode }));
  };

  return (
    <div className="language-selector" style={{ position: 'relative' }}>
      <select 
        onChange={(e) => handleCountryChange(e.target.value)}
        value={localStorage.getItem('selectedCountry') || 'za'}
        className="form-select"
        style={{ paddingLeft: '35px' }}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <ReactCountryFlag
          countryCode={countries.find(c => c.code === (localStorage.getItem('selectedCountry') || 'za'))?.flagCode || 'ZA'}
          svg
          style={{
            width: '20px',
            height: '15px'
          }}
          title={countries.find(c => c.code === (localStorage.getItem('selectedCountry') || 'za'))?.name || 'South Africa'}
        />
      </div>
    </div>
  );
};

export default LanguageSelector;