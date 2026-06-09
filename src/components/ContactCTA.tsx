import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { c, font } from '../theme'
import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

const cream = '#FBF7F0'
const creamMuted = 'rgba(251,247,240,0.72)'

export default function ContactCTA() {
  const [hover, setHover] = useState(false)

  return (
    <div style={{ backgroundColor: c.textPrimary, borderRadius: 18, padding: '56px 32px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: font.serif, fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', color: cream, margin: 0 }}>
        Let's work together.
      </h2>
      <p style={{ fontFamily: font.sans, fontSize: 18, lineHeight: 1.55, color: creamMuted, maxWidth: 540, margin: '16px auto 0' }}>
        Tell me what you're building and who it's for — or just what's not working. I'll send back an
        honest, no-pressure read on your situation, and if I can help, exactly how I'd approach it.
        Even a quick second opinion is fair game.
      </p>
      <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/contact"
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
          Get in touch
          <ArrowRight size={18} />
        </Link>
      </div>
      <div style={{ marginTop: 14, fontFamily: font.sans, fontSize: 14, color: creamMuted }}>
        Prefer email?{' '}
        <a href={`mailto:${site.email}`} style={{ color: c.accent, textDecoration: 'none' }}>
          {site.email}
        </a>
      </div>
      <div style={{ marginTop: 24, display: 'flex', gap: 18, justifyContent: 'center', alignItems: 'center' }}>
        <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: creamMuted, display: 'flex' }}>
          <GithubIcon size={20} />
        </a>
        {site.linkedin && (
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: creamMuted, display: 'flex' }}>
            <LinkedinIcon size={20} />
          </a>
        )}
      </div>
    </div>
  )
}
