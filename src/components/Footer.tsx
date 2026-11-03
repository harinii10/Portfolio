import React from 'react';
import {
  ArrowUp,
  FileDown,
  Mail,
  Phone,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPlaceholder: (type: 'github' | 'linkedin' | 'demo' | 'repo') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlaceholder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0B0B0F] pt-16 pb-12 text-slate-400 dark:border-white/10 dark:bg-[#0B0B0F] light:bg-slate-100 light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 dark:border-white/10 light:border-slate-300">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#9B5CFF] to-[#5B8CFF] flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
                H
              </div>
              <span className="text-base font-extrabold tracking-wider text-white dark:text-white light:text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science Engineering undergraduate at Amrita Vishwa Vidyapeetham with hands-on experience in Java, Python, RL simulations, and full-stack web applications.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Seeking Software Developer &amp; Internship Opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white dark:text-white light:text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Hackathons &amp; Activities</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">Education &amp; Training</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Profiles */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white dark:text-white light:text-slate-900">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#9B5CFF] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#9B5CFF]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#5B8CFF] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#5B8CFF]" />
                <span className="font-mono">{PERSONAL_INFO.formattedPhone}</span>
              </a>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onOpenPlaceholder('github')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub profile placeholder"
                >
                  <GithubIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onOpenPlaceholder('linkedin')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn profile placeholder"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </button>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Harini_A_K_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <FileDown className="h-3.5 w-3.5 text-[#9B5CFF]" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Harini A K. All personal and academic content verified.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
