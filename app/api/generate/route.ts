import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

function getGroq() {
  return new Groq({ apiKey: process.env.GROQ_API_KEY });
}
const GROQ_MODEL = 'llama-3.3-70b-versatile';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic, pages = 2, education_level = 'undergraduate', assignment_style = 'normal' } = body;

    if (!topic?.trim()) {
      return NextResponse.json({ error: 'Topic cannot be empty' }, { status: 400 });
    }

    const wordCount = pages * 275;

    const styleMap: Record<string, string> = {
      normal: 'standard academic format',
      apa: 'APA citation style with in-text citations (Author, Year)',
      mla: 'MLA format guidelines',
    };

    const levelMap: Record<string, string> = {
      school: 'simple, clear language for high school students (grades 9-12)',
      undergraduate: 'academic language suitable for university undergraduates',
      postgraduate: 'advanced academic language with critical analysis and research depth',
    };

    const prompt = `Write a complete academic assignment on the following topic.

Topic: ${topic}
Target Length: approximately ${wordCount} words (${pages} pages)
Education Level: ${levelMap[education_level] || education_level}
Format: ${styleMap[assignment_style] || 'standard academic format'}

Use this structure:
# [Assignment Title]

[Introduction - set context and thesis, 2-3 paragraphs]

## [First Main Section Heading]
[2-3 detailed paragraphs with examples]

## [Second Main Section Heading]
[2-3 detailed paragraphs]

## [Third Main Section Heading]
[2-3 detailed paragraphs]

## Conclusion
[Concluding paragraph summarizing key points]

Requirements:
- Write in natural, student-like language (not robotic)
- Include real examples and concrete explanations
- Vary sentence length naturally
- Total approximately ${wordCount} words
- Use markdown headings (# for title, ## for sections)

Write the full assignment now:`;

    const response = await getGroq().chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: GROQ_MODEL,
      temperature: 0.75,
      max_tokens: 4096,
    });

    return NextResponse.json({
      text: response.choices[0].message.content,
      success: true,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'AI generation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
