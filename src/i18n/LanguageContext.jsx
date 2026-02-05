import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const SUPPORTED_LANGUAGES = ['fr', 'de', 'en'];
const DEFAULT_LANGUAGE = 'fr';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('kozelsky-language');
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
    // Check browser language
    const browserLang = navigator.language?.split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem('kozelsky-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    // Navigate through the translations object using dot notation
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    // If we reached a translation object with language keys
    if (value && typeof value === 'object' && language in value) {
      return value[language];
    }

    // If it's already a string, return it
    if (typeof value === 'string') {
      return value;
    }

    console.warn(`Translation not found for key: ${key}, language: ${language}`);
    return key;
  };

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
