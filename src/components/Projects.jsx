import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const projectImages = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
];

const Projects = () => {
  const { t } = useTranslation();
  const projectEntries = t('projects.entries', { returnObjects: true });
  const disclaimer = t('projects.disclaimer');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('projects.title')}
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projectEntries.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer break-inside-avoid"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedProject({ ...project, image: projectImages[index] })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <PhotoProvider>
                <PhotoView src={projectImages[index]}>
                  <img src={projectImages[index]} alt={project.name} className="w-full h-auto object-cover" />
                </PhotoView>
              </PhotoProvider>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.tech}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      {desc}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 dark:text-gray-300 font-bold">
                  Result: <span className="font-normal">{project.result}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setSelectedProject(null)}>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">&times;</button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{selectedProject.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <PhotoProvider>
                  <PhotoView src={selectedProject.image}>
                    <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-auto rounded-lg cursor-pointer" />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedProject.tech}</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {selectedProject.description.map((desc, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">
                      {desc}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 dark:text-gray-300 font-bold">
                  Result: <span className="font-normal">{selectedProject.result}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{disclaimer}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
