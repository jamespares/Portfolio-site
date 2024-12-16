import React, { createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
  getLanguageEmoji: (lang: Language) => string;
  getLanguageName: (lang: Language) => string;
}

const languageEmojis: Record<Language, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
};

const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: async () => {},
  getLanguageEmoji: () => '🇬🇧',
  getLanguageName: () => 'English',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { i18n } = useTranslation();
  
  const setLanguage = async (lang: Language) => {
    const { pathname, asPath, query } = router;
    await router.push({ pathname, query }, asPath, { locale: lang });
  };

  const getLanguageEmoji = (lang: Language) => languageEmojis[lang];
  const getLanguageName = (lang: Language) => languageNames[lang];

  return (
    <LanguageContext.Provider value={{ 
      language: (router.locale || 'en') as Language,
      setLanguage,
      getLanguageEmoji,
      getLanguageName
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
