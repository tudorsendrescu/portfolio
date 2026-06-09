import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

type Testimonial = { quote: string; name: string; role: string }

// Add real testimonials here as they come in, e.g.:
// { quote: 'Tudor rewrote our launch emails and sales doubled.', name: 'Jane Doe', role: 'Founder, Acme' },
const TESTIMONIALS: Testimonial[] = []

function PlaceholderCard() {
  return (
    <div style={{ backgroundColor: c.card, border: `1px dashed ${c.borderHard}`, borderRadius: 12, padding: 26 }}>
      <div style={{ fontFamily: font.serif, fontSize: 46, lineHeight: 1, color: c.accentBorder, margin: '0 0 6px' }}>“</div>
      <p style={{ fontFamily: font.sans, fontSize: 16, lineHeight: 1.6, color: c.textMuted, fontStyle: 'italic', margin: '0 0 18px' }}>
        A client's words about working with me will live right here.
      </p>
      <div style={{ fontFamily: font.mono, fontSize: 13, color: c.textFaint }}>— Reserved for you</div>
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      style={{
        backgroundColor: c.card,
        border: `1px solid ${c.border}`,
        borderRadius: 12,
        padding: 26,
        boxShadow: '0 1px 3px rgba(33,27,22,0.05)',
      }}
    >
      <div style={{ fontFamily: font.serif, fontSize: 46, lineHeight: 1, color: c.accent, margin: '0 0 6px' }}>“</div>
      <p style={{ fontFamily: font.sans, fontSize: 16, lineHeight: 1.6, color: c.textBody, margin: '0 0 18px' }}>{t.quote}</p>
      <div style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 15, color: c.textPrimary }}>{t.name}</div>
      <div style={{ fontFamily: font.mono, fontSize: 13, color: c.textMuted }}>{t.role}</div>
    </div>
  )
}

export default function Testimonials() {
  const hasReal = TESTIMONIALS.length > 0

  return (
    <div>
      <SectionHeading kicker="Kind words" title="What clients say." />
      {!hasReal && (
        <p style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, maxWidth: 640, margin: '0 0 36px' }}>
          This space is reserved for the people I work with. I'd rather show real words than invent
          them — so it stays empty until they're earned.
        </p>
      )}
      <div style={{ display: 'grid', gap: 20 }} className="grid-cols-1 md:grid-cols-3">
        {hasReal
          ? TESTIMONIALS.map((t) => <TestimonialCard key={t.name} t={t} />)
          : [0, 1, 2].map((i) => <PlaceholderCard key={i} />)}
      </div>
    </div>
  )
}
