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
  // SVG Graphic Illustrations for the 4 featured projects
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'adaptive-traffic-control':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100/50 dark:from-[#0e0e18] dark:via-[#141424] dark:to-[#1c1836] border border-slate-200 dark:border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#9B5CFF]/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 font-mono font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                SUMO &amp; TraCI Evaluated
              </span>
              <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">Python • PPO • ANN</span>
            </div>
            <div className="my-auto py-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-center shadow-xs">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">Fog Controller</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white mt-0.5">ANN State Eval</div>
                  <div className="h-1 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] rounded-full mt-1.5" />
                </div>
                <div className="text-[#9B5CFF] font-bold text-base">⇄</div>
                <div className="flex-1 p-2.5 rounded-xl bg-purple-100/70 dark:bg-[#9B5CFF]/15 border border-purple-200 dark:border-[#9B5CFF]/30 text-center shadow-xs">
                  <div className="text-[10px] text-purple-700 dark:text-[#9B5CFF] font-mono uppercase font-semibold">Optimization</div>
                  <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">&gt;99% Reduced</div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-400">Waiting Time Loss</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5">
              <span>Dynamic Signal Cycles</span>
              <span className="text-[#5B8CFF]">Real-Time TraCI Telemetry</span>
            </div>
          </div>
        );

      case 'crop-disease-diagnosis':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100/50 dark:from-[#0e0e18] dark:via-[#141d1a] dark:to-[#17261d] border border-slate-200 dark:border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 font-mono font-semibold">
                ~96% Accuracy
              </span>
              <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">FastAPI • PyTorch</span>
            </div>
            <div className="my-auto py-2">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-xs">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">Inference API</div>
                  <div className="font-bold text-slate-800 dark:text-white">FastAPI</div>
                </div>
                <div className="p-1.5 rounded-lg bg-emerald-100/70 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 shadow-xs">
                  <div className="text-[9px] text-emerald-800 dark:text-emerald-300 font-mono">Async Queue</div>
                  <div className="font-bold text-emerald-950 dark:text-white">Celery/Redis</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-xs">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">Database</div>
                  <div className="font-bold text-slate-800 dark:text-white">PostgreSQL</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5">
              <span>Async Task Offloading</span>
              <span className="text-emerald-600 dark:text-emerald-400">Severity Metric</span>
            </div>
          </div>
        );

      case 'golf-charity-subscription':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-[#0e0e18] dark:via-[#111f1e] dark:to-[#122822] border border-slate-200 dark:border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-teal-500/15 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 font-mono font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live on Vercel
              </span>
              <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">Next.js + Supabase</span>
            </div>
            <div className="my-auto py-2">
              <div className="flex items-center justify-around gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-xs">
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">5-Table Schema</div>
                  <div className="font-bold text-slate-800 dark:text-white">PostgreSQL</div>
                </div>
                <div className="text-teal-600 font-bold text-base">⇄</div>
                <div className="p-2 rounded-lg bg-teal-100/70 dark:bg-teal-500/20 border border-teal-300 dark:border-teal-500/30 shadow-xs">
                  <div className="text-[9px] text-teal-800 dark:text-teal-300 font-mono">Monthly Draw</div>
                  <div className="font-bold text-teal-950 dark:text-white">Charity Pool</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5">
              <span>Admin Panel &amp; Auth</span>
              <span className="text-teal-600 dark:text-emerald-400">Route Protection</span>
            </div>
          </div>
        );

      case 'project-tracker':
        return (
          <div className="relative w-full h-48 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-[#0e0e18] dark:via-[#121626] dark:to-[#122035] border border-slate-200 dark:border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#5B8CFF]/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 font-mono font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live on Vercel
              </span>
              <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">Lighthouse 85+</span>
            </div>
            <div className="my-auto py-2">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-xs">
                  <span className="block text-[9px] text-slate-500 dark:text-slate-400 font-mono">Custom D&amp;D</span>
                  <span className="font-bold text-slate-800 dark:text-white">Kanban</span>
                </div>
                <div className="p-2 rounded-lg bg-blue-100/60 dark:bg-[#5B8CFF]/20 border border-blue-200 dark:border-[#5B8CFF]/30 shadow-xs">
                  <span className="block text-[9px] text-blue-700 dark:text-[#5B8CFF] font-mono">500+ Tasks</span>
                  <span className="font-bold text-blue-950 dark:text-white">Virtual Scroll</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 shadow-xs">
                  <span className="block text-[9px] text-slate-500 dark:text-slate-400 font-mono">Schedule</span>
                  <span className="font-bold text-slate-800 dark:text-white">Gantt View</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/5">
              <span>Native Pointer Events</span>
              <span className="text-[#5B8CFF]">Mock WebSocket Synced</span>
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
            <span>Featured Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From reinforcement learning traffic simulations and asynchronous FastAPI/PyTorch diagnostics to production full-stack web applications live on Vercel.
          </p>
        </div>

        {/* Projects Grid: 2x2 layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A]/85 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between shadow-sm hover:shadow-xl dark:shadow-none hover:border-[#9B5CFF]/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Graphic Thumbnail */}
                <div className="mb-5">
                  {renderProjectVisual(project.id)}
                </div>

                {/* Project Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-[#9B5CFF]/15 text-[#9B5CFF] border border-purple-200 dark:border-[#9B5CFF]/20">
                    {project.type}
                  </span>
                  {project.highlightMetric && (
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      {project.highlightMetric}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#9B5CFF] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#5B8CFF] font-medium">
                  {project.subtitle}
                </p>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Contributions & Features Snippet */}
                <div className="mt-4 space-y-1.5">
                  {project.keyContributions.slice(0, 2).map((contrib, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
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
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
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
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-xs text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-emerald-300 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-xs font-semibold text-emerald-800 dark:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenPlaceholder('demo', project.title)}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-xs text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Demo Overview</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Inquiry Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Interested in architecture breakdowns or live code demonstrations?{' '}
            <a
              href="#contact"
              className="text-[#9B5CFF] hover:underline font-semibold"
            >
              Let's connect &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
