import { NextResponse } from 'next/server';
import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
} from 'docx';

function cleanMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/^---+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, topic } = body;

    if (!text?.trim()) {
      return NextResponse.json({ error: 'Text cannot be empty' }, { status: 400 });
    }

    const children: Paragraph[] = [];

    // Title
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: (topic || 'Assignment').toUpperCase(),
            bold: true,
            size: 32,
            color: '1F69C0',
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      }),
      new Paragraph({ text: '' }),
    );

    const lines = text.trim().split('\n');
    for (const line of lines) {
      const s = line.trim();
      if (!s) {
        children.push(new Paragraph({ text: '' }));
        continue;
      }
      if (s.startsWith('# ')) {
        children.push(
          new Paragraph({
            text: s.slice(2),
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
        );
      } else if (s.startsWith('## ')) {
        children.push(
          new Paragraph({ text: s.slice(3), heading: HeadingLevel.HEADING_2 }),
        );
      } else if (s.startsWith('### ')) {
        children.push(
          new Paragraph({ text: s.slice(4), heading: HeadingLevel.HEADING_3 }),
        );
      } else {
        const clean = s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');
        children.push(
          new Paragraph({
            children: [new TextRun({ text: clean, size: 24 })],
            spacing: { after: 120 },
          }),
        );
      }
    }

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: { top: 1418, bottom: 1418, left: 1701, right: 1418 },
            },
          },
          children,
        },
      ],
    });

    const nodeBuffer = await Packer.toBuffer(doc);
    const buffer = new Uint8Array(nodeBuffer);
    const safe = (topic || 'assignment').replace(/[^\w\s-]/g, '').slice(0, 30).trim().replace(/\s+/g, '_');

    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${safe}_assignment.docx"`,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Word document creation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
