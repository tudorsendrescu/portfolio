import { c, font } from '../theme'

export default function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 13,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: c.accent,
          marginBottom: 14,
        }}
      >
        {kicker}
      </div>
      <h2
        style={{
          fontFamily: font.serif,
          fontWeight: 600,
          fontSize: 'clamp(28px, 4vw, 40px)',
          letterSpacing: '-0.01em',
          color: c.textPrimary,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  )
}
