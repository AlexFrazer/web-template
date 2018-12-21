import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import es from './es';

export default i18n.use(LanguageDetector).init({
  resources: { en, es },
  fallbackLng: 'en',
  defaultNS: 'default',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});
