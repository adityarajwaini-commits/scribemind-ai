import { NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';

export const runtime = 'nodejs';

const LINE_H = 25.5;
const M_LEFT = 79;
const M_TOP = 62;
const PAGE_W = 595;
const PAGE_H = 842;
const TXT_W = PAGE_W - M_LEFT - 57;

function cleanMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/^---+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function drawNotebookPage(doc: any) {
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#FFFCEE');

  doc.strokeColor('#B0D5E6').lineWidth(0.85);
  for (let y = M_TOP; y < PAGE_H - 45; y += LINE_H) {
    doc.moveTo(0, y).lineTo(PAGE_W, y).stroke();
  }

  doc.strokeColor('#CD5C5C').lineWidth(1.7);
  doc.moveTo(M_LEFT - 6, 0).lineTo(M_LEFT - 6, PAGE_H).stroke();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text, topic } = body;

    if (!text?.trim()) {
      return NextResponse.json({ error: 'Text cannot be empty' }, { status: 400 });
    }

    const chunks: Buffer[] = [];

    await new Promise<void>((resolve, reject) => {
      const doc = new PDFDocument({
        size: 'A4',
        autoFirstPage: false,
        margins: { top: M_TOP, bottom: 45, left: M_LEFT, right: 57 },
      });

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', resolve);
      doc.on('error', reject);

      // ✅ Use built-in safe font (NO external files needed)
      doc.font('Times-Roman').fontSize(12);

      let cy = M_TOP + 2;

      function addPage() {
        doc.addPage();
        drawNotebookPage(doc);
        cy = M_TOP + 2;
      }

      function writeLine(lineText: string) {
        if (cy >= PAGE_H - 60) addPage();
        doc.fillColor('#0F2D8C');
        doc.text(lineText, M_LEFT, cy, { width: TXT_W, lineBreak: false });
        cy += LINE_H;
      }

      const clean = cleanMarkdown(text);
      const paragraphs = clean.split('\n');

      addPage();

      for (const para of paragraphs) {
        const trimmed = para.trim();

        if (!trimmed) {
          cy += LINE_H;
          if (cy >= PAGE_H - 60) addPage();
          continue;
        }

        const words = trimmed.split(' ');
        let bufLine = '';

        for (const word of words) {
          const test = bufLine ? `${bufLine} ${word}` : word;
          const w = doc.widthOfString(test);

          if (w <= TXT_W) {
            bufLine = test;
          } else {
            if (bufLine) writeLine(bufLine);
            bufLine = word;
          }
        }

        if (bufLine) writeLine(bufLine);
      }

      doc.end();
    });

    const pdfBuffer = Buffer.concat(chunks);

    const safe = (topic || 'assignment')
      .replace(/[^\w\s-]/g, '')
      .slice(0, 30)
      .trim()
      .replace(/\s+/g, '_');

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safe}_handwritten.pdf"`,
      },
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'PDF creation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
