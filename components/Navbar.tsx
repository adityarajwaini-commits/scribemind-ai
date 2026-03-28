'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LogoIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lg1" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <rect x="9" y="3" width="16" height="13" rx="4" fill="url(#lg1)" opacity="0.95" />
    <circle cx="13.5" cy="9.5" r="2" fill="white" />
    <circle cx="20.5" cy="9.5" r="2" fill="white" />
    <line x1="17" y1="3" x2="17" y2="1" stroke="url(#lg1)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="0.8" r="1.5" fill="#06B6D4" />
    <rect x="5" y="20" width="24" height="11" rx="3" fill="url(#lg1)" opacity="0.25" />
    <line x1="9" y1="24" x2="25" y2="24" stroke="url(#lg1)" strokeWidth="1.2" opacity="0.9" />
    <line x1="9" y1="27.5" x2="21" y2="27.5" stroke="url(#lg1)" strokeWidth="1.2" opacity="0.9" />
    <line x1="23" y1="18" x2="29" y2="12" stroke="url(#lg1)" strokeWidth="2" strokeLinecap="round" />
    <polygon points="29,10 32,14.5 27,13.5" fill="url(#lg1)" />
  </svg>
);

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'Generator', id: 'generator' },
  { label: 'How It Works', id: 'how-it-works' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05050A]/75 backdrop-blur-2xl border-b border-white/[0.07] shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={() => scrollTo('home')}
        >
          <LogoIcon />
          <span className="font-['Outfit'] font-bold text-[1.15rem] text-white">
            Scribe<span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Mind AI</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-7"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('generator')}
            className="btn-glow relative text-white text-sm font-semibold px-5 py-2.5 rounded-xl z-10"
          >
            <span className="relative z-10">Generate Assignment</span>
          </motion.button>
          <span className="text-slate-600 text-xs font-medium tracking-wide">by Aditya Raj</span>
        </motion.div>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0B0C15]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left py-2.5 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('generator')}
                className="mt-3 w-full btn-glow relative text-white text-sm font-semibold px-4 py-2.5 rounded-xl z-10"
              >
                <span className="relative z-10">Generate Assignment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
