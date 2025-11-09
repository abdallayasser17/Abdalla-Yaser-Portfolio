import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const NeuralNetworkCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;

    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00ffff,
    });

    const particleMesh = new THREE.Points(particles, material);
    scene.add(particleMesh);

    camera.position.z = 1.5;

    const animate = () => {
      requestAnimationFrame(animate);
      particleMesh.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />;
};


const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <NeuralNetworkCanvas />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 p-4"
      >
        <motion.img
          src="https://media.licdn.com/dms/image/D4E03AQGg-VYX4WJ3Lw/profile-displayphoto-shrink_800_800/0/1715433054113?e=1728518400&v=beta&t=GvVf-3a2-21-1s5-345-42-21-1s5-345-42-21-1s5-34"
          alt="Abdalla Yaser"
          className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white drop-shadow-lg">
          {t('hero.subtitle')}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300">
          {t('hero.title')}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 mx-auto max-w-2xl text-gray-700 dark:text-gray-400"
        >
          {t('hero.statement')}
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg dark:shadow-cyan-500/50"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52, 211, 235, 0.8)' }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.button')}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
