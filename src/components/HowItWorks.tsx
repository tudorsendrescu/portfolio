import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

const STEPS = [
  {
    n: 1,
    title: 'You tell me the goal',
    body: "What you're launching, who it's for, and what a win looks like. Still figuring it out? Even better — we can talk through the offer, the audience, and what's getting in the way, and I'll give you my honest take before we commit to anything.",
  },
  {
    n: 2,
    title: 'I write and build it',
    body: "You get the copy and a working, responsive page — designed as one piece, not bolted together. You review, I refine, until it's right.",
  },
  {
    n: 3,
    title: 'You launch',
    body: 'The finished page is yours. I can hand over the files or deploy it live for you. No lock-in, no black box.',
  },
]

export default function HowItWorks() {
  return (
    <div>
      <SectionHeading kicker="How it works" title="Simple, and low-risk." />
      <div style={{ display: 'grid', gap: 20 }} className="grid-cols-1 md:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.n}
            style={{ backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: 12, padding: 24 }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 9999,
                border: `1px solid ${c.accentBorder}`,
                backgroundColor: c.accentBg,
                color: c.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: font.mono,
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 16,
              }}
            >
              {s.n}
            </div>
            <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 18, color: c.textPrimary, margin: 0 }}>
              {s.title}
            </h3>
            <p style={{ fontFamily: font.sans, fontSize: 15, lineHeight: 1.55, color: c.textBody, margin: '10px 0 0' }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
