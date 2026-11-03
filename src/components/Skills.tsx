import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Layers,
  Wrench,
  Sparkles,
  Check,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frameworks' | 'tools'>('all');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Terminal className="h-5 w-5 text-[#9B5CFF]" />;
      case 'Frameworks and Libraries':
        return <Layers className="h-5 w-5 text-[#5B8CFF]" />;
      case 'Tools & Environments':
        return <Wrench className="h-5 w-5 text-[#22d3ee]" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#9B5CFF]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === 'languages') return cat.title === 'Programming Languages';
    if (activeTab === 'frameworks') return cat.title === 'Frameworks and Libraries';
    if (activeTab === 'tools') return cat.title === 'Tools & Environments';
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
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            A comprehensive overview of programming languages, libraries, data science frameworks, and developer environments used across academic coursework and software implementations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 dark:bg-white/[0.04] light:bg-slate-100 light:border-slate-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/25'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'languages'
                  ? 'bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/25'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'frameworks'
                  ? 'bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/25'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              Frameworks &amp; ML
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/25'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              Tools &amp; IDEs
            </button>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#12121A]/80 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between dark:bg-[#12121A]/80 light:bg-white light:border-slate-200 light:shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {category.skills.length} core proficiencies
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {category.description}
                </p>

                {/* Skills Grid */}
                <div className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#9B5CFF]/30 transition-all dark:bg-white/[0.02] light:bg-slate-50 light:border-slate-200 light:hover:bg-purple-50/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#9B5CFF] transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 font-semibold">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono">Real-world applied</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Check className="h-3 w-3" /> Active stack
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Banner / Quick Badges */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-[#9B5CFF]/10 via-[#5B8CFF]/10 to-[#22d3ee]/10 p-6 sm:p-8 dark:border-white/10 light:border-slate-200 light:bg-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                Algorithmic &amp; Systems Engineering Focus
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1">
                Combining core Java and Python OOP architectures with real-time reinforcement learning, data structures, and web technologies.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-black/40 text-slate-200 border border-white/10">
                SUMO &amp; TraCI
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-black/40 text-slate-200 border border-white/10">
                PPO &amp; ANN
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-black/40 text-slate-200 border border-white/10">
                OOP &amp; Linked Lists
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-black/40 text-slate-200 border border-white/10">
                React &amp; Node.js
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
