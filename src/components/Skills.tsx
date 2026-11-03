import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Globe,
  Server,
  Database,
  Wrench,
  Sparkles,
  Check,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Terminal className="h-5 w-5 text-[#9B5CFF]" />;
      case 'Frontend':
      case 'Frontend Development':
        return <Globe className="h-5 w-5 text-[#5B8CFF]" />;
      case 'Backend':
      case 'Backend & APIs':
        return <Server className="h-5 w-5 text-[#22d3ee]" />;
      case 'Databases':
        return <Database className="h-5 w-5 text-emerald-500" />;
      case 'Tools':
      case 'Tools & Workflow':
        return <Wrench className="h-5 w-5 text-amber-500" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#9B5CFF]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === 'languages') return cat.title === 'Programming Languages';
    if (activeTab === 'frontend') return cat.title.startsWith('Frontend');
    if (activeTab === 'backend') return cat.title.startsWith('Backend');
    if (activeTab === 'databases') return cat.title === 'Databases';
    if (activeTab === 'tools') return cat.title.startsWith('Tools');
    return true;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#9B5CFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5B8CFF]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Organized across languages, client frontend libraries, high-performance backend microservices, relational databases, and version control tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex justify-center overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/60 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Skills' },
              { id: 'languages', label: 'Languages' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'databases', label: 'Databases' },
              { id: 'tools', label: 'Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/25'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A]/80 p-6 backdrop-blur-xl flex flex-col justify-between shadow-sm dark:shadow-none hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      {category.skills.length} core proficiencies
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-2xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-purple-50/50 dark:hover:bg-white/[0.06] hover:border-[#9B5CFF]/30 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#9B5CFF] transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 font-semibold">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-mono">Applied in production</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <Check className="h-3 w-3" /> Active stack
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Banner / Quick Badges */}
        <div className="mt-14 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-gradient-to-r dark:from-[#9B5CFF]/10 dark:via-[#5B8CFF]/10 dark:to-[#22d3ee]/10 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Full-Stack &amp; AI Engineering Competency
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                From responsive client interfaces with React/Next.js to asynchronous FastAPI and Celery backends with PostgreSQL.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-white dark:bg-black/40 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 shadow-sm">
                Next.js &amp; React
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-white dark:bg-black/40 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 shadow-sm">
                FastAPI &amp; Express
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-white dark:bg-black/40 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 shadow-sm">
                PostgreSQL &amp; Supabase
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-white dark:bg-black/40 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 shadow-sm">
                Celery &amp; Redis
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
