import { useState } from 'react'
import { projects } from '../data/projects.js'

const styles = {
  shell: {
    display: 'grid',
    gap: 22,
  },
  intro: {
    display: 'grid',
    gap: 10,
    marginBottom: 8,
  },
  eyebrow: {
    margin: 0,
    color: 'var(--ash)',
    fontSize: 12,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  headline: {
    margin: 0,
    maxWidth: 760,
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(30px, 6vw, 58px)',
    lineHeight: 0.96,
    letterSpacing: 0,
  },
  deck: {
    margin: 0,
    maxWidth: 680,
    color: 'var(--ash)',
    fontSize: 16,
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gap: 18,
  },
  projectSection: {
    display: 'grid',
    gap: 16,
    padding: '22px 0',
    borderTop: '1px solid var(--line)',
  },
  sectionHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  meta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  pill: {
    border: '1px solid var(--line)',
    borderRadius: 999,
    padding: '5px 9px',
    color: 'var(--ash)',
    fontSize: 12,
    lineHeight: 1,
  },
  title: {
    margin: 0,
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(22px, 4vw, 34px)',
    lineHeight: 1.05,
    letterSpacing: 0,
  },
  tagline: {
    margin: '10px 0 0',
    maxWidth: 660,
    color: 'var(--ash)',
    lineHeight: 1.6,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    gap: 8,
  },
  link: {
    border: '1px solid var(--line)',
    borderRadius: 6,
    padding: '8px 10px',
    color: 'var(--paper)',
    textDecoration: 'none',
    fontSize: 13,
    lineHeight: 1,
  },
}

const FILES = [
  { key: 'overview', label: 'overview.md' },
  { key: 'approach', label: 'approach.md' },
  { key: 'features', label: 'features.md' },
  { key: 'challenges', label: 'challenges.md' },
]

function ProjectWindow({ project }) {
  const [active, setActive] = useState('overview')

  return (
    <div className="editor-window">
      <div className="editor-titlebar">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="editor-project-name">{project.slug}/</span>
      </div>

      <div className="editor-tabs">
        {FILES.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`editor-tab ${active === f.key ? 'active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="editor-body">
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 19, marginTop: 0, letterSpacing: 0 }}>
          {project.title}
        </h3>

        <div className="frontmatter">
          {project.category && <div><span className="key">type:</span> <span className="val">{project.category}</span></div>}
          <div><span className="key">stack:</span> <span className="val">[{project.stack.join(', ')}]</span></div>
          <div><span className="key">status:</span> <span className="val">{project.status}</span></div>
          {project.year && <div><span className="key">year:</span> <span className="val">{project.year}</span></div>}
        </div>

        {active === 'overview' && <p>{project.overview}</p>}
        {active === 'approach' && <p>{project.approach}</p>}
        {active === 'features' && (
          <ul>
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        )}
        {active === 'challenges' && <p>{project.challenges}</p>}

        <div className="editor-links">
          <a href={project.demoUrl} target="_blank" rel="noreferrer">live site</a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">github</a>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article style={styles.projectSection}>
      <div style={styles.sectionHeader}>
        <div>
          <div style={styles.meta}>
            <span style={styles.pill}>0{index + 1}</span>
            <span style={styles.pill}>{project.category}</span>
            <span style={styles.pill}>{project.status}</span>
          </div>
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.tagline}>{project.tagline}</p>
        </div>

        <div style={styles.actions} aria-label={`${project.title} links`}>
          <a style={styles.link} href={project.demoUrl} target="_blank" rel="noreferrer">
            Live
          </a>
          <a style={styles.link} href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <ProjectWindow project={project} />
    </article>
  )
}

export default function Projects() {
  return (
    <section style={styles.shell}>
      <h2 className="section-title">projects</h2>

      <header style={styles.intro}>
        <p style={styles.eyebrow}>Selected builds / placeholders</p>
        <h1 style={styles.headline}>Project rooms for work that can grow into full case studies.</h1>
        <p style={styles.deck}>
          These are placeholder entries for now, structured so each project has a live destination,
          a repository, scan-friendly metadata, and expandable notes.
        </p>
      </header>

      <div style={styles.grid}>
        {projects.map((p, index) => (
          <ProjectCard project={p} index={index} key={p.slug} />
        ))}
      </div>
    </section>
  )
}
