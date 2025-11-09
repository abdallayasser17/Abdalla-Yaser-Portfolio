import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xnqkrqeq");
  const [showParticles, setShowParticles] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 5000);
    }
  };

  if (state.succeeded && !showParticles) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-green-500">{t('contact.successMessage')}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">🚀</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 relative">
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 160, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 1, random: true, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } },
              size: { value: 3, random: true, anim: { enable: false, speed: 4, size_min: 0.3, sync: false } },
              line_linked: { enable: false },
              move: {
                enable: true,
                speed: 1,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
            retina_detect: true,
          }}
        />
      )}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('contact.title')}
        </h2>
        <motion.form
          onSubmit={handleFormSubmit}
          className="max-w-lg mx-auto bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 relative">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.form.name')}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:focus:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.form.email')}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:focus:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:focus:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <motion.button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 relative overflow-hidden shadow-lg dark:shadow-cyan-500/50"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52, 211, 235, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            {t('contact.form.submit')}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
