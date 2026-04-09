'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id:any) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>&lt;CT/&gt;</div>

      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className={styles.link}>{l}</button>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={() => scrollTo('Contact')}>
        Let&apos;s Talk
      </button>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className={styles.mobileLink}>{l}</button>
          ))}
          <button className={styles.cta} onClick={() => scrollTo('Contact')}>Let&apos;s Talk</button>
        </div>
      )}
    </nav>
  );
}