# ScribeMind AI — Next.js Project

AI-powered academic assignment generator with Word (.docx) and handwritten notebook PDF export.

## Quick Start

### 1. Install dependencies
```bash
npm install
# or
yarn install
```

### 2. Set up environment variables
Copy `.env.example` to `.env.local` and fill in your Groq API key:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

**Get a free Groq API key at:** https://console.groq.com/keys

### 3. Run development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables:
   - `GROQ_API_KEY` = your Groq API key
   - `GROQ_MODEL` = `llama-3.3-70b-versatile`
4. Click **Deploy**

That's it! Your site will be live in ~2 minutes.

---

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
