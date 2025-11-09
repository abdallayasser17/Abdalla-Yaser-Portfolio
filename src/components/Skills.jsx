import React from 'react';
import { useTranslation } from 'react-i18next';
import SkillOrbs from './SkillOrbs';

const Skills = () => {
  const { t } = useTranslation();
  const skills = t('skills.categories', { returnObjects: true });

  return (
    <section id="skills" className="py-20 h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          {t('skills.title')}
        </h2>
        <div className="w-full h-full">
          <SkillOrbs skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
