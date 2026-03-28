import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScribeMind AI – AI Assignment Generator',
  description: 'Generate perfectly formatted assignments or convert them into handwritten notebook pages instantly. Powered by cutting-edge AI.',
  keywords: ['AI assignment generator', 'handwritten PDF', 'student AI tool', 'ScribeMind'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
