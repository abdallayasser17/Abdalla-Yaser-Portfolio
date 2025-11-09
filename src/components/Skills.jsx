import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true }) || [];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('skills.title')}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, idx) => {
            const items = typeof cat.skills === 'string'
              ? cat.skills.split(',').map(s => s.trim()).filter(Boolean)
              : Array.isArray(cat.skills)
                ? cat.skills
                : [];

            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-cyan-400/15 via-transparent to-blue-500/15" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    {cat.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gray-100 to-white dark:from-white/10 dark:to-white/5 border border-gray-200/70 dark:border-white/10 shadow-sm group-hover:shadow-md transition-colors hover:bg-white dark:hover:bg-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
