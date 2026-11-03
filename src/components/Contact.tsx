import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  AlertCircle,
  FileDown,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenPlaceholder: (type: 'github' | 'linkedin' | 'demo' | 'repo') => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPlaceholder }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<null | 'ready'>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#9B5CFF', '#5B8CFF', '#22d3ee'],
    });

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hello Harini,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmittedStatus('ready');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopiedEmail(true);
    setTimeout(() => setIsCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setIsCopiedPhone(true);
    setTimeout(() => setIsCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9B5CFF]/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9B5CFF]/15 text-[#9B5CFF] border border-[#9B5CFF]/20 mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Have an Idea? Let's Connect.
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Open to software engineering placements, full-stack opportunities, internship applications, and collaborative tech projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A]/85 p-6 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono font-semibold text-[#9B5CFF]">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  {isCopiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-100 dark:bg-[#9B5CFF]/15 text-[#9B5CFF]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-[#9B5CFF] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Fast response within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A]/85 p-6 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-mono font-semibold text-[#5B8CFF]">
                  Phone Contact
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  {isCopiedPhone ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-[#5B8CFF]/15 text-[#5B8CFF]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-base font-bold text-slate-900 dark:text-white hover:text-[#5B8CFF] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Direct mobile / WhatsApp available
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Links Box */}
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A]/85 p-6 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <span className="text-xs uppercase font-mono font-semibold text-slate-500 dark:text-slate-400 block mb-4">
                Professional Online Profiles
              </span>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onOpenPlaceholder('linkedin')}
                  className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-[#5B8CFF]/40 text-slate-800 dark:text-slate-200 transition-all text-xs font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="h-4 w-4 text-[#5B8CFF]" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </button>

                <button
                  onClick={() => onOpenPlaceholder('github')}
                  className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:border-[#9B5CFF]/40 text-slate-800 dark:text-slate-200 transition-all text-xs font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="h-4 w-4 text-[#9B5CFF]" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Curriculum Vitae</span>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Harini_A_K_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9B5CFF] hover:underline"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A]/85 p-6 sm:p-8 backdrop-blur-xl shadow-lg dark:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in your project or opportunity details below. Upon submission, this generates a pre-formatted email draft addressed to Harini.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-[#9B5CFF]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#9B5CFF] transition-all ${
                        errors.name
                          ? 'border-rose-500/70'
                          : 'border-slate-300 dark:border-white/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email Address <span className="text-[#9B5CFF]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#9B5CFF] transition-all ${
                        errors.email
                          ? 'border-rose-500/70'
                          : 'border-slate-300 dark:border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Topic <span className="text-[#9B5CFF]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#9B5CFF] transition-all ${
                      errors.subject
                        ? 'border-rose-500/70'
                        : 'border-slate-300 dark:border-white/10'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message <span className="text-[#9B5CFF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or interview schedule..."
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.03] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#9B5CFF] transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500/70'
                        : 'border-slate-300 dark:border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#9B5CFF] to-[#5B8CFF] text-white shadow-lg shadow-[#9B5CFF]/30 hover:opacity-95 transition-all active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              {/* Real submission feedback state */}
              {submittedStatus === 'ready' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300"
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Email client launched!</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    If your email client did not automatically open, you can send your message directly to{' '}
                    <span className="font-mono text-purple-700 dark:text-white font-bold underline">{PERSONAL_INFO.email}</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
