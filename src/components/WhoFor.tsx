import { Check } from 'lucide-react'
import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

const FITS = [
  'E-commerce brands that need product pages, emails, and ads that actually convert',
  'Influencers and creators turning an audience into sales',
  'Founders and small businesses selling a product or service online',
  "Anyone with something to sell whose words aren't pulling their weight",
]

export default function WhoFor() {
  return (
    <div style={{ maxWidth: 760 }}>
      <SectionHeading kicker="Who it's for" title="Made for people who sell." />
      <p style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, margin: '0 0 24px' }}>
        We're a fit if you're:
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
        Not selling anything — just need text to fill space? I'm probably not your person. Everything
        I write and build points at one thing: getting people to buy.
      </p>
    </div>
  )
}
