import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Mail,
  Sparkles,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenPlaceholder: (type: 'github' | 'linkedin' | 'demo' | 'repo') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlaceholder }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9B5CFF]/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-[#5B8CFF]/12 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[320px] h-[320px] bg-[#22d3ee]/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(155, 92, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Main Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering &amp; Full-Stack Opportunities</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              <span className="block font-sans">Hi, I'm</span>
              <span className="text-gradient font-black tracking-tight mt-1 inline-block">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Tagline */}
            <div className="mt-4 text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[#9B5CFF]">✦</span>
              <span>{PERSONAL_INFO.tagline}</span>
            </div>

            {/* Dynamic Role Switcher */}
            <div className="mt-3 h-8 flex items-center justify-center lg:justify-start">
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mr-2 font-mono">
                specializing in:
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-mono text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-white/[0.04] border border-purple-200 dark:border-white/10"
                >
                  {PERSONAL_INFO.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Supporting Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-lg shadow-[#9B5CFF]/25 hover:shadow-xl hover:shadow-[#9B5CFF]/35 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              {/* Download Resume */}
              <a
                href={PERSONAL_INFO.resumePath}
                download="Harini_A_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 shadow-sm dark:shadow-none transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FileDown className="h-4 w-4 text-[#9B5CFF]" />
                <span>Download Resume</span>
              </a>

              {/* Email Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-white/[0.03] hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-300 transition-all active:scale-[0.98]"
              >
                <Mail className="h-4 w-4 text-[#5B8CFF]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Recruiter Quick Info */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Connect &amp; Profiles:
              </span>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm dark:shadow-none transition-colors"
                title="View Harini's GitHub Profile"
              >
                <GithubIcon className="h-3.5 w-3.5 text-[#9B5CFF]" />
                <span>GitHub</span>
              </a>

              <button
                onClick={() => onOpenPlaceholder('linkedin')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm dark:shadow-none transition-colors"
                title="View LinkedIn (Placeholder Notice)"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#5B8CFF]" />
                <span>LinkedIn</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white shadow-sm dark:shadow-none transition-colors"
                title="Send direct email"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right / Visual Profile Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#9B5CFF] via-[#5B8CFF] to-[#22d3ee] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 -z-10 animate-glow" />

              {/* Main Card */}
              <div className="relative rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/95 dark:bg-[#12121A]/90 p-6 sm:p-7 backdrop-blur-xl shadow-xl dark:shadow-2xl">
                {/* Card Top Pill */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    harini@engineer:~$
                  </span>
                </div>

                {/* Profile Visual Graphic */}
                <div className="my-6 flex flex-col items-center">
                  <div className="relative group">
                    <div className="h-36 w-36 sm:h-40 sm:w-40 rounded-2xl bg-gradient-to-tr from-slate-100 via-purple-50 to-indigo-100 dark:from-[#0B0B0F] dark:via-[#161622] dark:to-[#1e1b4b] border-2 border-slate-300 dark:border-white/20 p-2 shadow-md dark:shadow-2xl flex items-center justify-center overflow-hidden">
                      {/* Stylized Avatar Monogram */}
                      <div className="h-full w-full rounded-xl bg-gradient-to-br from-[#9B5CFF]/15 via-[#5B8CFF]/15 to-transparent flex flex-col items-center justify-center relative">
                        <span className="text-4xl sm:text-5xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF]">
                          HAK
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                          Engineer
                        </span>
                      </div>
                    </div>

                    {/* Badge 1: Amrita */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-3 -right-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0B0B0F]/95 px-3 py-1.5 shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200"
                    >
                      <Sparkles className="h-3 w-3 text-[#9B5CFF]" />
                      <span>Amrita Univ.</span>
                    </motion.div>

                    {/* Badge 2: Elected Class Rep */}
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute -bottom-3 -left-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0B0B0F]/95 px-3 py-1.5 shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200"
                    >
                      <ShieldCheck className="h-3 w-3 text-[#5B8CFF]" />
                      <span>Class Rep (3rd Yr)</span>
                    </motion.div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                    Harini A K
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    B.Tech CSE (2023 – 2027) | CGPA: 6.51 | Coimbatore
                  </p>
                </div>

                {/* Quick Academic & Project Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 dark:border-white/10 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <span className="block text-base font-extrabold text-[#9B5CFF]">4</span>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400">Key Projects</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <span className="block text-base font-extrabold text-[#5B8CFF]">2</span>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400">Live Vercel Apps</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <span className="block text-base font-extrabold text-emerald-600 dark:text-emerald-400">&gt;99%</span>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400">RL Wait Cut</span>
                  </div>
                </div>

                {/* Card footer status */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-2 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3 w-3 text-[#9B5CFF]" />
                    <span>Java • Python • React • FastAPI</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Open to Connect</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
