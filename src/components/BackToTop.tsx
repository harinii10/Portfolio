import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#12121A]/90 text-slate-800 dark:text-white shadow-lg dark:shadow-xl backdrop-blur-md transition-all hover:border-[#9B5CFF]/60 hover:scale-105 active:scale-95"
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 p-1">
            <circle
              cx="20"
              cy="20"
              r="17"
              className="text-slate-200 dark:text-white/10 stroke-current"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="20"
              cy="20"
              r="17"
              className="text-[#9B5CFF] stroke-current transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={106.8}
              strokeDashoffset={106.8 - (106.8 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <ArrowUp className="h-5 w-5 text-slate-700 dark:text-slate-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
