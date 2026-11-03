import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Mail,
  Zap,
  Calendar,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/portfolioData';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenPlaceholder: (type: 'github' | 'linkedin' | 'demo' | 'repo', title?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenPlaceholder,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] text-slate-900 dark:text-slate-100 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#12121A]/95 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 dark:bg-[#9B5CFF]/15 px-3 py-1 text-xs font-semibold text-[#9B5CFF] border border-purple-200 dark:border-[#9B5CFF]/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  {project.type}
                </span>
                {project.highlightMetric && (
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/25">
                    <Zap className="h-3 w-3" />
                    {project.highlightMetric}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-base text-[#5B8CFF] font-medium">
                  {project.subtitle}
                </p>
                {project.date && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Timeline: {project.date}</span>
                  </p>
                )}
                <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Architecture Overview */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#9B5CFF] mb-2">
                  <Layers className="h-4 w-4" />
                  <span>Technical &amp; Architectural Overview</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Key Contributions */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#5B8CFF]" />
                  <span>Key Engineering Contributions</span>
                </h3>
                <div className="space-y-2.5">
                  {project.keyContributions.map((contrib, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] p-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#9B5CFF] shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  Key System Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] px-3 py-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                  Technology Stack &amp; Tooling
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.map((tech, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <span className="font-semibold">{tech.name}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">({tech.category})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions & Placeholders */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenPlaceholder('repo', project.title)}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Request Source Code</span>
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Open Live Web Application</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenPlaceholder('demo', project.title)}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Interactive Walkthrough</span>
                  </button>
                )}

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry on Project: ${project.title}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#9B5CFF]/25 hover:opacity-95 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Discuss Project</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
