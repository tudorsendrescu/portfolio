import { Mail } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'
import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${c.borderSoft}`, padding: '40px 24px' }}>
      <div
        style={{
          maxWidth: SECTION_MAX,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: font.mono, fontSize: 14, color: c.textMuted }}>
          © {site.name}
        </span>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginRight: 56 }}>
          <a href={`mailto:${site.email}`} aria-label="Email" style={{ color: c.textMuted, display: 'flex' }}>
            <Mail size={18} />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: c.textMuted, display: 'flex' }}>
            <GithubIcon size={18} />
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: c.textMuted, display: 'flex' }}>
              <LinkedinIcon size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
