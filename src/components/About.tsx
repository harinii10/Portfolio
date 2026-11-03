import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Sparkles,
  CheckCircle,
  MapPin,
  Calendar,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="h-6 w-6 text-[#9B5CFF]" />;
      case 'Code2':
        return <Code2 className="h-6 w-6 text-[#5B8CFF]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="h-6 w-6 text-[#22d3ee]" />;
      default:
        return <Sparkles className="h-6 w-6 text-[#9B5CFF]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9B5CFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#5B8CFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Background &amp; Ambitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
        </div>

        {/* Narrative & Academic Highlights Box */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-white dark:text-white light:text-slate-900">
                {PERSONAL_INFO.aboutContent[0]}
              </p>
              <p>
                {PERSONAL_INFO.aboutContent[1]}
              </p>
              <p>
                {PERSONAL_INFO.aboutContent[2]}
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center dark:bg-white/[0.02] light:bg-slate-50 light:border-slate-200">
                <MapPin className="h-4 w-4 text-[#9B5CFF] mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-white dark:text-white light:text-slate-900">
                  Location
                </span>
                <span className="text-[11px] text-slate-400">Coimbatore, India</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center dark:bg-white/[0.02] light:bg-slate-50 light:border-slate-200">
                <Calendar className="h-4 w-4 text-[#5B8CFF] mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-white dark:text-white light:text-slate-900">
                  Graduation
                </span>
                <span className="text-[11px] text-slate-400">Class of 2027</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center dark:bg-white/[0.02] light:bg-slate-50 light:border-slate-200">
                <Award className="h-4 w-4 text-emerald-400 mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-white dark:text-white light:text-slate-900">
                  Academics
                </span>
                <span className="text-[11px] text-slate-400">CGPA: 6.52 (B.Tech CSE)</span>
              </div>
            </div>
          </motion.div>

          {/* Core Philosophy & Professional Intro Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#12121A] to-[#161622] p-6 sm:p-7 shadow-xl dark:from-[#12121A] dark:to-[#161622] light:from-white light:to-slate-50 light:border-slate-200">
              <span className="text-xs uppercase tracking-wider font-mono font-semibold text-[#9B5CFF] block mb-2">
                Career Objective
              </span>
              <blockquote className="text-base sm:text-lg italic font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed border-l-2 border-[#9B5CFF] pl-4">
                "{PERSONAL_INFO.professionalIntro}"
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <CheckCircle className="h-3.5 w-3.5 text-[#5B8CFF]" />
                  <span>Curious problem solver with algorithmic mindset</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <CheckCircle className="h-3.5 w-3.5 text-[#9B5CFF]" />
                  <span>Enrolled in IIT Madras BS Degree in Data Science</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Proven team collaborator in national level hackathons</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Highlight Cards (Computer Science Engineering, Software Development, AI & Data Science) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 text-center mb-8">
            Core Pillars of Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-white/10 bg-[#12121A]/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9B5CFF]/40 dark:bg-[#12121A]/70 light:bg-white light:border-slate-200 light:shadow-sm"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 dark:text-slate-300 light:text-slate-600">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#9B5CFF] transition-colors">
                  {item.title}
                </h4>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-1.5">
                  {item.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600"
                    >
                      <div className="h-1 w-1 rounded-full bg-[#5B8CFF]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
