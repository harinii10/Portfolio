import React from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Sparkles,
  Users,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  Bot,
  Gamepad2,
  SmilePlus,
  Clock,
} from 'lucide-react';
import {
  HACKATHON_EXPERIENCE,
  TRAINING_DATA,
  EXTRACURRICULAR_DATA,
} from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9B5CFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#5B8CFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Hackathons &amp; Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Experience &amp; Community
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Demonstrated teamwork under high-pressure hackathons, continuous academic enrichment via IIT Madras, and dedicated 2-year civic involvement through NSS.
          </p>
        </div>

        {/* 1. HACKATHON SHOWCASE CARD (Trophy / Achievement Style) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#12121A] via-[#1a1728] to-[#1e1715] p-6 sm:p-9 shadow-2xl overflow-hidden dark:from-[#12121A] dark:via-[#1a1728] dark:to-[#1e1715] light:from-white light:via-amber-50/30 light:to-purple-50/20 light:border-amber-300"
        >
          {/* Decorative ambient gold glow */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-amber-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#9B5CFF]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Trophy & Meta */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 mb-4 shadow-sm">
                <Trophy className="h-4 w-4 text-amber-400" />
                <span>{HACKATHON_EXPERIENCE.achievementBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                {HACKATHON_EXPERIENCE.title}
              </h3>

              <div className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Building className="h-4 w-4 text-[#5B8CFF]" />
                  <span>{HACKATHON_EXPERIENCE.organizer}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-mono text-[#9B5CFF]">
                  <Calendar className="h-4 w-4" />
                  <span>{HACKATHON_EXPERIENCE.formattedDate}</span>
                </span>
              </div>

              {/* Technologies Badges */}
              <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
                {HACKATHON_EXPERIENCE.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.06] text-amber-200 border border-amber-500/30 dark:bg-white/[0.06] light:bg-amber-100/70 light:text-amber-900 light:border-amber-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Feature Pill Highlights */}
              <div className="mt-6 grid grid-cols-3 gap-2 w-full text-center">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Bot className="h-4 w-4 text-[#9B5CFF] mx-auto mb-1" />
                  <span className="text-[10px] text-slate-300 block font-semibold">Conversational AI</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <SmilePlus className="h-4 w-4 text-[#5B8CFF] mx-auto mb-1" />
                  <span className="text-[10px] text-slate-300 block font-semibold">Mood Tracking</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <Gamepad2 className="h-4 w-4 text-emerald-400 mx-auto mb-1" />
                  <span className="text-[10px] text-slate-300 block font-semibold">Interactive Games</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Contributions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 dark:bg-white/[0.03] light:bg-white light:border-slate-200">
                <p className="text-sm sm:text-base text-slate-200 dark:text-slate-200 light:text-slate-700 leading-relaxed">
                  "{HACKATHON_EXPERIENCE.description}"
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Key Hackathon Contributions:
                </h4>
                {HACKATHON_EXPERIENCE.keyContributions.map((contrib, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 light:bg-white light:border-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. TRAINING & CONTINUOUS LEARNING + 3. COMMUNITY SERVICE (NSS) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* IIT Madras BS Degree - Continuous Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#5B8CFF]/30 bg-[#12121A]/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between dark:bg-[#12121A]/80 light:bg-white light:border-slate-200 light:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#5B8CFF]/15 text-[#5B8CFF] border border-[#5B8CFF]/30">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Continuous Academic Training</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  In Progress
                </span>
              </div>

              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                {TRAINING_DATA.title} – {TRAINING_DATA.institution}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#5B8CFF]" />
                  <span>{TRAINING_DATA.duration}</span>
                </span>
                <span>•</span>
                <span>Mode: {TRAINING_DATA.mode}</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {TRAINING_DATA.description}
              </p>

              {/* Note respecting guideline */}
              <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 dark:text-amber-300 light:text-amber-800">
                <span className="font-semibold">Academic Note:</span> {TRAINING_DATA.note}
              </div>

              <div className="mt-5 space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Key Curriculum Focus Areas:
                </span>
                {TRAINING_DATA.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 text-right">
              <span className="text-[11px] font-mono text-slate-400">
                Enrolled: BS in Data Science &amp; Applications
              </span>
            </div>
          </motion.div>

          {/* NSS Community Involvement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-emerald-500/30 bg-[#12121A]/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between dark:bg-[#12121A]/80 light:bg-white light:border-slate-200 light:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <HeartHandshake className="h-3.5 w-3.5" />
                  <span>Civic &amp; Community Involvement</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  2 Years Service
                </span>
              </div>

              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                {EXTRACURRICULAR_DATA.title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{EXTRACURRICULAR_DATA.role}</span>
                </span>
                <span>•</span>
                <span>{EXTRACURRICULAR_DATA.duration}</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                "{EXTRACURRICULAR_DATA.description}"
              </p>

              <div className="mt-5 space-y-2.5">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Community Impact Pillars:
                </span>
                {EXTRACURRICULAR_DATA.impactAreas.map((impact, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 light:bg-slate-50 light:border-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-mono">Leadership &amp; Civic Engagement</span>
              <span className="text-emerald-400">Active Contribution</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
