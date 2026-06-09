import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'
import { site } from '../data/site'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const colorFor = (to: string) => {
    const active = to === '/' ? pathname === '/' : pathname.startsWith(to)
    return active ? c.textPrimary : c.textMuted
  }

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
          onClick={() => setOpen(false)}
          style={{ fontFamily: font.mono, fontWeight: 600, fontSize: 15, color: c.textPrimary, textDecoration: 'none' }}
        >
          {site.name}
        </Link>

        <div className="hidden md:flex" style={{ gap: 24, alignItems: 'center' }}>
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              style={{ fontFamily: font.sans, fontSize: 15, color: colorFor(n.to), textDecoration: 'none', transition: 'color 150ms ease' }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
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
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: c.textPrimary, padding: 4 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          className="flex flex-col md:hidden"
          style={{ borderTop: `1px solid ${c.borderSoft}`, padding: '12px 24px 20px', gap: 4 }}
        >
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              style={{ fontFamily: font.sans, fontSize: 16, color: colorFor(n.to), textDecoration: 'none', padding: '10px 0' }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 8,
              fontFamily: font.sans,
              fontWeight: 600,
              fontSize: 16,
              color: c.bg,
              backgroundColor: c.accent,
              padding: '12px 16px',
              borderRadius: 6,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
