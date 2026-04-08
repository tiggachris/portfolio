import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Your Name – Full-Stack Developer',
  description: 'Portfolio of Your Name, a Full-Stack Developer building scalable web applications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}