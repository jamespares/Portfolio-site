import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Header: React.FC = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">{translations.nav.projects}</h1>
      <button
        onClick={toggleLanguage}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        {language === 'en' ? 'FR' : 'EN'}
      </button>
    </header>
  );
};

export default Header;