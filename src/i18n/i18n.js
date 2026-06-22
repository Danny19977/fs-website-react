import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import zaTranslation from './locales/za/translation.json';
import frTranslation from './locales/fr/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  za: {
    translation: zaTranslation
  },
  fr: {
    translation: frTranslation
  }
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && resources[savedLanguage]) {
    return savedLanguage;
  }

  const browserLocales = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || 'en'];

  for (const locale of browserLocales) {
    const normalizedLocale = String(locale).toLowerCase();
    const language = normalizedLocale.split('-')[0];

    if (language === 'fr') return 'fr';
    if (language === 'en') return 'en';
    if (
      normalizedLocale.includes('-za') ||
      ['af', 'zu', 'xh', 'st', 'tn', 'nso', 'ss', 've', 'ts', 'nr'].includes(language)
    ) {
      return 'za';
    }
  }

  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
    }
  });

export default i18n;