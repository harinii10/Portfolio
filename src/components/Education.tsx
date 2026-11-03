import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#9B5CFF]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Education
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Rigorous undergraduate training at Amrita Vishwa Vidyapeetham, establishing a strong foundation in computer engineering principles.
          </p>
        </div>

        {/* Education Timeline Showcase */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-gradient-to-b border-[#9B5CFF]/40 space-y-12">
            
            {/* Degree Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 h-6 w-6 rounded-full bg-[#12121A] border-2 border-[#9B5CFF] flex items-center justify-center shadow-md shadow-[#9B5CFF]/50">
                <div className="h-2 w-2 rounded-full bg-[#9B5CFF] animate-ping" />
              </div>

              {/* Main Education Box */}
              <div className="rounded-3xl border border-white/10 bg-[#12121A]/85 p-6 sm:p-8 backdrop-blur-xl shadow-xl dark:bg-[#12121A]/85 light:bg-white light:border-slate-200 light:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#9B5CFF] uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-0.5">
                      {EDUCATION_DATA.institution}
                    </h3>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-semibold text-slate-300 w-fit">
                    <Calendar className="h-3.5 w-3.5 text-[#5B8CFF]" />
                    <span>{EDUCATION_DATA.duration}</span>
                  </div>
                </div>

                {/* Degree & Department Details */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 dark:bg-white/[0.02] light:bg-slate-50 light:border-slate-200">
                    <div className="text-xs text-slate-400">Degree &amp; Specialization</div>
                    <div className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 mt-1">
                      {EDUCATION_DATA.degree}
                    </div>
                    <div className="text-xs text-[#5B8CFF] font-medium mt-0.5">
                      {EDUCATION_DATA.department}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#9B5CFF]/10 border border-[#9B5CFF]/25 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#9B5CFF] font-semibold">
                        Cumulative Performance
                      </div>
                      <div className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900 mt-0.5">
                        CGPA: {EDUCATION_DATA.cgpa}
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-[#9B5CFF]/20 flex items-center justify-center text-[#9B5CFF]">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Campus Location & Status */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-rose-400" />
                    <span>{EDUCATION_DATA.location}</span>
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">
                    ● {EDUCATION_DATA.status}
                  </span>
                </div>

                {/* Curriculum & Key Pillars */}
                <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <BookOpen className="h-4 w-4 text-[#9B5CFF]" />
                    <span>Academic Curriculum &amp; Foundations</span>
                  </div>
                  {EDUCATION_DATA.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 pl-1"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-[#5B8CFF] shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
