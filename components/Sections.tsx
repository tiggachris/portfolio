/* ─── About ─────────────────────────────────────────────────── */
'use client';
import styles from './Sections.module.css';

const skills = [
  { name: 'React',       icon: '⚛️' },
  { name: 'Next.js',     icon: '▲' },
  { name: 'TypeScript',  icon: '🔷' },
  { name: 'Node.js',     icon: '🟢' },
  { name: 'Python',      icon: '🐍' },
  { name: 'PostgreSQL',  icon: '🗄️' },
  { name: 'Docker',      icon: '🐳' },
  { name: 'AWS',         icon: '☁️' },
  { name: 'Three.js',    icon: '🌐' },
  { name: 'Tailwind',    icon: '🎨' },
  { name: 'GraphQL',     icon: '🔗' },
  { name: 'Redis',       icon: '🔴' },
];

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Acme Corp',
    period: '2022 – Present',
    desc: 'Led development of a microservices platform serving 500k+ users. Built real-time dashboards, optimised DB queries by 60%, and mentored junior engineers.',
  },
  {
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    desc: 'Built React + TypeScript SPA from scratch, integrated payment gateways, and shipped a design system used across 4 products.',
  },
  {
    role: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 – 2020',
    desc: 'Developed responsive websites for 30+ clients. Introduced automated testing, cutting regression bugs by 40%.',
  },
];

const projects = [
  {
    tag: 'Full Stack',
    title: 'E-Commerce Platform',
    desc: 'Complete shopping platform with auth, cart, Stripe payments, and admin dashboard built with Next.js and Node.',
    live: '#',
    github: '#',
  },
  {
    tag: 'AI / ML',
    title: 'Chat with Docs',
    desc: 'Upload any PDF and chat with it using an LLM. Built with Python, LangChain, and a Next.js frontend.',
    live: '#',
    github: '#',
  },
  {
    tag: 'Frontend',
    title: 'Analytics Dashboard',
    desc: 'Real-time data visualization dashboard with charts, filters, and role-based access control using React and D3.',
    live: '#',
    github: '#',
  },
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <span className={styles.label}>// about me</span>
      <h2 className={styles.title}>Who I Am</h2>
      <div className={styles.aboutGrid}>
        <p className={styles.aboutText}>
          I&apos;m a passionate full-stack developer with a love for creating clean, efficient,
          and user-friendly web applications. With expertise in both front-end and back-end
          technologies, I bridge the gap between great design and solid engineering.
          <br /><br />
          When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
          to open-source projects, or sharing what I&apos;ve learned with the dev community.
        </p>
        <div className={styles.statGrid}>
          {[['3+', 'Years Experience'], ['20+', 'Projects Built'], ['10+', 'Happy Clients'], ['5K+', 'GitHub Stars']].map(([n, l]) => (
            <div key={l} className={styles.statCard}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <span className={styles.label}>// skills</span>
      <h2 className={styles.title}>What I Work With</h2>
      <div className={styles.skillsGrid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.skillChip}>
            <span className={styles.skillIcon}>{s.icon}</span>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <span className={styles.label}>// experience</span>
      <h2 className={styles.title}>Where I&apos;ve Worked</h2>
      <div className={styles.timeline}>
        {experiences.map((e, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <div>
                  <p className={styles.timelineRole}>{e.role}</p>
                  <p className={styles.timelineCompany}>{e.company}</p>
                </div>
                <span className={styles.timelinePeriod}>{e.period}</span>
              </div>
              <p className={styles.timelineDesc}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <span className={styles.label}>// projects</span>
      <h2 className={styles.title}>Things I&apos;ve Built</h2>
      <div className={styles.projectsGrid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.projectCard}>
            <span className={styles.projectTag}>{p.tag}</span>
            <h3 className={styles.projectTitle}>{p.title}</h3>
            <p className={styles.projectDesc}>{p.desc}</p>
            <div className={styles.projectLinks}>
              <a href={p.live} className={styles.projectLink} target="_blank" rel="noreferrer">Live →</a>
              <a href={p.github} className={styles.projectLink} target="_blank" rel="noreferrer">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <span className={styles.label}>// contact</span>
      <h2 className={styles.title}>Let&apos;s Work Together</h2>
      <div className={styles.contactCard}>
        <p className={styles.contactHeading}>Got a project in mind?</p>
        <p className={styles.contactDesc}>
          I&apos;m currently open to freelance projects and full-time opportunities.
          Feel free to reach out and let&apos;s build something great together.
        </p>
        <a href="mailto:yourname@email.com" className={styles.emailBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          yourname@email.com
        </a>
        <div className={styles.contactSocials}>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}