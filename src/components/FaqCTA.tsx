import { useState } from 'react'
import { Link } from 'react-router-dom'
import { c, font } from '../theme'

export default function FaqCTA() {
  const [hover, setHover] = useState(false)

  return (
    <div style={{ backgroundColor: c.textPrimary, borderRadius: 18, padding: '64px 32px', textAlign: 'center' }}>
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 13,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 18,
        }}
      >
        Didn't find the answer?
      </div>
      <h2
        style={{
          fontFamily: font.serif,
          fontWeight: 600,
          fontSize: 'clamp(28px, 4vw, 44px)',
          letterSpacing: '-0.01em',
          color: '#FBF7F0',
          margin: 0,
        }}
      >
        Contact me directly.
      </h2>
      <p
        style={{
          fontFamily: font.sans,
          fontSize: 18,
          lineHeight: 1.6,
          color: 'rgba(251,247,240,0.75)',
          maxWidth: 520,
          margin: '18px auto 0',
        }}
      >
        If you have another question, or you'd like to talk through your specific situation, I'm happy
        to help.
      </p>
      <Link
        to="/contact"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginTop: 32,
          fontFamily: font.sans,
          fontWeight: 600,
          fontSize: 17,
          color: c.bg,
          backgroundColor: c.accent,
          padding: '14px 32px',
          borderRadius: 6,
          textDecoration: 'none',
          boxShadow: hover ? `0 0 24px ${c.accentGlow}` : 'none',
          transition: 'box-shadow 150ms ease',
        }}
      >
        Send a message
      </Link>
    </div>
  )
}
