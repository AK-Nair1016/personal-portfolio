import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const LINES = [
  '$ whoami',
  'Aman K - Software Engineer',
  '$ cat focus.txt',
  '2025 CSE graduate in Bangalore building AI-native products.',
  '$ grep -i "open_to" profile.json',
  'India | Remote | UAE teams',
]

const quickFacts = [
  ['Location', 'Bangalore, India'],
  ['Role target', 'Software Engineer / Full-stack Developer'],
  ['Graduation', 'Computer Science Engineering, 2025'],
  ['Availability', 'India, remote, hybrid'],
]

const skillGroups = [
  {
    label: 'Product stack',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Vite'],
  },
  {
    label: 'Programming',
    items: ['Java', 'Python', 'JavaScript', 'Data structures', 'OOP'],
  },
  {
    label: 'AI-native workflow',
    items: ['AI-assisted development', 'Prompt engineering', 'RAG concepts', 'ML basics'],
  },
  {
    label: 'Engineering habits',
    items: ['Clean UI flows', 'API integration', 'Data modeling', 'Iterative shipping'],
  },
]

const experienceHighlights = [
  {
    role: 'Full-stack product builder',
    meta: 'MERN projects | 2024-present',
    bullets: [
      'Designing and building end-to-end web applications with React, Node.js, Express, and MongoDB.',
      'Turning vague product ideas into usable screens, structured APIs, and practical data models.',
      'Using AI tools thoughtfully to accelerate development while keeping product behavior clear and inspectable.',
    ],
  },
  {
    role: 'Machine learning explorer',
    meta: 'Python projects | 2024-present',
    bullets: [
      'Built a race-strategy analysis project around F1 timing data, tyre degradation, and pit-window prediction.',
      'Worked through noisy data, feature choices, and model tradeoffs with Pandas and Scikit-learn.',
      'Interested in AI features that improve real workflows instead of sitting on top as a novelty layer.',
    ],
  },
]

const journey = [
  {
    date: '2021-2025',
    title: 'Computer Science Engineering',
    detail: 'Built the technical foundation: programming, web development, data structures, and software fundamentals.',
  },
  {
    date: '2024',
    title: 'Shifted toward product-style engineering',
    detail: 'Started focusing on complete experiences: frontends, APIs, databases, and the decisions that connect them.',
  },
  {
    date: '2025',
    title: 'Graduated and moved into the job search',
    detail: 'Looking for a first software engineering role where I can contribute, learn fast, and build useful AI-aware products.',
  },
]

const socials = [
  { label: 'Email', href: 'mailto:aman@example.com', note: 'Replace with primary email' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman-kuttannair/', note: 'Professional profile' },
  { label: 'GitHub', href: 'https://github.com/', note: 'Code and experiments' },
  { label: 'Projects', href: '/projects', note: 'Selected work', internal: true },
]

const styles = {
  page: {
    display: 'grid',
    gap: 18,
  },
  profileShell: {
    border: '1px solid var(--line)',
    background:
      'linear-gradient(135deg, rgba(255, 176, 0, 0.08), rgba(157, 181, 99, 0.035) 42%, rgba(21, 16, 10, 0.94) 100%)',
    borderRadius: 4,
    padding: 18,
    marginBottom: 10,
    boxShadow: '0 24px 80px -48px rgba(255, 176, 0, 0.5)',
  },
  eyebrow: {
    color: 'var(--phosphor)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: 0,
    marginBottom: 12,
  },
  heroGrid: {
    display: 'grid',
    gap: 18,
  },
  title: {
    fontSize: 'clamp(34px, 8vw, 68px)',
    lineHeight: 0.95,
    margin: 0,
    fontWeight: 600,
    letterSpacing: 0,
  },
  subtitle: {
    color: 'var(--paper)',
    fontSize: 17,
    lineHeight: 1.65,
    maxWidth: 680,
    margin: '18px 0 0',
  },
  factGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: 10,
    marginTop: 22,
  },
  fact: {
    border: '1px solid var(--line)',
    background: 'rgba(10, 8, 6, 0.38)',
    borderRadius: 3,
    padding: '12px 14px',
  },
  factLabel: {
    display: 'block',
    color: 'var(--ash)',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    marginBottom: 5,
  },
  factValue: {
    color: 'var(--paper)',
    fontSize: 14,
    lineHeight: 1.45,
  },
  section: {
    border: '1px solid var(--line)',
    borderLeft: '2px solid var(--phosphor-dim)',
    background: 'rgba(21, 16, 10, 0.72)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  summary: {
    cursor: 'pointer',
    listStyle: 'none',
    padding: '16px 18px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--paper)',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    alignItems: 'center',
  },
  summaryKicker: {
    color: 'var(--phosphor-dim)',
    fontSize: 12,
    marginRight: 10,
  },
  summaryHint: {
    color: 'var(--ash)',
    fontSize: 12,
    whiteSpace: 'nowrap',
  },
  sectionBody: {
    borderTop: '1px solid var(--line)',
    padding: '18px',
  },
  muted: {
    color: 'var(--ash)',
  },
  mono: {
    fontFamily: 'var(--font-mono)',
  },
  ctaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 20,
  },
  button: {
    border: '1px solid var(--phosphor-dim)',
    color: 'var(--phosphor)',
    borderRadius: 3,
    padding: '10px 14px',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    background: 'rgba(255, 176, 0, 0.055)',
    textDecoration: 'none',
  },
  ghostButton: {
    border: '1px solid var(--line)',
    color: 'var(--paper)',
    borderRadius: 3,
    padding: '10px 14px',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    background: 'rgba(10, 8, 6, 0.24)',
    textDecoration: 'none',
  },
  listGrid: {
    display: 'grid',
    gap: 14,
  },
  timelineItem: {
    display: 'grid',
    gridTemplateColumns: '96px 1fr',
    gap: 16,
    padding: '14px 0',
    borderBottom: '1px solid var(--line)',
  },
}

function useTypewriter(lines) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const full = lines.join('\n')
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOutput(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 14)
    return () => clearInterval(id)
  }, [lines])

  return { output, done }
}

function ExpandableSection({ code, title, children, open = false }) {
  return (
    <details style={styles.section} open={open}>
      <summary style={styles.summary}>
        <span>
          <span style={styles.summaryKicker}>{code}</span>
          {title}
        </span>
        <span style={styles.summaryHint}>expand</span>
      </summary>
      <div style={styles.sectionBody}>{children}</div>
    </details>
  )
}

function SocialLink({ item }) {
  if (item.internal) {
    return (
      <Link to={item.href} style={styles.ghostButton}>
        {item.label} <span style={styles.muted}>/ {item.note}</span>
      </Link>
    )
  }

  return (
    <a
      href={item.href}
      style={styles.ghostButton}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      {item.label} <span style={styles.muted}>/ {item.note}</span>
    </a>
  )
}

export default function Home() {
  const { output, done } = useTypewriter(LINES)
  const featured = projects.slice(0, 2)

  return (
    <div style={styles.page}>
      <section style={styles.profileShell}>
        <div style={styles.heroGrid}>
          <div>
            <h1 style={styles.title}>Aman K</h1>
            <p style={styles.subtitle}>
              2025 Computer Science Engineering graduate in Bangalore building full-stack,
              AI-native products with MERN, Java, and Python. I like practical systems:
              clean interfaces, usable data models, and AI features that earn their place.
            </p>
            <div style={styles.ctaRow}>
              <a href="/Aman_Kuttannair_Resume.pdf" download style={styles.button}>
                download resume
              </a>
              <Link to="/projects" style={styles.ghostButton}>
                view projects
              </Link>
            </div>
          </div>
          <div style={styles.factGrid}>
            {quickFacts.map(([label, value]) => (
              <div style={styles.fact} key={label}>
                <span style={styles.factLabel}>{label}</span>
                <span style={styles.factValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpandableSection code="00" title="Profile" open>
        <div className="terminal" style={{ marginBottom: 0 }}>
          <div className="terminal-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <pre className="terminal-output">
            {output}
            {!done && <span className="cursor" />}
          </pre>
        </div>
      </ExpandableSection>

      <ExpandableSection code="01" title="About Me" open>
        <p style={{ marginTop: 0 }}>
          I am at the start of my software engineering career, but I already know the kind of
          work that pulls me in: building products end-to-end and making them feel coherent.
          My strongest direction right now is full-stack development with AI folded into the
          product where it actually improves the workflow.
        </p>
        <p style={{ marginBottom: 0 }}>
          I am looking for a first engineering role, where I can contribute quickly, learn from sharper engineers, and keep shipping
          projects that move from idea to interface to a working system.
        </p>
      </ExpandableSection>

      <ExpandableSection code="02" title="skills">
        <div style={styles.listGrid}>
          {skillGroups.map((group) => (
            <div className="skills-group" style={{ marginBottom: 0 }} key={group.label}>
              <h4>{group.label}</h4>
              <div className="skills-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ExpandableSection>

      <ExpandableSection code="03" title="experience">
        <div style={styles.listGrid}>
          {experienceHighlights.map((item) => (
            <article className="card" style={{ marginBottom: 0 }} key={item.role}>
              <h3>{item.role}</h3>
              <div className="card-meta">{item.meta}</div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ExpandableSection>

      <ExpandableSection code="04" title="journey">
        <div>
          {journey.map((item) => (
            <div style={styles.timelineItem} key={item.title}>
              <div style={{ ...styles.mono, color: 'var(--phosphor-dim)', fontSize: 12 }}>
                {item.date}
              </div>
              <div>
                <h3 style={{ margin: '0 0 6px', fontSize: 17 }}>{item.title}</h3>
                <p style={{ margin: 0, color: 'var(--ash)' }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </ExpandableSection>

      <ExpandableSection code="05" title="selected project evidence" open>
        <div style={styles.listGrid}>
          {featured.map((project) => (
            <Link to="/projects" key={project.slug} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ marginBottom: 0 }}>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
                <div className="card-meta">[{project.stack.join(', ')}]</div>
              </div>
            </Link>
          ))}
        </div>
      </ExpandableSection>

      <ExpandableSection code="06" title="resume / contact">
        <p style={{ marginTop: 0 }}>
          For recruiters and engineering teams: the fastest path is the resume download, then the
          project page for proof-of-work context.
        </p>
        <div style={styles.ctaRow}>
          <a href="/Aman_K_Resume.pdf" download style={styles.button}>
            download resume pdf
          </a>
          <Link to="/contact" style={styles.ghostButton}>
            contact Aman
          </Link>
        </div>
      </ExpandableSection>

      <ExpandableSection code="07" title="social links" open>
        <div style={styles.ctaRow}>
          {socials.map((item) => (
            <SocialLink item={item} key={item.label} />
          ))}
        </div>
      </ExpandableSection>
    </div>
  )
}
