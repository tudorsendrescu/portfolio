import { PenLine, Code2, Check } from 'lucide-react'
import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

const GROUPS = [
  {
    icon: PenLine,
    title: 'Copywriting',
    blurb: 'Words that move one reader to act — clear, persuasive, no filler.',
    items: [
      'Email sequences & campaigns',
      'Landing page & sales page copy',
      'Ads — Google, Meta, LinkedIn',
      'Scripts — video ads, VSLs, explainers',
      'Website & product copy',
      'Taglines & brand messaging',
    ],
  },
  {
    icon: Code2,
    title: 'Website building',
    blurb: 'Fast, responsive pages built from scratch — designed around the message.',
    items: [
      'Landing pages',
      'Marketing & product sites',
      'Responsive front-end builds (React / TypeScript)',
      'HTML email coding',
      'Speed & mobile optimization',
      'Deployment & hosting setup',
    ],
  },
]

export default function Services() {
  return (
    <div>
      <SectionHeading kicker="Services" title="The words, the website, or both." />
      <p
        style={{
          maxWidth: 720,
          fontFamily: font.sans,
          fontSize: 17,
          lineHeight: 1.7,
          color: c.textBody,
          margin: '0 0 36px',
        }}
      >
        Mix and match. Hire me for just the copy, just the website, or the whole thing built as one
        piece — you're never forced to take both.
      </p>
      <div style={{ display: 'grid', gap: 20 }} className="grid-cols-1 md:grid-cols-2">
        {GROUPS.map(({ icon: Icon, title, blurb, items }) => (
          <div
            key={title}
            style={{ backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: 12, padding: 28 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: c.accentIconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color={c.accent} />
              </div>
              <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 20, color: c.textPrimary, margin: 0 }}>
                {title}
              </h3>
            </div>
            <p style={{ fontFamily: font.sans, fontSize: 15, lineHeight: 1.5, color: c.textMuted, margin: '0 0 18px' }}>
              {blurb}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {items.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontFamily: font.sans,
                    fontSize: 16,
                    lineHeight: 1.45,
                    color: c.textBody,
                  }}
                >
                  <Check size={18} color={c.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
