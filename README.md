# ✍️ ScribeMind AI

AI-powered academic assignment generator with **Word (.docx)** and **handwritten notebook PDF export**.

---

## 📸 Screenshots

<img width="1916" height="917" alt="image" src="https://github.com/user-attachments/assets/3d42e582-9e33-45ec-aa34-5f871cf19ddb" />
<img width="1908" height="917" alt="image" src="https://github.com/user-attachments/assets/57beeb98-f88f-4143-88cb-69e7274ff5ac" />
<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/caa29516-a410-44ad-bea4-fb30645c310a" />
<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/9fd85b3f-e9d8-4e1a-a0a0-e5a2dea74229" />

## 🚀 Features

* 🤖 AI Assignment Generation (Groq — LLaMA 3.3 70B)
* 📄 Page-based writing (1–15 pages)
* 🎓 School, Undergraduate, Postgraduate levels
* 📝 APA / MLA / Normal formatting
* ✨ AI Humanizer (natural, human-like writing)
* 📥 Export:

  * Word (.docx)
  * Handwritten notebook-style PDF
* 🌙 Modern animated dark UI

---

## 🛠️ Tech Stack

* Next.js 14 (App Router)
* Tailwind CSS
* Framer Motion
* Groq SDK
* docx
* pdfkit

---

## 📁 Project Structure

scribemind-ai/
├── app/
│   ├── api/
│   │   ├── generate/route.ts
│   │   ├── humanize/route.ts
│   │   └── download/
│   │       ├── word/route.ts
│   │       └── handwritten/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/fonts/
├── .env.example
├── next.config.js
├── tailwind.config.js
└── package.json

---

## 🧠 How It Works

1. Enter topic
2. Select pages, level, format
3. Generate content
4. Humanize (optional)
5. Download as Word or handwritten PDF

---

## 📦 API Routes

* /api/generate
* /api/humanize
* /api/download/word
* /api/download/handwritten

---

## 📄 License

MIT License

---

## ⭐ Support

Give a ⭐ if you like the project!
