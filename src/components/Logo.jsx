import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.g
          whileHover={{ scale: 1.1 }}
          style={{ filter: 'url(#glow)' }}
        >
          {/* A */}
          <path d="M10 35 L20 5 L30 35" strokeWidth="4" stroke="url(#gradient)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M15 25 L25 25" strokeWidth="4" stroke="url(#gradient)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Y */}
          <path d="M35 5 L45 20 L55 5" strokeWidth="4" stroke="url(#gradient)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M45 20 L45 35" strokeWidth="4" stroke="url(#gradient)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(34, 211, 238)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Logo;
