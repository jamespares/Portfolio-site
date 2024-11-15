import React, { createContext, useState, ReactNode } from 'react';
import en from '../translations/en';
import fr from '../translations/fr';

type Language = 'en' | 'fr';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  translations: typeof en;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  toggleLanguage: () => {},
  translations: en,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  const translations = language === 'en' ? en : fr;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
