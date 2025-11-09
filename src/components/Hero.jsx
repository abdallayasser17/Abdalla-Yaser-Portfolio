import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Canvas from './Canvas';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
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
        <motion.a
          href="#projects"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg dark:shadow-cyan-500/50"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52, 211, 235, 0.8)' }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.button')}
        </motion.a>
      </motion.div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0">
        <svg className="w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-gray-50 dark:fill-gray-900" d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,112C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
