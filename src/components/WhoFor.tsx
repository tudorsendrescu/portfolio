import { Check } from 'lucide-react'
import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

const FITS = [
  'A SaaS or dev-tool founder who needs a page that speaks to a technical buyer',
  'A small team with no in-house copywriter and front-end developer (or the budget for both)',
  'Anyone tired of beautiful pages with weak words — or strong words trapped in an ugly template',
]

export default function WhoFor() {
  return (
    <div style={{ maxWidth: 760 }}>
      <SectionHeading kicker="Who it's for" title="Built for technical products." />
      <p style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, margin: '0 0 24px' }}>
        We're probably a good fit if you're:
      </p>
      <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {FITS.map((f) => (
          <li
            key={f}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              fontFamily: font.sans,
              fontSize: 17,
              lineHeight: 1.5,
              color: c.textBody,
            }}
          >
            <Check size={20} color={c.accent} style={{ flexShrink: 0, marginTop: 3 }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p style={{ fontFamily: font.sans, fontSize: 16, lineHeight: 1.6, color: c.textMuted, margin: 0 }}>
        Need a 50-page corporate site or a steady stream of blog content? I'm probably not your
        person — and I'll tell you that honestly rather than waste your time.
      </p>
    </div>
  )
}
