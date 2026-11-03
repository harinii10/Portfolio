import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Maximize2,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { FEATURED_PROJECTS, type Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenPlaceholder: (type: 'github' | 'linkedin' | 'demo' | 'repo', title?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  onOpenPlaceholder,
}) => {
  // SVG Graphic Illustrations for Projects
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'adaptive-traffic-control':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#0e0e18] via-[#141424] to-[#1c1836] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#9B5CFF]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#5B8CFF]/20 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SUMO &amp; TraCI Connected
              </span>
              <span className="font-mono text-slate-400 text-[11px]">
                RL Agent: PPO
              </span>
            </div>

            {/* Visual simulation representation */}
            <div className="my-auto py-2">
              <div className="flex items-center justify-between gap-3">
                {/* Traffic Node Graphic */}
                <div className="flex-1 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Fog Layer</div>
                  <div className="text-xs font-bold text-white mt-0.5">ANN State Eval</div>
                  <div className="h-1 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] rounded-full mt-1.5" />
                </div>

                <div className="text-[#9B5CFF] font-bold text-lg">⇄</div>

                {/* Reduction Metric */}
                <div className="flex-1 p-2.5 rounded-xl bg-[#9B5CFF]/10 border border-[#9B5CFF]/30 text-center">
                  <div className="text-[10px] text-[#9B5CFF] font-mono uppercase font-semibold">
                    Optimization
                  </div>
                  <div className="text-sm font-extrabold text-emerald-400 mt-0.5">
                    &gt;99% Reduced
                  </div>
                  <div className="text-[9px] text-slate-400">Waiting Time Loss</div>
                </div>
              </div>
            </div>

            {/* Bottom telemetry line */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Dynamic Signal Cycles</span>
              <span className="text-[#5B8CFF]">Real-Time TraCI Telemetry</span>
            </div>
          </div>
        );

      case 'atm-transaction-system':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#0e0e18] via-[#121626] to-[#122035] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#5B8CFF]/20 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#5B8CFF]/15 text-[#5B8CFF] border border-[#5B8CFF]/30 font-mono font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF]" />
                Linked-List Node Engine
              </span>
              <span className="font-mono text-slate-400 text-[11px]">Python 3</span>
            </div>

            {/* Linked-List visualization */}
            <div className="my-auto py-2">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono">
                <div className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-center">
                  <span className="block text-[9px] text-slate-400">Node 0</span>
                  <span className="font-bold text-slate-200">Balance</span>
                </div>
                <span className="text-[#5B8CFF]">→</span>
                <div className="px-2.5 py-1.5 rounded-lg bg-[#5B8CFF]/20 border border-[#5B8CFF]/40 text-center">
                  <span className="block text-[9px] text-[#5B8CFF]">Node 1</span>
                  <span className="font-bold text-white">Withdraw</span>
                </div>
                <span className="text-[#5B8CFF]">→</span>
                <div className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center">
                  <span className="block text-[9px] text-emerald-400">Node 2</span>
                  <span className="font-bold text-white">Deposit</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Dynamic Pointer Chaining</span>
              <span className="text-emerald-400">Boundary Validated</span>
            </div>
          </div>
        );

      case 'banking-systems':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-[#0e0e18] via-[#1a1324] to-[#251533] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#9B5CFF]/20 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/30 font-mono font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B5CFF]" />
                Modular OOP Architecture
              </span>
              <span className="font-mono text-slate-400 text-[11px]">Java Core</span>
            </div>

            {/* Architecture Schema */}
            <div className="my-auto py-2">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-slate-400 font-mono">Layer 1</div>
                  <div className="font-bold text-white mt-0.5">Account OOP</div>
                </div>
                <div className="p-2 rounded-lg bg-[#9B5CFF]/15 border border-[#9B5CFF]/30">
                  <div className="text-[10px] text-[#9B5CFF] font-mono">Layer 2</div>
                  <div className="font-bold text-white mt-0.5">Tx Engine</div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-slate-400 font-mono">Layer 3</div>
                  <div className="font-bold text-white mt-0.5">Ledger DS</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
              <span>Algorithmic Runtime Efficiency</span>
              <span className="text-[#9B5CFF]">Encapsulated Logic</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#9B5CFF]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600">
            Practical applications spanning Reinforcement Learning, distributed simulation with SUMO/TraCI, dynamic data structure engineering, and modular Java OOP systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              className="group relative rounded-3xl border border-white/10 bg-[#12121A]/85 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-[#9B5CFF]/50 transition-all duration-300 hover:-translate-y-1.5 dark:bg-[#12121A]/85 light:bg-white light:border-slate-200 light:shadow-md"
            >
              <div>
                {/* Visual Graphic Thumbnail */}
                <div className="mb-5">
                  {renderProjectVisual(project.id)}
                </div>

                {/* Project Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20">
                    {project.type}
                  </span>
                  {project.highlightMetric && (
                    <span className="text-[11px] font-semibold text-emerald-400">
                      {project.highlightMetric}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-[#9B5CFF] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Contributions & Features Snippet */}
                <div className="mt-4 space-y-1.5">
                  {project.keyContributions.slice(0, 2).map((contrib, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF] mt-1 shrink-0" />
                      <span className="line-clamp-2">{contrib}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/5 dark:bg-white/[0.04] dark:text-slate-300 light:bg-slate-100 light:text-slate-700 light:border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-md shadow-[#9B5CFF]/20 hover:opacity-95 transition-all"
                >
                  <Maximize2 className="h-4 w-4" />
                  <span>View Project Details</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenPlaceholder('repo', project.title)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/10 hover:bg-white/5 text-xs text-slate-300 hover:text-white transition-colors dark:text-slate-300 light:text-slate-700 light:border-slate-300"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </button>

                  <button
                    onClick={() => onOpenPlaceholder('demo', project.title)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/10 hover:bg-white/5 text-xs text-slate-300 hover:text-white transition-colors dark:text-slate-300 light:text-slate-700 light:border-slate-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Inquiry Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
            Interested in code walkthroughs or simulator demonstrations?{' '}
            <a
              href="#contact"
              className="text-[#9B5CFF] hover:underline font-semibold"
            >
              Let's schedule a discussion &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
