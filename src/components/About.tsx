import { c, font } from '../theme'
import portrait from '../assets/tudor-portrait.jpg'

export default function About() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
      <div style={{ flex: '0 1 320px', maxWidth: 360 }}>
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

      <div style={{ flex: '1 1 380px' }}>
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
            fontFamily: font.serif,
            fontWeight: 600,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            color: c.textPrimary,
            margin: 0,
          }}
        >
          The best copy starts with better questions.
        </h2>
        <div style={{ fontFamily: font.mono, fontSize: 13, color: c.textMuted, margin: '14px 0 0', letterSpacing: '0.02em' }}>
          Sendrescu Tudor · Romania · works in English (C2) and Romanian
        </div>
        <div style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, marginTop: 22 }}>
          <p style={{ margin: '0 0 16px' }}>
            I'm Tudor. Before I write a single word for you, I'll ask a lot of them — about your
            product, your brand, your customer, and what genuinely makes you different. Most of the job
            is understanding; the writing is what happens once I truly get it.
          </p>
          <p style={{ margin: '0 0 16px' }}>
            I've been fascinated by business and persuasion for years — what makes people pay
            attention, trust a brand, and decide to buy — and I've read shelves of books chasing the
            answer. Pair that with an analytical, engineering way of thinking and you get what I bring
            to every project: clear logic, honest advice, and copy built to do a job.
          </p>
          <p style={{ margin: 0 }}>
            Away from the screen I train martial arts (currently Iaido), play piano, draw, and get lost
            in philosophy. I take the work seriously and myself a lot less so — and I'll always be
            straight with you, whether the answer helps me or not.
          </p>
        </div>
      </div>
    </div>
  )
}
