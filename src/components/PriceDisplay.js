import React, { useState, useEffect } from 'react';
import { formatCurrency } from '../utils/currencyUtils';

const PriceDisplay = ({ amount }) => {
  const [country, setCountry] = useState(localStorage.getItem('selectedCountry') || 'za');

  useEffect(() => {
    const handleCountryChange = (event) => {
      setCountry(event.detail);
    };

    window.addEventListener('countryChange', handleCountryChange);
    return () => window.removeEventListener('countryChange', handleCountryChange);
  }, []);

  return (
    <span className="price">
      {formatCurrency(amount, country)}
    </span>
  );
};

export default PriceDisplay;