'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter } from 'lucide-react';

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fg1" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <rect x="9" y="3" width="16" height="13" rx="4" fill="url(#fg1)" opacity="0.95" />
    <circle cx="13.5" cy="9.5" r="2" fill="white" />
    <circle cx="20.5" cy="9.5" r="2" fill="white" />
    <line x1="17" y1="3" x2="17" y2="1" stroke="url(#fg1)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="0.8" r="1.5" fill="#06B6D4" />
    <rect x="5" y="20" width="24" height="11" rx="3" fill="url(#fg1)" opacity="0.25" />
    <line x1="9" y1="24" x2="25" y2="24" stroke="url(#fg1)" strokeWidth="1.2" opacity="0.9" />
    <line x1="9" y1="27.5" x2="21" y2="27.5" stroke="url(#fg1)" strokeWidth="1.2" opacity="0.9" />
    <line x1="23" y1="18" x2="29" y2="12" stroke="url(#fg1)" strokeWidth="2" strokeLinecap="round" />
    <polygon points="29,10 32,14.5 27,13.5" fill="url(#fg1)" />
  </svg>
);

const quickLinks = ['Home', 'Features', 'Generator', 'How It Works'];
const linkIds = ['home', 'features', 'generator', 'how-it-works'];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-10 px-6 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <LogoIcon />
              <span className="font-['Outfit'] font-bold text-lg text-white">
                Scribe<span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Mind AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The smartest AI assignment generator for students worldwide. Generate, humanize, and download in seconds.
            </p>
            <div className="flex gap-3">
              {[Mail, Github, Twitter].map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                >
                  <Icon size={15} />
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['Outfit'] font-semibold text-white text-sm mb-5 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(linkIds[i])}
                    className="text-slate-500 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Outfit'] font-semibold text-white text-sm mb-5 tracking-wide uppercase">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:support@scribemind.ai" className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-violet-400" />
                support@scribemind.ai
              </a>
              <p className="text-slate-600 text-xs leading-relaxed">
                For support, feature requests, or collaboration opportunities, reach out anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© 2025 ScribeMind AI. All rights reserved.</p>
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="text-slate-500 text-xs tracking-widest font-mono uppercase">
              Founded by <span className="text-slate-300 font-semibold">Aditya Raj</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
