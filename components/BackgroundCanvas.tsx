'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

const NotebookPage = ({ color }: { color: string }) => {
  const id = color.replace('#', '');
  return (
    <svg viewBox="0 0 56 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`nb-glow-${id}`}>
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="2" y="2" width="52" height="70" rx="4" stroke={color} strokeWidth="1.2" fill={`${color}09`} filter={`url(#nb-glow-${id})`} />
      <line x1="13" y1="2" x2="13" y2="72" stroke="#ef4444" strokeWidth="0.6" opacity="0.4" />
      {[16, 24, 32, 40, 48, 56, 64].map(y => (
        <line key={y} x1="16" y1={y} x2="50" y2={y} stroke={color} strokeWidth="0.7" opacity="0.55" />
      ))}
      {[12, 24, 36, 44].map(x => (
        <circle key={x} cx={x} cy="0" r="2.5" stroke={color} strokeWidth="0.8" fill="transparent" opacity="0.4" />
      ))}
    </svg>
  );
};

const OpenBook = ({ color }: { color: string }) => {
  const id = color.replace('#', '');
  return (
    <svg viewBox="0 0 82 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`bk-glow-${id}`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M3 8 Q3 3 9 3 L39 3 L39 54 L9 54 Q3 54 3 48Z" stroke={color} strokeWidth="1.3" fill={`${color}07`} filter={`url(#bk-glow-${id})`} />
      <path d="M43 3 L73 3 Q79 3 79 8 L79 48 Q79 54 73 54 L43 54Z" stroke={color} strokeWidth="1.3" fill={`${color}07`} />
      <line x1="41" y1="3" x2="41" y2="54" stroke={color} strokeWidth="2" filter={`url(#bk-glow-${id})`} />
      {[14, 21, 28, 35, 42].map(y => (
        <line key={`l${y}`} x1="9" y1={y} x2="37" y2={y} stroke={color} strokeWidth="0.65" opacity="0.45" />
      ))}
      {[14, 21, 28, 35, 42].map(y => (
        <line key={`r${y}`} x1="45" y1={y} x2="73" y2={y} stroke={color} strokeWidth="0.65" opacity="0.45" />
      ))}
    </svg>
  );
};

const PenSvg = ({ color }: { color: string }) => {
  const id = color.replace('#', '');
  return (
    <svg viewBox="0 0 22 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`pen-glow-${id}`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="3" y="1" width="16" height="14" rx="8" stroke={color} strokeWidth="1.2" fill={`${color}15`} filter={`url(#pen-glow-${id})`} />
      <rect x="3" y="14" width="16" height="48" rx="2" stroke={color} strokeWidth="1.2" fill={`${color}08`} />
      <path d="M3 62 L11 80 L19 62Z" stroke={color} strokeWidth="1.2" fill={`${color}14`} filter={`url(#pen-glow-${id})`} />
      <rect x="14" y="1" width="3.5" height="34" rx="1.5" stroke={color} strokeWidth="0.8" fill={`${color}0D`} />
      <line x1="3" y1="20" x2="19" y2="20" stroke={color} strokeWidth="0.7" opacity="0.45" />
      <circle cx="11" cy="78" r="3" fill={color} opacity="0.5" filter={`url(#pen-glow-${id})`} />
    </svg>
  );
};

const DocumentSvg = ({ color }: { color: string }) => {
  const id = color.replace('#', '');
  return (
    <svg viewBox="0 0 56 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`doc-glow-${id}`}>
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M3 3 L42 3 L53 14 L53 67 L3 67Z" stroke={color} strokeWidth="1.2" fill={`${color}07`} filter={`url(#doc-glow-${id})`} />
      <path d="M42 3 L42 14 L53 14" stroke={color} strokeWidth="1.2" fill={`${color}12`} />
      {[24, 32, 40, 48, 56].map((y, i) => (
        <line key={y} x1="9" y1={y} x2={i % 2 === 0 ? '47' : '40'} y2={y} stroke={color} strokeWidth="0.75" opacity="0.55" />
      ))}
      <rect x="9" y="11" width="28" height="5" rx="2" fill={color} opacity="0.2" />
    </svg>
  );
};

const CircuitSvg = ({ color }: { color: string }) => {
  const id = color.replace('#', '');
  return (
    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`cir-glow-${id}`}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="36" cy="36" r="33" stroke={color} strokeWidth="0.7" opacity="0.25" strokeDasharray="5 4" />
      <circle cx="36" cy="36" r="22" stroke={color} strokeWidth="0.7" opacity="0.2" />
      <circle cx="36" cy="36" r="5" stroke={color} strokeWidth="1.2" fill={`${color}18`} filter={`url(#cir-glow-${id})`} />
      {[[0,-22],[16,-16],[22,0],[16,16],[0,22],[-16,16],[-22,0],[-16,-16]].map(([dx,dy],i) => (
        <g key={i} filter={i % 2 === 0 ? `url(#cir-glow-${id})` : undefined}>
          <line x1="36" y1="36" x2={36+(dx??0)} y2={36+(dy??0)} stroke={color} strokeWidth="0.7" opacity="0.35" />
          <circle cx={36+(dx??0)} cy={36+(dy??0)} r="2.5" stroke={color} strokeWidth="0.8" fill={`${color}12`} opacity="0.6" />
        </g>
      ))}
    </svg>
  );
};

const StarburstSvg = ({ color }: { color: string }) => {
  const id = color.replace('#', '');
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`sb-glow-${id}`}>
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
        const rad = deg * Math.PI / 180;
        const inner = i % 2 === 0 ? 8 : 14;
        const outer = i % 2 === 0 ? 22 : 18;
        return (
          <line key={deg}
            x1={25 + inner * Math.cos(rad)} y1={25 + inner * Math.sin(rad)}
            x2={25 + outer * Math.cos(rad)} y2={25 + outer * Math.sin(rad)}
            stroke={color} strokeWidth="1" opacity="0.5" />
        );
      })}
      <circle cx="25" cy="25" r="5" fill={color} opacity="0.4" filter={`url(#sb-glow-${id})`} />
    </svg>
  );
};

const ICON_COMPONENTS: Record<string, React.ComponentType<{ color: string }>> = {
  notebook: NotebookPage, book: OpenBook, pen: PenSvg,
  doc: DocumentSvg, circuit: CircuitSvg, star: StarburstSvg,
};

const ELEMENTS_CONFIG = [
  { type:'notebook', x:3,  y:8,  size:58, opacity:0.14, color:'#8B5CF6', dur:13, delay:0,   moveY:22, rot:3  },
  { type:'doc',      x:88, y:6,  size:50, opacity:0.11, color:'#3B82F6', dur:16, delay:1.5, moveY:16, rot:-4 },
  { type:'book',     x:1,  y:34, size:78, opacity:0.08, color:'#3B82F6', dur:20, delay:0.8, moveY:12, rot:2  },
  { type:'pen',      x:94, y:30, size:34, opacity:0.13, color:'#06B6D4', dur:11, delay:2,   moveY:20, rot:-5 },
  { type:'circuit',  x:8,  y:62, size:70, opacity:0.09, color:'#8B5CF6', dur:24, delay:0,   moveY:10, rot:4  },
  { type:'notebook', x:84, y:58, size:52, opacity:0.11, color:'#06B6D4', dur:15, delay:3,   moveY:18, rot:-3 },
  { type:'doc',      x:44, y:2,  size:46, opacity:0.10, color:'#8B5CF6', dur:17, delay:1,   moveY:14, rot:4  },
  { type:'pen',      x:22, y:82, size:30, opacity:0.12, color:'#3B82F6', dur:12, delay:2.5, moveY:18, rot:3  },
  { type:'book',     x:68, y:78, size:72, opacity:0.07, color:'#8B5CF6', dur:22, delay:4,   moveY:11, rot:-2 },
  { type:'circuit',  x:52, y:52, size:62, opacity:0.07, color:'#3B82F6', dur:28, delay:1.5, moveY:8,  rot:2  },
  { type:'star',     x:75, y:14, size:44, opacity:0.10, color:'#06B6D4', dur:14, delay:0.5, moveY:16, rot:5  },
  { type:'doc',      x:30, y:88, size:54, opacity:0.09, color:'#3B82F6', dur:18, delay:2,   moveY:14, rot:-3 },
  { type:'star',     x:14, y:44, size:38, opacity:0.11, color:'#8B5CF6', dur:10, delay:1,   moveY:22, rot:-4 },
  { type:'notebook', x:60, y:90, size:44, opacity:0.09, color:'#8B5CF6', dur:16, delay:3.5, moveY:15, rot:3  },
];

const ORBS_CONFIG = [
  { x:'12%',  y:'18%', size:'520px', color:'rgba(139,92,246,0.065)',  dur:28 },
  { x:'82%',  y:'12%', size:'460px', color:'rgba(59,130,246,0.06)',   dur:32 },
  { x:'8%',   y:'72%', size:'580px', color:'rgba(6,182,212,0.05)',    dur:38 },
  { x:'78%',  y:'68%', size:'540px', color:'rgba(139,92,246,0.055)',  dur:25 },
  { x:'50%',  y:'42%', size:'420px', color:'rgba(59,130,246,0.045)',  dur:42 },
];

const PULSES_CONFIG = [
  { x:'18%', y:'25%', size:220, color:'rgba(139,92,246,0.18)', dur:5,   delay:0   },
  { x:'80%', y:'18%', size:180, color:'rgba(59,130,246,0.15)',  dur:6.5, delay:1.5 },
  { x:'50%', y:'75%', size:260, color:'rgba(6,182,212,0.14)',   dur:7,   delay:2.8 },
];

export default function BackgroundCanvas() {
  const particles = useMemo(() =>
    Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: (i * 7.3 + 5) % 100,
      y: (i * 11.7 + 10) % 100,
      size: (i % 5) * 0.5 + 0.8,
      dur: (i % 10) + 7,
      delay: (i % 7) * 1.0,
      color: i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#3B82F6' : '#06B6D4',
      mx: ((i % 10) - 5) * 10,
      my: -((i % 5) * 10 + 20),
    }))
  , []);

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Mesh Grid */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.8" fill="rgba(139,92,246,0.35)" />
          </pattern>
          <pattern id="line-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0L0 0 0 80" fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" opacity="0.4" />
        <rect width="100%" height="100%" fill="url(#line-grid)" opacity="0.15" />
      </svg>

      {/* Gradient Orbs */}
      {ORBS_CONFIG.map((o, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', left: o.x, top: o.y,
            width: o.size, height: o.size, borderRadius: '50%',
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            filter: 'blur(50px)', transform: 'translate(-50%, -50%)',
          }}
          animate={{ x: [0, 30*(i%2===0?1:-1), -15, 10, 0], y: [0,-20,25,-10,0], scale:[1,1.08,0.96,1.04,1] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Corner glows */}
      <motion.div style={{ position:'absolute', top:0, left:0, width:300, height:300, background:'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
        animate={{ opacity:[0.7,1,0.7] }} transition={{ duration:4, repeat:Infinity }} />
      <motion.div style={{ position:'absolute', top:0, right:0, width:300, height:300, background:'radial-gradient(circle at 100% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
        animate={{ opacity:[1,0.6,1] }} transition={{ duration:5, repeat:Infinity, delay:1 }} />

      {/* Floating Icons */}
      {ELEMENTS_CONFIG.map((el, i) => {
        const Icon = ICON_COMPONENTS[el.type];
        return (
          <motion.div
            key={i}
            style={{ position:'absolute', left:`${el.x}%`, top:`${el.y}%`, width:el.size, height:el.size, opacity:el.opacity }}
            animate={{ y:[0,-el.moveY,0], rotate:[0,el.rot,-el.rot*0.4,0] }}
            transition={{ duration:el.dur, repeat:Infinity, ease:'easeInOut', delay:el.delay, rotate:{ duration:el.dur*1.2, repeat:Infinity, delay:el.delay } }}
          >
            <Icon color={el.color} />
          </motion.div>
        );
      })}

      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{
            position:'absolute', left:`${p.x}%`, top:`${p.y}%`,
            width:p.size, height:p.size, borderRadius:'50%', background:p.color,
            boxShadow:`0 0 ${p.size*4}px ${p.color}`,
          }}
          animate={{ x:[0,p.mx*0.5,p.mx,0], y:[0,p.my*0.4,p.my,0], opacity:[0,0.6,0.3,0] }}
          transition={{ duration:p.dur, repeat:Infinity, ease:'easeInOut', delay:p.delay }}
        />
      ))}

      {/* Light Pulses */}
      {PULSES_CONFIG.map((p, i) => (
        <div key={i} style={{ position:'absolute', left:p.x, top:p.y, transform:'translate(-50%,-50%)', width:p.size, height:p.size }}>
          <motion.div
            style={{ position:'absolute', inset:0, borderRadius:'50%', border:`1px solid ${p.color}` }}
            animate={{ scale:[0.6,1.8,0.6], opacity:[0.4,0,0.4] }}
            transition={{ duration:p.dur, repeat:Infinity, ease:'easeOut', delay:p.delay }} />
          <motion.div
            style={{ position:'absolute', inset:'44%', borderRadius:'50%', background:p.color, filter:'blur(2px)' }}
            animate={{ opacity:[0.6,0.1,0.6], scale:[1,0.8,1] }}
            transition={{ duration:p.dur*0.6, repeat:Infinity, ease:'easeInOut', delay:p.delay }} />
        </div>
      ))}

      {/* Scanning Line */}
      <motion.div
        style={{
          position:'absolute', left:0, right:0, height:'1px',
          background:'linear-gradient(90deg, transparent, rgba(139,92,246,0.15), rgba(6,182,212,0.2), rgba(139,92,246,0.15), transparent)',
        }}
        animate={{ y:['-5vh','105vh','-5vh'], opacity:[0,0.6,0.8,0.6,0] }}
        transition={{ duration:18, repeat:Infinity, ease:'linear', times:[0,0.48,0.5,0.52,1] }}
      />
    </div>
  );
}
