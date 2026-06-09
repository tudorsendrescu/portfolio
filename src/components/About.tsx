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
          Most copywriters can't build the page. Most developers can't write the words. I do both —
          which means a landing page, a launch, or an email flow can come from one person, with the
          message and the implementation pulling in the same direction.
        </p>
        <p style={{ margin: 0 }}>
          I'm also an engineering student with a background in physics, chemistry, and advanced
          mathematics. That's not a side hobby — it's why I can read a technical product, understand
          what it actually does, and write copy that a technical buyer will trust instead of tune out.
        </p>
      </div>
    </div>
  )
}
