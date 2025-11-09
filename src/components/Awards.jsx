import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Awards = () => {
  const { t } = useTranslation();
  const awardCategories = t('awards.categories', { returnObjects: true });

  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('awards.title')}
        </h2>
        <div className="space-y-12">
          {awardCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center group relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    <p className="text-gray-700 dark:text-gray-300 z-10 relative">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
