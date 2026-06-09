import { useState } from 'react'
import { Link } from 'react-router-dom'
import { c, font } from '../theme'
import type { Project, ProjectType } from '../content/types'

const TYPE_LABEL: Record<ProjectType, string> = {
  copywriting: 'Copywriting',
  development: 'Development',
  hybrid: 'Copy + Build',
}

export default function ProjectCard({ project }: { project: Project }) {
  const [hover, setHover] = useState(false)

  return (
    <Link
      to={`/work/${project.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        backgroundColor: hover ? c.cardHover : c.card,
        border: `1px solid ${hover ? c.borderHard : c.border}`,
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: hover ? '0 16px 40px rgba(33,27,22,0.12)' : '0 1px 3px rgba(33,27,22,0.05)',
        transition: 'background-color 150ms ease, border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {project.cover && (
        <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', borderBottom: `1px solid ${c.borderSoft}` }}>
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}
      <div style={{ padding: 22 }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 12,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: c.accent,
            marginBottom: 10,
          }}
        >
          {TYPE_LABEL[project.type]}
        </div>
        <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 21, color: c.textPrimary, margin: 0 }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: font.sans, fontSize: 15, lineHeight: 1.5, color: c.textBody, margin: '8px 0 0' }}>
          {project.tagline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: font.mono,
                fontSize: 12,
                color: c.textMuted,
                border: `1px solid ${c.borderSoft}`,
                borderRadius: 9999,
                padding: '3px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
