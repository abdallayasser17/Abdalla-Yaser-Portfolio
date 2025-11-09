import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-500 to-cyan-400 origin-top"
      style={{ scaleY: scrollProgress }}
    />
  );
};

export default ProgressBar;
