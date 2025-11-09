import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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
                  <Tilt
                    key={i}
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center h-full">
                      <p className="text-gray-700 dark:text-gray-300 z-10 relative">
                        {item}
                      </p>
                    </div>
                  </Tilt>
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
