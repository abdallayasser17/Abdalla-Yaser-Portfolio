import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Tooltip } from 'react-tooltip';

const Experience = () => {
  const { t } = useTranslation();
  const experienceEntries = t('experience.entries', { returnObjects: true });

  const stats = [
    { value: 25, label: '% faster response' },
    { value: 2, label: 'M+ records' },
    { value: 40, label: '% UX boost' },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('experience.title')}
        </h2>
        <div className="space-y-8">
          {experienceEntries.map((entry, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {entry.role}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{entry.duration}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{entry.company}</p>
              <ul className="list-disc list-inside space-y-2">
                {entry.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-around">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <CountUp end={stat.value} duration={5} suffix={stat.label.startsWith('%') ? '%' : ''} className="text-3xl font-bold text-blue-500 dark:text-cyan-400" />
                    <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Tooltip id="tech-tooltip" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
