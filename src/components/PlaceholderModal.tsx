import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, FileDown, ExternalLink, Sparkles, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'github' | 'linkedin' | 'demo' | 'repo';
  title?: string;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
}) => {
  const [copied, setCopied] = React.useState(false);

  const getDetails = () => {
    switch (type) {
      case 'github':
        return {
          header: 'GitHub Profile',
          badge: 'Repository Notice',
          message:
            "Harini's GitHub profile is currently being organized with clean documentation and open-source contributions. Direct project repositories and academic source code are available upon request for verified recruiters.",
          subtext: 'You can directly contact Harini via email to request code repositories or view her project architecture in this portfolio.',
        };
      case 'linkedin':
        return {
          header: 'LinkedIn Profile',
          badge: 'Profile Notice',
          message:
            "Harini's LinkedIn profile URL is being updated for professional placement. You can reach out immediately via her direct email or phone number below.",
          subtext: 'Harini is actively seeking software engineering placements and full-stack developer opportunities.',
        };
      case 'demo':
        return {
          header: title ? `${title} – Live Demo` : 'Live Demonstration',
          badge: 'Project Demonstration',
          message:
            'This project operates within dedicated computational or AI model inference environments.',
          subtext:
            'Live screen recordings, architectural walkthroughs, and technical explanations are happily provided during interview discussions.',
        };
      case 'repo':
        return {
          header: title ? `${title} – Source Repository` : 'Source Code Repository',
          badge: 'Codebase Access',
          message:
            'Source code for this project is cataloged securely on GitHub / private repository.',
          subtext:
            'Private access or repository links can be shared directly with interviewers and hiring managers upon request.',
        };
    }
  };

  const details = getDetails();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-6 text-slate-900 dark:text-slate-100 shadow-2xl z-10"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9B5CFF] via-[#5B8CFF] to-[#22d3ee]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="mt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-[#9B5CFF]/15 text-[#9B5CFF] border border-purple-200 dark:border-[#9B5CFF]/20 mb-3">
                <Sparkles className="h-3 w-3" />
                {details.badge}
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {details.header}
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {details.message}
              </p>

              <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {details.subtext}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#9B5CFF] hover:bg-[#8944fa] text-white shadow-lg shadow-[#9B5CFF]/20 transition-all active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-300" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Software Engineering Opportunity - Harini A K`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#5B8CFF]" />
                  <span>{PERSONAL_INFO.formattedPhone}</span>
                </div>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Harini_A_K_Resume.pdf"
                  className="inline-flex items-center gap-1 text-[#9B5CFF] hover:underline font-semibold"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
