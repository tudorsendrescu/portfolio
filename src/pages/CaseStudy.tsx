import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'
import { projects, getProject } from '../content/projects'
import Markdown from '../components/Markdown'
import { GithubIcon } from '../components/icons'

function NotFound() {
  return (
    <div style={{ maxWidth: SECTION_MAX, margin: '0 auto', padding: '160px 24px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: font.sans, color: c.textPrimary }}>Project not found</h1>
      <Link to="/" style={{ fontFamily: font.mono, color: c.accent, textDecoration: 'none' }}>
        ← Back home
      </Link>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <NotFound />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article style={{ maxWidth: 820, margin: '0 auto', padding: '120px 24px 96px' }}>
      <Link
        to="/work"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: font.mono, fontSize: 14, color: c.textMuted, textDecoration: 'none', marginBottom: 32 }}
      >
        <ArrowLeft size={15} />
        All work
      </Link>

      <div style={{ fontFamily: font.mono, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.accent, marginBottom: 14 }}>
        {project.tags.join(' · ')}
      </div>
      <h1 style={{ fontFamily: font.serif, fontWeight: 600, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.01em', color: c.textPrimary, margin: 0 }}>
        {project.title}
      </h1>
      <p style={{ fontFamily: font.sans, fontSize: 20, lineHeight: 1.5, color: c.textBody, margin: '16px 0 0' }}>
        {project.tagline}
      </p>

      {(project.role || project.stack || project.links.live || project.links.github) && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 24,
            alignItems: 'center',
            backgroundColor: c.card,
            border: `1px solid ${c.border}`,
            borderRadius: 12,
            padding: 20,
            margin: '32px 0',
          }}
        >
          {project.role && (
            <div style={{ flex: '1 1 220px' }}>
              <div style={{ fontFamily: font.mono, fontSize: 12, color: c.textMuted, marginBottom: 6 }}>ROLE</div>
              <div style={{ fontFamily: font.sans, fontSize: 15, color: c.textPrimary }}>{project.role}</div>
            </div>
          )}
          {project.stack && (
            <div style={{ flex: '1 1 220px' }}>
              <div style={{ fontFamily: font.mono, fontSize: 12, color: c.textMuted, marginBottom: 6 }}>STACK</div>
              <div style={{ fontFamily: font.sans, fontSize: 15, color: c.textPrimary }}>{project.stack.join(', ')}</div>
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: font.sans, fontWeight: 600, fontSize: 14, color: c.bg, backgroundColor: c.accent, padding: '9px 16px', borderRadius: 6, textDecoration: 'none' }}
              >
                <ExternalLink size={15} /> Live
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: font.sans, fontWeight: 500, fontSize: 14, color: c.textPrimary, border: `1px solid ${c.borderHard}`, padding: '9px 16px', borderRadius: 6, textDecoration: 'none' }}
              >
                <GithubIcon size={15} /> Code
              </a>
            )}
          </div>
        </div>
      )}

      <Markdown>{project.body}</Markdown>

      {project.gallery.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, margin: '40px 0' }}>
          {project.gallery.map((item, i) => (
            <figure key={item.src} style={{ margin: 0 }}>
              {(item.title || item.caption) && (
                <figcaption style={{ marginBottom: 16, textAlign: 'center' }}>
                  {item.title && (
                    <div style={{ fontFamily: font.serif, fontWeight: 600, fontSize: 21, color: c.textPrimary }}>
                      {item.title}
                    </div>
                  )}
                  {item.caption && (
                    <div style={{ fontFamily: font.sans, fontSize: 15, lineHeight: 1.55, color: c.textBody, maxWidth: 580, margin: '8px auto 0' }}>
                      {item.caption}
                    </div>
                  )}
                </figcaption>
              )}
              <img
                src={item.src}
                alt={item.title ?? `${project.title} — image ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', borderRadius: 12, border: `1px solid ${c.border}`, display: 'block' }}
              />
            </figure>
          ))}
        </div>
      )}

      {next && next.slug !== project.slug && (
        <Link
          to={`/work/${next.slug}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            backgroundColor: c.card,
            border: `1px solid ${c.border}`,
            borderRadius: 12,
            padding: 22,
            marginTop: 40,
            textDecoration: 'none',
          }}
        >
          <div>
            <div style={{ fontFamily: font.mono, fontSize: 12, color: c.textMuted, marginBottom: 6 }}>NEXT PROJECT</div>
            <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 19, color: c.textPrimary }}>{next.title}</div>
          </div>
          <ArrowRight size={20} color={c.accent} />
        </Link>
      )}
    </article>
  )
}
