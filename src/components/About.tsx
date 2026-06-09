import { c, font } from '../theme'

export default function About() {
  return (
    <div style={{ maxWidth: 720 }}>
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 13,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 16,
        }}
      >
        About
      </div>
      <h2
        style={{
          fontFamily: font.sans,
          fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 40px)',
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
          color: c.textPrimary,
          margin: 0,
        }}
      >
        A writer who ships, and a developer who can write.
      </h2>
      <div style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, marginTop: 20 }}>
        <p style={{ margin: '0 0 16px' }}>
          Most copywriters can't build the page. Most developers can't write a line worth reading.
          Hiring both means a hand-off — and the hand-off is exactly where the message and the product
          drift apart. I do both, so nothing gets lost in translation: the words, the design, and the
          code come from one head.
        </p>
        <p style={{ margin: '0 0 16px' }}>
          I'm also an engineering student — physics, chemistry, advanced mathematics. That's not a
          footnote. It's why I can sit with a technical product, understand what it actually does, and
          write copy a skeptical, technical buyer will believe instead of skim past.
        </p>
        <p style={{ margin: 0 }}>
          The projects below were built to spec — chosen and crafted to show exactly how I think and
          work, end to end. No inflated case studies. What you see is what you'd get.
        </p>
      </div>
    </div>
  )
}
