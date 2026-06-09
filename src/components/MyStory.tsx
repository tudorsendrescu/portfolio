import { useState } from 'react'
import { Link } from 'react-router-dom'
import { c, font } from '../theme'
import portrait from '../assets/tudor-portrait.jpg'

export default function MyStory() {
  const [hover, setHover] = useState(false)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
      <div style={{ flex: '1 1 380px' }}>
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
          My story
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
            maxWidth: 520,
          }}
        >
          Fascinated by what makes people say yes.
        </h2>

        <div style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, marginTop: 24, maxWidth: 540 }}>
          <p style={{ margin: '0 0 18px' }}>
            If you've read this far, you probably want to know who's actually behind the words.
            Fair enough.
          </p>
          <p style={{ margin: '0 0 18px' }}>
            For as long as I can remember I've been pulled toward two things: how businesses win, and
            why people decide to buy. I've read shelves of books chasing the answer — and paired them
            with an analytical, engineering way of thinking.
          </p>
          <p style={{ margin: 0 }}>
            It adds up to a simple way of working: ask the right questions first, then write the copy
            and build the pages that turn attention into action.
          </p>
        </div>

        <Link
          to="/about"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: 32,
            fontFamily: font.sans,
            fontWeight: 600,
            fontSize: 16,
            color: hover ? c.accent : c.textPrimary,
            backgroundColor: 'transparent',
            border: `1px solid ${hover ? c.accentBorder : c.borderHard}`,
            padding: '13px 28px',
            borderRadius: 6,
            textDecoration: 'none',
            transition: 'color 150ms ease, border-color 150ms ease',
          }}
        >
          Read more
        </Link>
      </div>

      <div style={{ flex: '1 1 300px', maxWidth: 400 }}>
        <img
          src={portrait}
          alt="Sendrescu Tudor"
          style={{
            width: '100%',
            borderRadius: 16,
            border: `1px solid ${c.border}`,
            display: 'block',
            boxShadow: '0 24px 60px rgba(33,27,22,0.18)',
          }}
        />
      </div>
    </div>
  )
}
