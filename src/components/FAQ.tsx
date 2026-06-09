import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

const QA = [
  {
    q: "I'm not sure what I actually need — can you help?",
    a: "Absolutely. Tell me what you're selling and where it's stuck, and I'll give you my honest, objective read on the situation — what I'd do, what I wouldn't, and whether a project even makes sense yet. Think of it as a free second opinion, no strings attached.",
  },
  {
    q: 'How do I know you can deliver?',
    a: "Look at the work on this page — written and built end to end, to a professional standard. I'd rather be judged on output than on a CV, and I'll tell you honestly up front if I'm not the right fit for what you need.",
  },
  {
    q: 'How long does it take?',
    a: "A focused landing page is usually days, not weeks. You'll get a real timeline before we start — not a vague “it depends”.",
  },
  {
    q: 'What does it cost to get started?',
    a: "The first conversation is free. I'll give you an honest read on whether I can help before either of us commits to anything.",
  },
  {
    q: "What if I don't like it?",
    a: "We agree on the direction before I write the full draft, so there are no big surprises — and we keep refining until it's right.",
  },
]

export default function FAQ() {
  return (
    <div style={{ maxWidth: 760 }}>
      <SectionHeading kicker="Questions" title="Straight answers." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {QA.map(({ q, a }) => (
          <div
            key={q}
            style={{ backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: 12, padding: '20px 22px' }}
          >
            <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 17, color: c.textPrimary, margin: 0 }}>
              {q}
            </h3>
            <p style={{ fontFamily: font.sans, fontSize: 16, lineHeight: 1.6, color: c.textBody, margin: '8px 0 0' }}>
              {a}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
