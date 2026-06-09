import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'
import { site } from '../data/site'
import { GithubIcon } from './icons'

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 144,
        paddingBottom: 96,
        paddingLeft: 24,
        paddingRight: 24,
        overflow: 'hidden',
      }}
    >
      {/* grid texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(33,27,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,27,22,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />
      {/* green glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(232,112,79,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: SECTION_MAX,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: `1px solid ${c.accentBorder}`,
            backgroundColor: c.accentBg,
            borderRadius: 9999,
            padding: '7px 16px',
          }}
        >
          <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: 9999, backgroundColor: c.accent }} />
          <span style={{ fontFamily: font.mono, fontWeight: 500, fontSize: 14, color: c.accent }}>
            {site.role}
          </span>
        </div>

        <h1
          style={{
            fontFamily: font.serif,
            fontWeight: 600,
            fontSize: 'clamp(44px, 7vw, 82px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: c.textPrimary,
            margin: '30px 0 0',
            maxWidth: 900,
          }}
        >
          I write the copy
          <br />
          <span style={{ color: c.accent }}>and build the page.</span>
        </h1>

        <p
          style={{
            fontFamily: font.sans,
            fontWeight: 400,
            fontSize: 21,
            lineHeight: 1.55,
            color: c.textBody,
            maxWidth: 660,
            margin: '28px 0 0',
          }}
        >
          {site.subheadline}
        </p>

        <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#work"
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: font.sans,
              fontWeight: 600,
              fontSize: 17,
              color: c.bg,
              backgroundColor: c.accent,
              padding: '14px 26px',
              borderRadius: 6,
              textDecoration: 'none',
              boxShadow: primaryHover ? `0 0 24px ${c.accentGlow}` : 'none',
              transition: 'box-shadow 150ms ease',
            }}
          >
            See my work
            <ArrowRight size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: font.sans,
              fontWeight: 500,
              fontSize: 17,
              color: secondaryHover ? c.textPrimary : c.textMuted,
              border: `1px solid ${c.borderHard}`,
              padding: '14px 26px',
              borderRadius: 6,
              textDecoration: 'none',
              transition: 'color 150ms ease',
            }}
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
