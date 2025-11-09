import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Education = () => {
  const { t } = useTranslation();
  const educationEntries = t('education.entries', { returnObjects: true });

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('education.title')}
        </h2>
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="border-l-2 border-blue-500 dark:border-cyan-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {educationEntries.map((entry, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              variants={item}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-cyan-500/50 transition-shadow duration-300">
                  <p className="text-gray-500 dark:text-gray-400">{entry.duration}</p>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {entry.institution}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{entry.degree}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {entry.description}
                  </p>
                  {entry.projects && (
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {entry.projects.map((project, i) => (
                        <li key={i}>
                          <strong>{project.name}:</strong> {project.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="z-10 flex items-center bg-blue-500 dark:bg-cyan-400 shadow-xl w-8 h-8 rounded-full animate-pulse">
                <div className="bg-white dark:bg-gray-800 w-4 h-4 rounded-full mx-auto"></div>
              </div>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'text-left pr-8'}`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
