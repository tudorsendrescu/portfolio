import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'
import { site } from '../data/site'

type NavChild = { to: string; label: string }
type NavLink = { to: string; label: string; children?: NavChild[] }

const NAV: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Portfolio' },
  {
    to: '/services',
    label: 'Services',
    children: [
      { to: '/services/copywriting', label: 'Copywriting' },
      { to: '/services/web', label: 'Website building' },
    ],
  },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
]

function colorFor(pathname: string, to: string) {
  const active = to === '/' ? pathname === '/' : pathname.startsWith(to)
  return active ? c.textPrimary : c.textMuted
}

function DesktopItem({ item, pathname }: { item: NavLink; pathname: string }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <Link
        to={item.to}
        style={{ fontFamily: font.sans, fontSize: 15, color: colorFor(pathname, item.to), textDecoration: 'none', transition: 'color 150ms ease' }}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} style={{ position: 'relative' }}>
      <Link
        to={item.to}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontFamily: font.sans,
          fontSize: 15,
          color: colorFor(pathname, item.to),
          textDecoration: 'none',
          transition: 'color 150ms ease',
        }}
      >
        {item.label}
        <ChevronDown size={15} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }} />
      </Link>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 12 }}>
          <div
            style={{
              backgroundColor: '#fff',
              border: `1px solid ${c.border}`,
              borderRadius: 10,
              boxShadow: '0 16px 40px rgba(33,27,22,0.12)',
              padding: 8,
              minWidth: 220,
            }}
          >
            {item.children.map((ch) => (
              <Link
                key={ch.to}
                to={ch.to}
                className="menuitem"
                style={{ display: 'block', padding: '11px 14px', borderRadius: 6, fontFamily: font.sans, fontSize: 15, color: c.textPrimary, textDecoration: 'none' }}
              >
                {ch.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

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
            <DesktopItem key={n.to} item={n} pathname={pathname} />
          ))}
          <Link
            to="/contact"
            style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 15, color: c.bg, backgroundColor: c.accent, padding: '8px 16px', borderRadius: 6, textDecoration: 'none' }}
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
        <div className="flex flex-col md:hidden" style={{ borderTop: `1px solid ${c.borderSoft}`, padding: '12px 24px 20px', gap: 4 }}>
          {NAV.map((n) =>
            n.children ? (
              <div key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', fontFamily: font.sans, fontSize: 16, color: colorFor(pathname, n.to), textDecoration: 'none', padding: '10px 0' }}
                >
                  {n.label}
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 14 }}>
                  {n.children.map((ch) => (
                    <Link
                      key={ch.to}
                      to={ch.to}
                      onClick={() => setOpen(false)}
                      style={{ fontFamily: font.sans, fontSize: 15, color: colorFor(pathname, ch.to), textDecoration: 'none', padding: '8px 0' }}
                    >
                      {ch.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                style={{ fontFamily: font.sans, fontSize: 16, color: colorFor(pathname, n.to), textDecoration: 'none', padding: '10px 0' }}
              >
                {n.label}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{ marginTop: 8, fontFamily: font.sans, fontWeight: 600, fontSize: 16, color: c.bg, backgroundColor: c.accent, padding: '12px 16px', borderRadius: 6, textDecoration: 'none', textAlign: 'center' }}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
