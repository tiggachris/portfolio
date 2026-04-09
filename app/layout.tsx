import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio – Chris Tigga',
  description: 'Portfolio of Chris Tigga, a Full-Stack Developer building scalable web applications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}