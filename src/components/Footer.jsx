import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 dark:bg-black text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Abdalla Yaser. All rights reserved.</p>
        <p className="text-sm text-gray-400">{t('footer.lastUpdated')}</p>
        <motion.button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none shadow-lg dark:shadow-cyan-500/50"
          aria-label="Back to top"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
