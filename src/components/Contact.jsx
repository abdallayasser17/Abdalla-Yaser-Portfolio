import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {t('contact.title')}
        </h2>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="max-w-lg mx-auto bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="mb-4 relative">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <Field
                  type="text"
                  name="name"
                  className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-shadow ${
                    touched.name && errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500 dark:focus:ring-cyan-400'
                  }`}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <Field
                  type="email"
                  name="email"
                  className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-shadow ${
                    touched.email && errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500 dark:focus:ring-cyan-400'
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-shadow ${
                    touched.message && errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:ring-blue-500 dark:focus:ring-cyan-400'
                  }`}
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 relative overflow-hidden shadow-lg dark:shadow-cyan-500/50"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52, 211, 235, 0.8)' }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contact.form.submit')}
              </motion.button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
