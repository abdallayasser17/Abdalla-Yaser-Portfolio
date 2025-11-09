import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Experience = () => {
  const { t } = useTranslation();
  const experienceEntries = t('experience.entries', { returnObjects: true });

  const chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81],
        fill: false,
        borderColor: 'rgba(52, 211, 238, 0.8)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('experience.title')}
        </h2>
        <div className="space-y-8">
          {experienceEntries.map((entry, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-3/4">
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
              </div>
              <div className="md:w-1/4 mt-6 md:mt-0 md:pl-6">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Key Metrics
                </h4>
                <div className="h-32">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
