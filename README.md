# ScribeMind AI — Next.js Project

AI-powered academic assignment generator with Word (.docx) and handwritten notebook PDF export.

## Quick Start

### 1. Install dependencies
```bash
npm install
# or
yarn install

## Project Structure

```
scribemind-ai/
├── app/
│   ├── api/
│   │   ├── generate/route.ts       # AI assignment generation (Groq)
│   │   ├── humanize/route.ts       # AI text humanization (Groq)
│   │   └── download/
│   │       ├── word/route.ts       # Word .docx generation
│   │       └── handwritten/route.ts # Notebook PDF generation
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Generator.tsx               # Main tool UI
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   └── BackgroundCanvas.tsx       # Animated background
├── public/
│   └── fonts/
│       └── Caveat-Regular.ttf     # Handwriting font for PDF
├── .env.example
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Features
- AI assignment generation via Groq (llama-3.3-70b-versatile)
- Page-based writing (1–15 pages)
- Multiple education levels (School, Undergraduate, Postgraduate)
- APA/MLA/Normal styles
- AI Humanize feature (makes text sound human-written)
- Word document download (.docx)
- Handwritten notebook PDF (Caveat font on lined paper)
- Animated dark futuristic UI

## Built With
- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Groq SDK](https://groq.com/)
- [docx](https://docx.js.org/) — Word document generation
- [pdfkit](https://pdfkit.org/) — PDF generation

---

Made by **Aditya Raj** | ScribeMind AI © 2025
