export const CURRENCY_CONFIG = {
  za: {
    currency: 'ZAR',
    locale: 'en-ZA',
    symbol: 'R',
    rate: 1 // Base currency
  },
  cd: {
    currency: 'USD',
    locale: 'fr-CD',
    symbol: '$',
    rate: 1/17 // 1 Rand = 1/17 USD
  },
  gb: {
    currency: 'GBP',
    locale: 'en-GB',
    symbol: '£',
    rate: 1/21 // 1 Rand = 1/21 GBP
  }
};

export const convertAmount = (amount, country) => {
  const config = CURRENCY_CONFIG[country] || CURRENCY_CONFIG.za;
  return amount * config.rate;
};

export const formatCurrency = (amount, country) => {
  const config = CURRENCY_CONFIG[country] || CURRENCY_CONFIG.za;
  const convertedAmount = convertAmount(amount, country);
  
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedAmount);
};

export const getCountryFromLanguage = (language) => {
  switch (language) {
    case 'fr':
      return 'cd';
    case 'en':
      return 'gb';
    case 'za':
      return 'za';
    default:
      return 'za';
  }
};

export const getLanguageFromCountry = (country) => {
  switch (country) {
    case 'cd':
      return 'fr';
    case 'gb':
      return 'en';
    case 'za':
      return 'za';
    default:
      return 'en';
  }
};