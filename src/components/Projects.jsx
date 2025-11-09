import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const Projects = () => {
  const { t } = useTranslation();
  const projectEntries = t('projects.entries', { returnObjects: true });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('projects.title')}
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectEntries.map((project, index) => (
            <SwiperSlide key={index} style={{ width: '350px', height: '450px' }}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full flex flex-col justify-between group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.tech}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {project.description.map((desc, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-bold z-10">
                  Result: <span className="font-normal">{project.result}</span>
                </p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <iframe className="w-full h-full" src="about:blank" title={project.name}></iframe>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
