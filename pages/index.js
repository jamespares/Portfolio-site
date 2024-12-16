import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Mail, Link2, Sun, Moon, Globe } from 'lucide-react';
import { motion } from "framer-motion";
import GridPattern from '../components/GridPattern';
import Link from 'next/link';
import { Marquee } from '../components/Marquee';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale = 'en' }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error('Translation loading error:', error);
    return {
      props: {
        ...(await serverSideTranslations('en', ['common'])), // Fallback to English
      },
    };
  }
}

const PortfolioSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  // Language toggle function
  const toggleLanguage = (locale) => {
    router.push(router.pathname, router.pathname, { locale });
    setIsLangMenuOpen(false);
  };

  // Check for user's preferred color scheme and saved preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const projects = [
    {
      id: "project-a",
      title: "Roam – Data Automation Project",
      description: "Built and managed an automated data collection system that transformed how we gather visa information, making our service faster and more reliable for users worldwide.",
      tags: ["Python", "AI/ML", "Data Pipeline", "DevOps"],
      image: "/images/roam.png"
    },
    {
      id: "project-b",
      title: "Roam – Global Expansion",
      description: "Led Roam's international growth by adapting our platform for global audiences, significantly boosting our reach and user engagement across multiple markets.",
      tags: ["Next.js", "SEO", "Node.js", "i18n"],
      image: "/images/roam.png"
    },
    {
      id: "project-c",
      title: "Islington Council – Community Research",
      description: "Led Islington's most extensive community research project, helping redirect £100K in funding to where it was needed most and bringing more residents into the conversation.",
      tags: ["Data Analytics", "Python", "Policy", "Research"],
      image: "/images/islington.png"
    },
    {
      id: "project-d",
      title: "Islington Council – Youth Justice",
      description: "Transformed the Youth Justice Service's operations, helping achieve London's highest inspection rating and setting new standards for youth support services.",
      tags: ["Service Design", "Innovation", "Policy"],
      image: "/images/islington.png"
    },
    {
      id: "project-e",
      title: "Roam - Visa Applications",
      description: "Designed and built a streamlined visa application system that makes the complex process of applying for visas simpler and more user-friendly.",
      tags: ["TypeScript", "Next.js", "Supabase", "Stripe"],
      image: "/images/roam.png"
    }
  ];

  const getLanguageEmoji = (locale) => {
    return locale === 'en' ? '🇬🇧' : '🇫🇷';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-50 border-b-2 border-sky-500 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">James Pares</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 px-3 py-2">
                  {t('nav.about')}
                </span>
              </Link>
              <Link href="#projects">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 px-3 py-2">
                  {t('nav.projects')}
                </span>
              </Link>
              <Link href="#skills">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 px-3 py-2">
                  {t('nav.skills')}
                </span>
              </Link>
              <Link href="/cv">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 px-4 py-2">
                  {t('nav.cv')}
                </span>
              </Link>
              <Link href="#contact">
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 px-3 py-2">
                  {t('nav.contact')}
                </span>
              </Link>
              
              {/* Language Toggle */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center"
                  aria-label="Toggle language"
                >
                  <span role="img" aria-label={router.locale === 'en' ? 'English' : 'Français'}>
                    {getLanguageEmoji(router.locale)}
                  </span>
                </motion.button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        router.locale === 'en'
                          ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-2" role="img" aria-label="English">🇬🇧</span>
                      English
                    </button>
                    <button
                      onClick={() => toggleLanguage('fr')}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        router.locale === 'fr'
                          ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-2" role="img" aria-label="Français">🇫🇷</span>
                      Français
                    </button>
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-white" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500" />
                )}
              </motion.button>
            </div>

            {/* Mobile menu button and dark mode toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#about">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {t('nav.about')}
                </span>
              </Link>
              <Link href="#projects">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {t('nav.projects')}
                </span>
              </Link>
              <Link href="#skills">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {t('nav.skills')}
                </span>
              </Link>
              <Link href="/cv">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-2 border-emerald-500 rounded-full text-center mx-3">
                  {t('nav.cv')}
                </span>
              </Link>
              <Link href="#contact">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  {t('nav.contact')}
                </span>
              </Link>

              {/* Mobile Language Toggle */}
              <div className="px-3 py-2">
                <button
                  onClick={() => toggleLanguage(router.locale === 'en' ? 'fr' : 'en')}
                  className="flex items-center w-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  <span>{router.locale === 'en' ? 'Français' : 'English'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding to the top of the page to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
          <GridPattern className="dark:opacity-10" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0.7, x: "5vw", y: "5vh" }}
              animate={{ 
                x: ["5vw", "90vw", "5vw"],
                y: ["5vh", "90vh", "5vh"]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-24 h-24 border-8 bg-sky-100/30 dark:bg-sky-900/30 border-sky-500/30 rounded-lg"
              style={{ transform: 'rotate(-15deg)' }}
            />
            <motion.div
              initial={{ opacity: 0.5, x: "90vw", y: "90vh" }}
              animate={{ 
                x: ["90vw", "5vw", "90vw"],
                y: ["90vh", "5vh", "90vh"]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-16 h-16 border-8 bg-blue-100/30 dark:bg-blue-900/30 border-blue-500/30 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0.6, x: "50vw", y: "5vh" }}
              animate={{ 
                x: ["50vw", "5vw", "90vw", "50vw"],
                y: ["5vh", "90vh", "5vh", "5vh"]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-20 h-20 border-8 bg-emerald-100/30 dark:bg-emerald-900/30 border-emerald-500/30 rotate-45"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    background: [
                      "linear-gradient(to right, #3b82f6, #06b6d4)",
                      "linear-gradient(to right, #06b6d4, #3b82f6)",
                      "linear-gradient(to right, #3b82f6, #06b6d4)"
                    ]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 rounded-lg filter blur-xl opacity-50"
                />
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 relative">
                  {t('hero.title')}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col items-center space-y-8"
              >
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  {t('hero.subtitle')}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex gap-6"
                >
                  <Link 
                    href="#projects"
                    className="inline-flex items-center px-8 py-3 border-2 border-sky-500 text-sky-600 dark:text-sky-400 font-semibold rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors duration-300"
                  >
                    {t('hero.buttons.work')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/cv"
                    className="inline-flex items-center px-8 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {t('hero.buttons.cv')}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-40 bg-gray-50 dark:bg-gray-900 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src="/images/profile.png"
                  alt="James Pares"
                  className="w-56 h-56 rounded-full shadow-lg border-4 border-white dark:border-gray-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.intro')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 dark:bg-gray-900">
          <div className="max-w-[95vw] mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 px-4">
              {t('sections.projects')}
            </h2>
            
            <Marquee className="py-4" pauseOnHover repeat={2}>
              {projects.map((project) => (
                <Link 
                  href={`/projects/${project.id}`} 
                  key={project.id}
                  className="w-[320px] mx-5 flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full"
                  >
                    <div className="bg-white p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-36 object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {t('sections.skills')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Project Leadership */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-3">
                    📊
                  </span>
                  {t('skills.project.title')}
                </h3>
                <div className="space-y-3">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t(`skills.project.skills.${index}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Digital & Tech */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-3">
                    💻
                  </span>
                  {t('skills.tech.title')}
                </h3>
                <div className="space-y-3">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t(`skills.tech.skills.${index}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Strategy & Research */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-3">
                    🎯
                  </span>
                  {t('skills.strategy.title')}
                </h3>
                <div className="space-y-3">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {t(`skills.strategy.skills.${index}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="py-32 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                {t('sections.cv')}
              </h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-[calc(100%-8rem)] w-0.5 bg-sky-500"></div>

                {/* Experience Items */}
                <div className="space-y-12 mb-24">
                  {/* Roam */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center md:justify-between md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center md:w-5/12 md:odd:justify-start md:even:justify-end">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-sky-500 w-full hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-3">
                            🚀
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {t('cv.roles.roam.title')}
                          </h3>
                        </div>
                        <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">
                          {t('cv.roles.roam.period')}
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          {[0, 1, 2].map((index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                              {t(`cv.roles.roam.achievements.${index}`)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Islington Council */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center md:justify-between group"
                  >
                    <div className="flex items-center md:w-5/12 md:odd:justify-start md:even:justify-end">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-sky-500 w-full hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-3">
                            🏛️
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {t('cv.roles.islington.title')}
                          </h3>
                        </div>
                        <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">
                          {t('cv.roles.islington.period')}
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          {[0, 1, 2].map((index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                              {t(`cv.roles.islington.achievements.${index}`)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Education */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center md:justify-between md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center md:w-5/12 md:odd:justify-start md:even:justify-end">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-sky-500 w-full hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <span className="w-8 h-8 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-3">
                            🎓
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {t('cv.roles.education.title')}
                          </h3>
                        </div>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          {[0, 1, 2].map((index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                              {t(`cv.roles.education.achievements.${index}`)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* View Full CV Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative mt-16 flex justify-center"
                >
                  <Link
                    href="/cv"
                    className="inline-flex items-center px-6 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {t('cv.viewFull')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              {t('sections.contact')}
            </motion.h2>
            <div className="flex justify-center space-x-8">
              {/* Gmail Link */}
              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=james@roamfreely.io"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg p-2"
              >
                <Mail className="w-6 h-6 mr-2" />
                <span>{t('contact.email')}</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a 
                href="https://www.linkedin.com/in/james-p-ba7653207/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg p-2"
              >
                <Link2 className="w-6 h-6 mr-2" />
                <span>{t('contact.linkedin')}</span>
              </motion.a>

              {/* GitHub */}
              <motion.a 
                href="https://github.com/jamespares"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg p-2"
              >
                <Link2 className="w-6 h-6 mr-2" />
                <span>{t('contact.github')}</span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} James Pares. {t('footer.rights')}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioSite;