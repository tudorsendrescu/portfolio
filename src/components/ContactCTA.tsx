import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { c, font } from '../theme'
import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

export default function ContactCTA() {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: c.card,
        border: `1px solid ${c.accentBorderSoft}`,
        borderRadius: 16,
        padding: '56px 32px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,232,125,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative' }}>
        <h2
          style={{
            fontFamily: font.sans,
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: c.textPrimary,
            margin: 0,
          }}
        >
          Let's work together.
        </h2>
        <p style={{ fontFamily: font.sans, fontSize: 18, lineHeight: 1.55, color: c.textBody, maxWidth: 520, margin: '16px auto 0' }}>
          Have a product that needs the right words and a page that delivers them? Send me a note.
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href={`mailto:${site.email}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: font.sans,
              fontWeight: 600,
              fontSize: 17,
              color: c.bg,
              backgroundColor: c.accent,
              padding: '14px 28px',
              borderRadius: 6,
              textDecoration: 'none',
              boxShadow: hover ? `0 0 24px ${c.accentGlow}` : 'none',
              transition: 'box-shadow 150ms ease',
            }}
          >
            {site.email}
            <ArrowRight size={18} />
          </a>
        </div>
        <div style={{ marginTop: 24, display: 'flex', gap: 18, justifyContent: 'center', alignItems: 'center' }}>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: c.textMuted, display: 'flex' }}>
            <GithubIcon size={20} />
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: c.textMuted, display: 'flex' }}>
              <LinkedinIcon size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
