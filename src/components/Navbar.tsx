import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  FileDown,
  Sun,
  Moon,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenPlaceholder: (type: 'github' | 'linkedin' | 'demo' | 'repo') => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white focus:outline-none"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#9B5CFF] to-[#5B8CFF] flex items-center justify-center text-white font-mono font-extrabold text-base shadow-md shadow-[#9B5CFF]/30 group-hover:scale-105 transition-transform">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-slate-900 dark:text-white group-hover:text-[#9B5CFF] transition-colors">
                HARINI A K
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/60 dark:bg-white/[0.04] p-1.5 rounded-full border border-slate-300/60 dark:border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-slate-900 dark:text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white dark:bg-gradient-to-r dark:from-[#9B5CFF]/30 dark:to-[#5B8CFF]/30 shadow-sm dark:shadow-none border border-slate-200 dark:border-[#9B5CFF]/40 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-white/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-300" />
              ) : (
                <Moon className="h-4 w-4 text-[#5B8CFF]" />
              )}
            </button>

            {/* Resume Download Button */}
            <a
              href={PERSONAL_INFO.resumePath}
              download="Harini_A_K_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-white/[0.06] hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white shadow-sm dark:shadow-none transition-all active:scale-95"
            >
              <FileDown className="h-3.5 w-3.5 text-[#9B5CFF]" />
              <span>Resume</span>
            </a>

            {/* Contact quick button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/25 hover:opacity-95 transition-all active:scale-95"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Actions: Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-300" />
              ) : (
                <Moon className="h-4 w-4 text-[#5B8CFF]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-6 shadow-2xl bg-white/95 dark:bg-[#0B0B0F]/95"
          >
            <div className="flex flex-col space-y-1.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-purple-100/70 text-purple-900 font-bold dark:bg-gradient-to-r dark:from-[#9B5CFF]/20 dark:to-[#5B8CFF]/20 dark:text-white dark:border dark:border-[#9B5CFF]/30'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Harini_A_K_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white border border-slate-200 dark:border-transparent"
                >
                  <FileDown className="h-4 w-4 text-[#9B5CFF]" />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/20"
                >
                  <span>Have an Idea? Let's Connect</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
