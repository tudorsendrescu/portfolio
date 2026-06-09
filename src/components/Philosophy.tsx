import { c, font } from '../theme'

export default function Philosophy() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
      <div style={{ flex: '1 1 400px' }}>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 13,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: c.accent,
            marginBottom: 18,
          }}
        >
          My philosophy
        </div>
        <h2
          style={{
            fontFamily: font.serif,
            fontWeight: 600,
            fontSize: 'clamp(30px, 4.5vw, 46px)',
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            color: c.textPrimary,
            margin: 0,
          }}
        >
          Clarity is the whole job.
        </h2>
        <div style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, marginTop: 24, maxWidth: 560 }}>
          <p style={{ margin: '0 0 18px' }}>
            I see copywriting and building the same way: both are about removing everything between a
            person and a clear decision. The right word, the right layout, nothing in the way. Most of
            the work is taking things out, not piling things on.
          </p>
          <p style={{ margin: '0 0 18px' }}>
            With clients, that means asking a lot of questions, listening more than I talk, and telling
            you the truth — even when the honest answer is "you don't need this" or "I'm not the right
            fit." I'd rather lose a project than oversell one.
          </p>
          <p style={{ margin: 0 }}>
            And I treat your launch like it's mine: I care whether it actually works, not just whether
            it looks good. Do that consistently, and the results — and the trust — take care of
            themselves.
          </p>
        </div>
      </div>

      <div style={{ flex: '1 1 320px', maxWidth: 460 }}>
        <figure
          style={{
            margin: 0,
            backgroundColor: c.textPrimary,
            borderRadius: 18,
            padding: '44px 40px',
          }}
        >
          <blockquote
            style={{
              margin: 0,
              fontFamily: font.serif,
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(22px, 2.6vw, 27px)',
              lineHeight: 1.4,
              color: '#FBF7F0',
            }}
          >
            “Perfection is achieved not when there is nothing more to add, but when there is nothing
            left to take away.”
          </blockquote>
          <figcaption
            style={{
              marginTop: 28,
              textAlign: 'right',
              fontFamily: font.mono,
              fontSize: 13,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: c.accent,
            }}
          >
            — Antoine de Saint-Exupéry
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
