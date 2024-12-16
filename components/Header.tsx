import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LanguageSwitcher } from './LanguageSwitcher';

const Header: React.FC = () => {
  const router = useRouter();
  
  const navItems = [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Skills', href: '/#skills' },
    { label: 'CV', href: '/cv' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  router.asPath === item.href
                    ? 'border-sky-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;