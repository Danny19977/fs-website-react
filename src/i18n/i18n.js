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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // get from localStorage or default to 'en'
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
    }
  });

export default i18n;