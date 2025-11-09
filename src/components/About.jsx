import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import idImg from '../../img/id.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative pt-12 pb-20 -mt-8 md:-mt-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          {t('about.title')}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div
            className="md:w-1/3 relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={idImg}
              alt="Abdalla Yaser"
              className="rounded-lg shadow-lg mx-auto w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">{t('about.funFacts.0')}</p>
            </div>
          </motion.div>
          <motion.div
            className="md:w-2/3 md:pl-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('hero.statement')}
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>{t('about.personalInfo.name')}:</strong> Abdalla Yaser</li>
                <li><strong>{t('about.personalInfo.nationality')}:</strong> {t('about.personalInfo.nationality')}</li>
                <li><strong>{t('about.personalInfo.dob')}:</strong> {t('about.personalInfo.dob')}</li>
                <li><strong>{t('about.personalInfo.address')}:</strong> {t('about.personalInfo.address')}</li>
                <li><strong>{t('about.personalInfo.email')}:</strong> <a href={`mailto:${t('about.personalInfo.email')}`} className="hover:text-blue-500 dark:hover:text-cyan-400">{t('about.personalInfo.email')}</a></li>
                <li><strong>{t('about.personalInfo.phone')}:</strong> <a href={`tel:${t('about.personalInfo.phone')}`} className="hover:text-blue-500 dark:hover:text-cyan-400">{t('about.personalInfo.phone')}</a></li>
                <li><strong>LinkedIn:</strong> <a href={t('about.personalInfo.linkedin')} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-cyan-400">{t('about.personalInfo.linkedin')}</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
