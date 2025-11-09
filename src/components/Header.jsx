import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.home')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.about')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.skills')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#education" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.education')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#experience" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.experience')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.projects')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#leadership" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.leadership')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#awards" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.awards')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-cyan-400 relative group">
            {t('header.nav.contact')}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={handleThemeSwitch} className="focus:outline-none">
            {theme === 'dark' ? <FaSun className="w-6 h-6 text-yellow-400 hover:text-yellow-300" /> : <FaMoon className="w-6 h-6 text-gray-800 hover:text-gray-600" />}
          </button>
          <div className="flex space-x-2">
            <button onClick={() => handleLanguageChange('en')} className={`px-2 py-1 text-sm rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>EN</button>
            <button onClick={() => handleLanguageChange('de')} className={`px-2 py-1 text-sm rounded ${i18n.language === 'de' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>DE</button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
