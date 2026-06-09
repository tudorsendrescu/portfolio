import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { c, font } from '../theme'

export default function SectionCTA({
  line,
  label = "Let's talk",
  href = '/contact',
}: {
  line: string
  label?: string
  href?: string
}) {
  const [hover, setHover] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 44,
      }}
    >
      <span style={{ fontFamily: font.sans, fontSize: 18, color: c.textBody }}>{line}</span>
      <Link
        to={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 9,
          fontFamily: font.sans,
          fontWeight: 600,
          fontSize: 16,
          color: c.bg,
          backgroundColor: c.accent,
          padding: '12px 22px',
          borderRadius: 6,
          textDecoration: 'none',
          boxShadow: hover ? `0 0 24px ${c.accentGlow}` : 'none',
          transition: 'box-shadow 150ms ease',
        }}
      >
        {label}
        <ArrowRight size={17} />
      </Link>
    </div>
  )
}
