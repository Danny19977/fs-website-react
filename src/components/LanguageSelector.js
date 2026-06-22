import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguageFromCountry } from '../utils/currencyUtils';
import ReactCountryFlag from 'react-country-flag';
import './LanguageSelector.css';

const LanguageSelector = ({ selectedCountry, onCountryChange }) => {
  const { i18n } = useTranslation();

  const countries = [
    { code: 'za', name: 'South Africa', flagCode: 'ZA' },
    { code: 'cd', name: 'DR Congo', flagCode: 'CD' },
    { code: 'gb', name: 'Europe', flagCode: 'GB' }
  ];

  // Apply language whenever selectedCountry changes
  useEffect(() => {
    const language = getLanguageFromCountry(selectedCountry);
    i18n.changeLanguage(language);
    localStorage.setItem('selectedCountry', selectedCountry);
    localStorage.setItem('language', language);
    window.dispatchEvent(new CustomEvent('countryChange', { detail: selectedCountry }));
  }, [selectedCountry, i18n]);

  const handleCountryChange = (countryCode) => {
    onCountryChange(countryCode);
  };

  return (
    <div className="language-selector" style={{ position: 'relative' }}>
      <select
        onChange={(e) => handleCountryChange(e.target.value)}
        value={selectedCountry}
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
          countryCode={countries.find(c => c.code === selectedCountry)?.flagCode || 'ZA'}
          svg
          style={{
            width: '20px',
            height: '15px'
          }}
          title={countries.find(c => c.code === selectedCountry)?.name || 'South Africa'}
        />
      </div>
    </div>
  );
};

export default LanguageSelector;