import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
import Confetti from 'react-confetti';

const Education = () => {
  const { t } = useTranslation();
  const educationEntries = t('education.entries', { returnObjects: true });
  const [flipped, setFlipped] = useState(Array(educationEntries.length).fill(false));
  const [showConfetti, setShowConfetti] = useState(false);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      {showConfetti && <Confetti />}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('education.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationEntries.map((entry, index) => (
            <ReactCardFlip isFlipped={flipped[index]} flipDirection="horizontal">
              <motion.div
                key="front"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-96 flex flex-col justify-center items-center text-center cursor-pointer"
                onClick={() => handleFlip(index)}
                onMouseEnter={() => entry.degree.includes('Top 100') && setShowConfetti(true)}
                onMouseLeave={() => setShowConfetti(false)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {entry.institution}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{entry.degree}</p>
              </motion.div>

              <motion.div
                key="back"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-96 flex flex-col justify-center cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <p className="text-gray-500 dark:text-gray-400">{entry.duration}</p>
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
              </motion.div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
