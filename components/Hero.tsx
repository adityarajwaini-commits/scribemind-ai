'use client';

import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

const RobotSVG = () => (
  <svg viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="bodyG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="100%" stopColor="#0d0d1f" />
      </linearGradient>
      <linearGradient id="screenG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1e0533" />
        <stop offset="100%" stopColor="#0a1533" />
      </linearGradient>
      <linearGradient id="holoG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
      </linearGradient>
      <filter id="glow-s">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id="glow-m">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <line x1="140" y1="52" x2="140" y2="22" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="140" cy="17" r="7" fill="#8B5CF6" filter="url(#glow-m)" />
    <circle cx="140" cy="17" r="4" fill="#c4b5fd" />
    <rect x="75" y="52" width="130" height="95" rx="22" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.5" />
    <ellipse cx="108" cy="99" rx="18" ry="16" fill="#080810" />
    <motion.ellipse cx="108" cy="99" rx="12" ry="11" fill="#7C3AED" filter="url(#glow-s)"
      animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
      transition={{ duration: 5, repeat: Infinity, times: [0, 0.88, 0.92, 0.96, 1] }} />
    <ellipse cx="105" cy="96" rx="3.5" ry="3" fill="white" opacity="0.65" />
    <ellipse cx="172" cy="99" rx="18" ry="16" fill="#080810" />
    <motion.ellipse cx="172" cy="99" rx="12" ry="11" fill="#7C3AED" filter="url(#glow-s)"
      animate={{ scaleY: [1, 1, 0.08, 1, 1] }}
      transition={{ duration: 5, repeat: Infinity, times: [0, 0.88, 0.92, 0.96, 1], delay: 0.1 }} />
    <ellipse cx="169" cy="96" rx="3.5" ry="3" fill="white" opacity="0.65" />
    <path d="M 112 132 Q 140 142 168 132" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#glow-s)" />
    <rect x="68" y="75" width="10" height="20" rx="5" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.2" />
    <rect x="202" y="75" width="10" height="20" rx="5" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.2" />
    <rect x="122" y="147" width="36" height="18" rx="6" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.2" />
    <rect x="60" y="165" width="160" height="115" rx="22" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="78" y="178" width="124" height="85" rx="12" fill="url(#screenG)" stroke="#06B6D4" strokeWidth="1.5" />
    <text x="140" y="210" textAnchor="middle" fill="#22d3ee" fontSize="8.5" fontFamily="monospace" fontWeight="600" filter="url(#glow-s)">GENERATING...</text>
    <motion.rect x="88" y="218" rx="2" height="2.5" fill="#8B5CF6" opacity="0.7"
      animate={{ width: [20, 90, 20] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
    <rect x="88" y="225" width="80" height="2" rx="1" fill="#3B82F6" opacity="0.45" />
    <rect x="88" y="231" width="65" height="2" rx="1" fill="#06B6D4" opacity="0.35" />
    <rect x="88" y="237" width="75" height="2" rx="1" fill="#8B5CF6" opacity="0.3" />
    <motion.circle cx="85" cy="195" r="4" fill="#8B5CF6" filter="url(#glow-s)"
      animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} />
    <motion.circle cx="195" cy="195" r="4" fill="#06B6D4" filter="url(#glow-s)"
      animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
    <circle cx="52" cy="183" r="13" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.3" />
    <rect x="25" y="178" width="30" height="16" rx="8" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.3" />
    <circle cx="22" cy="186" r="9" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.3" />
    <circle cx="228" cy="183" r="13" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.3" />
    <rect x="226" y="172" width="30" height="16" rx="8" fill="url(#bodyG)" stroke="#8B5CF6" strokeWidth="1.3" transform="rotate(-20 241 180)" />
    <circle cx="258" cy="170" r="9" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.3" />
    <rect x="260" y="140" width="55" height="70" rx="8" fill="url(#holoG)" stroke="#06B6D4" strokeWidth="1.5" filter="url(#glow-s)" />
    <text x="287" y="163" textAnchor="middle" fill="#22d3ee" fontSize="6" fontFamily="monospace" filter="url(#glow-s)">Generate</text>
    <text x="287" y="172" textAnchor="middle" fill="#c4b5fd" fontSize="6" fontFamily="monospace">Assignment</text>
    <motion.rect x="269" y="180" rx="2" height="2" fill="#8B5CF6" opacity="0.7"
      animate={{ width: [10, 38, 10] }} transition={{ duration: 1.8, repeat: Infinity }} />
    <rect x="88" y="280" width="40" height="55" rx="14" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.4" />
    <rect x="152" y="280" width="40" height="55" rx="14" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.4" />
    <ellipse cx="108" cy="338" rx="25" ry="10" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.3" />
    <ellipse cx="172" cy="338" rx="25" ry="10" fill="url(#bodyG)" stroke="#3B82F6" strokeWidth="1.3" />
    <ellipse cx="155" cy="350" rx="70" ry="6" fill="rgba(139,92,246,0.12)" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-7">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-violet-300 bg-violet-500/10 border border-violet-500/20">
                <Sparkles size={12} className="text-violet-400" />
                AI-POWERED ASSIGNMENT GENERATOR
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-['Outfit'] font-bold text-5xl sm:text-6xl text-white leading-[1.1] tracking-tight">
              Your AI{' '}
              <span className="gradient-text">Assignment</span>
              <br />
              Partner
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Generate perfectly formatted assignments or convert them into{' '}
              <span className="text-slate-200 font-medium">handwritten notebook pages</span>{' '}
              instantly. Powered by cutting-edge AI.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('generator')}
                className="btn-glow relative text-white font-semibold px-8 py-3.5 rounded-xl text-base z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} />
                  Generate Assignment
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('how-it-works')}
                className="text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl text-base border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 bg-white/[0.03]"
              >
                See How It Works
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-2">
              {[
                { label: '50K+', desc: 'Assignments Generated' },
                { label: '99%', desc: 'Student Satisfaction' },
                { label: '3s', desc: 'Average Generation Time' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-['Outfit'] font-bold text-xl gradient-text">{stat.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-violet-600/15 blur-[80px]" />
            </div>
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-md"
              style={{ filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.35))' }}
            >
              <RobotSVG />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
