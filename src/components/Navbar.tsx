import { Link } from 'react-router-dom'
import { c, font, SECTION_MAX } from '../theme'
import { site } from '../data/site'

export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(250,246,239,0.82)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${c.borderSoft}`,
      }}
    >
      <nav
        style={{
          maxWidth: SECTION_MAX,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: font.mono,
            fontWeight: 600,
            fontSize: 15,
            color: c.textPrimary,
            textDecoration: 'none',
          }}
        >
          {site.name}
        </Link>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div className="hidden sm:flex" style={{ gap: 24, alignItems: 'center' }}>
            <a
              href="/#work"
              style={{ fontFamily: font.sans, fontSize: 15, color: c.textMuted, textDecoration: 'none' }}
            >
              Work
            </a>
            <a
              href="/#services"
              style={{ fontFamily: font.sans, fontSize: 15, color: c.textMuted, textDecoration: 'none' }}
            >
              Services
            </a>
            <a
              href="/#about"
              style={{ fontFamily: font.sans, fontSize: 15, color: c.textMuted, textDecoration: 'none' }}
            >
              About
            </a>
          </div>
          <a
            href={`mailto:${site.email}`}
            style={{
              fontFamily: font.sans,
              fontWeight: 600,
              fontSize: 15,
              color: c.bg,
              backgroundColor: c.accent,
              padding: '8px 16px',
              borderRadius: 6,
              textDecoration: 'none',
            }}
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  )
}
