'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Engineering Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=srgb&fm=jpg&w=80&q=80',
    text: 'ScribeMind AI literally saved me this semester. Generated a 5-page research assignment on climate change in 10 seconds. The handwritten PDF feature is insane!',
    rating: 5,
  },
  {
    name: 'Rohan Mehta',
    role: 'High School Student',
    avatar: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=srgb&fm=jpg&w=80&q=80',
    text: "The handwritten assignment PDF looks exactly like real notebook writing. My teacher didn't suspect a thing. This tool is a game changer.",
    rating: 5,
  },
  {
    name: 'Ananya Verma',
    role: 'Postgraduate Student',
    avatar: 'https://images.unsplash.com/photo-1621274790572-7c32596bc67f?crop=entropy&cs=srgb&fm=jpg&w=80&q=80',
    text: "The Humanize feature makes AI-generated text undetectable. I've tried other tools but ScribeMind AI generates the most natural academic writing.",
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'Commerce Student',
    avatar: 'https://images.pexels.com/photos/36623195/pexels-photo-36623195.jpeg?w=80',
    text: 'Downloaded my economics assignment as a Word doc and submitted it directly. The APA formatting was perfect. This is the best student AI tool I\'ve used.',
    rating: 5,
  },
  {
    name: 'Divya Nair',
    role: 'MBA Student',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=srgb&fm=jpg&w=80&q=80',
    text: 'Used ScribeMind for my management thesis sections. The postgraduate writing quality is impressive — analytical, well-structured, and academically sound.',
    rating: 5,
  },
  {
    name: 'Siddharth Rao',
    role: 'Science Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=srgb&fm=jpg&w=80&q=80',
    text: 'The speed alone is worth it. What takes me 3 hours to write, ScribeMind generates in 15 seconds. Clean UI, amazing output. Highly recommended!',
    rating: 5,
  },
];

const duped = [...testimonials, ...testimonials];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-yellow-400" fill="#facc15" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 mb-5">
            STUDENT REVIEWS
          </span>
          <h2 className="font-['Outfit'] font-bold text-4xl sm:text-5xl text-white mb-4">
            Loved by <span className="gradient-text">Thousands</span> of Students
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Join over 50,000 students who use ScribeMind AI to save time and ace their assignments.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#05050A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#05050A] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {duped.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-80 mx-3">
              <div className="glass-card p-6 h-full" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                <StarRating count={t.rating} />
                <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-5">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover border border-white/10"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
