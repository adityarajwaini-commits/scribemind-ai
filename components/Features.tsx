'use client';

import { motion } from 'framer-motion';
import { Wand2, BookOpen, Brain, FileText } from 'lucide-react';

const features = [
  {
    Icon: Wand2,
    title: 'AI Assignment Generator',
    desc: 'Generate structured academic assignments with proper title, introduction, headings, and conclusion — in seconds.',
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.3)',
    border: 'rgba(139, 92, 246, 0.2)',
  },
  {
    Icon: BookOpen,
    title: 'Page-Based Writing',
    desc: "Choose exactly how many pages you need instead of words. From 1 page to 15 pages — you're in control.",
    color: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59, 130, 246, 0.3)',
    border: 'rgba(59, 130, 246, 0.2)',
  },
  {
    Icon: Brain,
    title: 'Humanized Academic Writing',
    desc: 'Our Humanize feature rewrites AI text to sound completely natural — like a real student wrote every word.',
    color: 'from-cyan-600 to-teal-600',
    glow: 'rgba(6, 182, 212, 0.3)',
    border: 'rgba(6, 182, 212, 0.2)',
  },
  {
    Icon: FileText,
    title: 'Handwritten Assignment PDF',
    desc: 'Convert any assignment into a realistic notebook-style PDF — blue ink, lined paper, red margin. Looks 100% handwritten.',
    color: 'from-violet-600 to-blue-600',
    glow: 'rgba(139, 92, 246, 0.3)',
    border: 'rgba(139, 92, 246, 0.2)',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-5">
            POWERFUL FEATURES
          </span>
          <h2 className="font-['Outfit'] font-bold text-4xl sm:text-5xl text-white mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Ace Assignments</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ScribeMind AI combines cutting-edge language models with smart formatting to deliver assignments that look and read perfectly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card p-8 group cursor-default"
              style={{ border: `1px solid ${f.border}`, transition: 'all 0.35s ease' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${f.glow}, 0 0 60px ${f.glow.replace('0.3', '0.15')}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center`}
                  style={{ boxShadow: `0 0 20px ${f.glow}` }}
                >
                  <f.Icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-['Outfit'] font-semibold text-xl text-white mb-2">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </div>
              <div className={`mt-6 h-px bg-gradient-to-r ${f.color} opacity-20 group-hover:opacity-50 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
