import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export const LanguageSwitcher = () => {
  const { language, setLanguage, getLanguageEmoji, getLanguageName } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['en', 'fr'] as const;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        aria-label="Select language"
      >
        <span role="img" aria-label={getLanguageName(language)} className="text-base">
          {getLanguageEmoji(language)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-1 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`
                w-full px-3 py-2 text-sm text-left flex items-center space-x-3
                ${language === lang ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
              `}
            >
              <span role="img" aria-label={getLanguageName(lang)} className="text-base">
                {getLanguageEmoji(lang)}
              </span>
              <span className={`
                ${language === lang ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}
              `}>
                {getLanguageName(lang)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 