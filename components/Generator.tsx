'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import axios from 'axios';
import {
  Sparkles, FileText, BookOpen, Download, Wand2,
  Loader2, AlertCircle, CheckCircle2, Copy,
} from 'lucide-react';

const PAGES_OPTIONS = [
  { value: '1', label: '1 Page (~275 words)' },
  { value: '2', label: '2 Pages (~550 words)' },
  { value: '3', label: '3 Pages (~825 words)' },
  { value: '5', label: '5 Pages (~1,375 words)' },
  { value: '8', label: '8 Pages (~2,200 words)' },
  { value: '10', label: '10 Pages (~2,750 words)' },
  { value: '15', label: '15 Pages (~4,125 words)' },
];

const LEVEL_OPTIONS = [
  { value: 'school', label: 'School' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
];

const STYLE_OPTIONS = [
  { value: 'normal', label: 'Normal' },
  { value: 'apa', label: 'APA Style' },
  { value: 'mla', label: 'MLA Style' },
];

const selectClass =
  'w-full select-dark bg-[#0B0C15] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500/60 transition-all duration-200 cursor-pointer';

const inputClass =
  'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:border-violet-500/60 focus:bg-white/[0.06] transition-all duration-200';

function renderPreviewText(text: string) {
  return text.split('\n').map((line, i) => {
    const s = line.trim();
    if (!s) return <br key={i} />;
    if (s.startsWith('# ')) return <h2 key={i} className="font-['Outfit'] font-bold text-white text-base mt-4 mb-1">{s.slice(2)}</h2>;
    if (s.startsWith('## ')) return <h3 key={i} className="font-['Outfit'] font-semibold text-violet-300 text-sm mt-3 mb-1">{s.slice(3)}</h3>;
    if (s.startsWith('### ')) return <h4 key={i} className="font-semibold text-blue-300 text-sm mt-2 mb-1">{s.slice(4)}</h4>;
    const parts = s.split(/\*\*(.+?)\*\*/g);
    return (
      <p key={i} className="text-slate-300 text-sm leading-relaxed mb-1">
        {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-slate-200 font-semibold">{p}</strong> : p)}
      </p>
    );
  });
}

function downloadBlob(data: Blob, filename: string) {
  const url = window.URL.createObjectURL(data);
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}

export default function Generator() {
  const [topic, setTopic] = useState('');
  const [pages, setPages] = useState('2');
  const [educationLevel, setEducationLevel] = useState('undergraduate');
  const [style, setStyle] = useState('normal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [isHumanizing, setIsHumanizing] = useState(false);
  const [isDownloadingWord, setIsDownloadingWord] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) { setError('Please enter an assignment topic'); return; }
    setIsGenerating(true); setError(''); setGeneratedText('');
    try {
      const res = await axios.post('/api/generate', {
        topic: topic.trim(), pages: parseInt(pages), education_level: educationLevel, assignment_style: style,
      }, { timeout: 90000 });
      setGeneratedText(res.data.text);
      toast.success('Assignment generated successfully!');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { error?: string } } })?.response?.data?.error || 'Generation failed. Please try again.';
      setError(msg); toast.error(msg);
    } finally { setIsGenerating(false); }
  };

  const handleHumanize = async () => {
    setIsHumanizing(true); setError('');
    try {
      const res = await axios.post('/api/humanize', { text: generatedText, education_level: educationLevel }, { timeout: 90000 });
      setGeneratedText(res.data.text);
      toast.success('Assignment humanized!');
    } catch {
      toast.error('Humanization failed. Please try again.');
    } finally { setIsHumanizing(false); }
  };

  const handleDownloadWord = async () => {
    setIsDownloadingWord(true);
    try {
      const res = await axios.post('/api/download/word', { text: generatedText, topic: topic.trim() || 'Assignment' }, { responseType: 'blob', timeout: 30000 });
      downloadBlob(res.data, `${topic || 'assignment'}_assignment.docx`);
      toast.success('Word document downloaded!');
    } catch { toast.error('Word download failed.'); }
    finally { setIsDownloadingWord(false); }
  };

  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    try {
      const res = await axios.post('/api/download/handwritten', { text: generatedText, topic: topic.trim() || 'Assignment' }, { responseType: 'blob', timeout: 30000 });
      downloadBlob(res.data, `${topic || 'assignment'}_handwritten.pdf`);
      toast.success('Handwritten PDF downloaded!');
    } catch { toast.error('PDF download failed.'); }
    finally { setIsDownloadingPdf(false); }
  };

  const copyText = () => {
    navigator.clipboard.writeText(generatedText);
    toast.success('Copied to clipboard!');
  };

  return (
    <section id="generator" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-5">
            MAIN TOOL
          </span>
          <h2 className="font-['Outfit'] font-bold text-4xl sm:text-5xl text-white mb-4">
            Assignment <span className="gradient-text">Generator</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Fill in the details below and let AI craft your perfect assignment in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-8 md:p-10"
          style={{ border: '1px solid rgba(139, 92, 246, 0.15)' }}
        >
          <div className="space-y-5">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Assignment Topic <span className="text-violet-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. The Impact of Climate Change on Global Ecosystems"
                value={topic}
                onChange={(e) => { setTopic(e.target.value); setError(''); }}
                className={inputClass}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Number of Pages</label>
                <select value={pages} onChange={(e) => setPages(e.target.value)} className={selectClass}>
                  {PAGES_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-[#0B0C15]">{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Education Level</label>
                <select value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} className={selectClass}>
                  {LEVEL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-[#0B0C15]">{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">Assignment Style</label>
              <select value={style} onChange={(e) => setStyle(e.target.value)} className={selectClass}>
                {STYLE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="bg-[#0B0C15]">{o.label}</option>
                ))}
              </select>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <AlertCircle size={15} />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-glow relative w-full py-4 rounded-xl text-white font-semibold text-base z-10 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isGenerating ? (
                  <><Loader2 size={18} className="animate-spin" />Generating Assignment...</>
                ) : (
                  <><Sparkles size={18} />Generate Assignment</>
                )}
              </span>
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {generatedText && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 space-y-6"
            >
              <div className="glass-card p-6" style={{ border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-400" />
                    <span className="text-white font-semibold text-sm font-['Outfit']">Assignment Generated</span>
                    <span className="text-slate-500 text-xs">~{generatedText.split(' ').length} words</span>
                  </div>
                  <button
                    onClick={copyText}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Copy size={13} />Copy
                  </button>
                </div>
                <div
                  className="max-h-72 overflow-y-auto pr-2"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.4) transparent' }}
                >
                  {renderPreviewText(generatedText)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-7 space-y-5"
                  style={{ border: '1px solid rgba(139, 92, 246, 0.25)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}>
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] font-semibold text-white text-lg">Word Document</h3>
                      <p className="text-slate-400 text-xs mt-0.5">Formatted .docx with headings & structure</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={handleDownloadWord} disabled={isDownloadingWord}
                    className="btn-glow relative w-full py-3 rounded-xl text-white text-sm font-semibold z-10 disabled:opacity-60"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isDownloadingWord ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
                      {isDownloadingWord ? 'Downloading...' : 'Download Word (.docx)'}
                    </span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={handleHumanize} disabled={isHumanizing}
                    className="w-full py-3 rounded-xl text-violet-300 text-sm font-semibold border border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-200 disabled:opacity-60"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isHumanizing ? <Loader2 size={15} className="animate-spin" /> : <Wand2 size={15} />}
                      {isHumanizing ? 'Humanizing...' : 'Humanize Assignment'}
                    </span>
                  </motion.button>
                  <p className="text-slate-600 text-xs text-center">Humanize makes it sound like you wrote it</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="glass-card p-7 space-y-5"
                  style={{ border: '1px solid rgba(6, 182, 212, 0.25)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}>
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Outfit'] font-semibold text-white text-lg">Handwritten Notebook</h3>
                      <p className="text-slate-400 text-xs mt-0.5">Realistic notebook PDF with lined paper</p>
                    </div>
                  </div>
                  <div className="handwriting-preview rounded-xl px-4 pt-3 pb-2 text-sm" style={{ background: 'rgba(255, 252, 238, 0.07)', border: '1px solid rgba(176, 213, 230, 0.2)', fontFamily: "'Caveat', cursive", fontSize: '15px' }}>
                    <div className="opacity-50 text-xs text-slate-500 mb-1 font-['Inter']">Preview style:</div>
                    <span className="text-cyan-300/80">This is how your assignment will look in</span>
                    <br />
                    <span className="text-cyan-200/70">the handwritten notebook PDF format...</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={handleDownloadPdf} disabled={isDownloadingPdf}
                    className="w-full py-3 rounded-xl text-cyan-300 text-sm font-semibold border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-200 disabled:opacity-60"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isDownloadingPdf ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
                      {isDownloadingPdf ? 'Generating PDF...' : 'Download Handwritten PDF'}
                    </span>
                  </motion.button>
                  <p className="text-slate-600 text-xs text-center">Caveat handwriting font on lined notebook paper</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
