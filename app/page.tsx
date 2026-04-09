'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { About, Skills, Experience, Projects, Contact } from '@/components/Sections';

// Three.js must be loaded client-side only (no SSR)
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        style={{
          textAlign: 'center',
          padding: '2rem',
          color: '#475569',
          fontSize: '0.82rem',
          borderTop: '0.5px solid rgba(0,212,200,0.1)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Designed & built by{' '}
        <span style={{ color: '#00d4c8' }}>Chris Tigga</span> · {new Date().getFullYear()}
      </footer>
    </>
  );
}