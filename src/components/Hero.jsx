import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Canvas from './Canvas';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <Canvas />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 p-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white drop-shadow-lg">
          {t('hero.subtitle')}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300">
          {t('hero.title')}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 mx-auto max-w-2xl text-gray-700 dark:text-gray-400"
        >
          {t('hero.statement')}
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg dark:shadow-cyan-500/50"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52, 211, 235, 0.8)' }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.button')}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
