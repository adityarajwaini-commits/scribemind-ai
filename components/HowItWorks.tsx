'use client';

import { motion } from 'framer-motion';
import { PenLine, Cpu, Download } from 'lucide-react';

const steps = [
  {
    num: '01',
    Icon: PenLine,
    title: 'Enter Topic & Pages',
    desc: 'Type your assignment topic, choose the number of pages, education level, and preferred writing style.',
    color: 'from-violet-600 to-purple-600',
    glow: 'rgba(139, 92, 246, 0.5)',
  },
  {
    num: '02',
    Icon: Cpu,
    title: 'AI Generates Assignment',
    desc: 'Our advanced AI (Llama 3.3 70B on Groq) crafts a complete, structured academic assignment in seconds.',
    color: 'from-blue-600 to-cyan-600',
    glow: 'rgba(59, 130, 246, 0.5)',
  },
  {
    num: '03',
    Icon: Download,
    title: 'Download Your Format',
    desc: 'Download as a Word document, humanize it for a natural tone, or get a beautiful handwritten notebook PDF.',
    color: 'from-cyan-600 to-teal-600',
    glow: 'rgba(6, 182, 212, 0.5)',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-5">
            SIMPLE PROCESS
          </span>
          <h2 className="font-['Outfit'] font-bold text-4xl sm:text-5xl text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Three simple steps to go from topic to a complete, downloadable assignment.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%] h-px">
            <div className="h-full bg-gradient-to-r from-violet-500/40 via-blue-500/40 to-cyan-500/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 z-10`}
                  style={{ boxShadow: `0 0 30px ${step.glow}` }}
                >
                  <step.Icon size={30} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#05050A] border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400">{step.num}</span>
                  </div>
                </motion.div>
                <h3 className="font-['Outfit'] font-semibold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow relative text-white font-semibold px-10 py-4 rounded-xl text-base z-10"
          >
            <span className="relative z-10">Try It Now — It&apos;s Free</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
