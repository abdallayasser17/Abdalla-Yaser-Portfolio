import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="bg-white dark:bg-black">
        <ProgressBar />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Leadership />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
