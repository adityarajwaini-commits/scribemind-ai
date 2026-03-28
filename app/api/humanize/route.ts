import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

function getGroq() {
  return new Groq({ apiKey: process.env.GROQ_API_KEY });
}
const GROQ_MODEL = 'llama-3.3-70b-versatile';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, education_level = 'undergraduate' } = body;

    if (!text?.trim()) {
      return NextResponse.json({ error: 'Text cannot be empty' }, { status: 400 });
    }

    const levelMap: Record<string, string> = {
      school: 'a high school student',
      undergraduate: 'a university undergraduate student',
      postgraduate: 'a graduate student',
    };

    const prompt = `Rewrite this academic assignment to sound natural, human-written, and undetectable as AI content. Make it sound like ${levelMap[education_level] || 'a student'} genuinely wrote it.

Rules:
- Vary sentence lengths naturally (mix short punchy sentences with longer complex ones)
- Use natural transitions (However, On the other hand, Interestingly, etc.)
- Add occasional hedging language (arguably, it seems, in many ways)
- Include minor stylistic imperfections that humans make
- Keep all content, facts, headings, and structure EXACTLY intact
- Do NOT add or remove information
- Maintain appropriate academic tone

Original text:
${text}

Rewritten natural version:`;

    const response = await getGroq().chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: GROQ_MODEL,
      temperature: 0.85,
      max_tokens: 4096,
    });

    return NextResponse.json({
      text: response.choices[0].message.content,
      success: true,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Humanization failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
