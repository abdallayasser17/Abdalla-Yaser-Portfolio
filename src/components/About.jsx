import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('about.title')}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.div
            className="md:w-1/3 relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="https://media.licdn.com/dms/image/D4E03AQGg-VYX4WJ3Lw/profile-displayphoto-shrink_800_800/0/1715433054113?e=1728518400&v=beta&t=GvVf-3a2-21-1s5-345-42-21-1s5-345-42-21-1s5-34"
              alt="Abdalla Yaser"
              className="rounded-lg shadow-lg mx-auto w-full h-auto relative"
            />
          </motion.div>
          <motion.div
            className="md:w-2/3 md:pl-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p variants={item} className="text-lg text-gray-700 dark:text-gray-300">
              {t('hero.statement')}
            </motion.p>
            <motion.div variants={item} className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Name:</strong> {t('about.personalInfo.name')}</li>
                <li><strong>Nationality:</strong> {t('about.personalInfo.nationality')}</li>
                <li><strong>Date of Birth:</strong> {t('about.personalInfo.dob')}</li>
                <li><strong>Address:</strong> {t('about.personalInfo.address')}</li>
                <li><strong>Email:</strong> <a href={`mailto:${t('about.personalInfo.email')}`} className="hover:text-blue-500 dark:hover:text-cyan-400">{t('about.personalInfo.email')}</a></li>
                <li><strong>Phone:</strong> <a href={`tel:${t('about.personalInfo.phone')}`} className="hover:text-blue-500 dark:hover:text-cyan-400">{t('about.personalInfo.phone')}</a></li>
                <li><strong>LinkedIn:</strong> <a href={t('about.personalInfo.linkedin')} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-cyan-400">{t('about.personalInfo.linkedin')}</a></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
