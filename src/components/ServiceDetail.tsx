import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { c, font } from '../theme'
import Section from './Section'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type Item = { title: string; body: string }

export default function ServiceDetail({
  kicker,
  title,
  intro,
  items,
  approachTitle,
  approach,
}: {
  kicker: string
  title: string
  intro: string
  items: Item[]
  approachTitle: string
  approach: string
}) {
  return (
    <>
      <Section style={{ paddingTop: 128 }}>
        <Reveal>
          <div style={{ maxWidth: 720 }}>
            <SectionHeading kicker={kicker} title={title} />
            <p style={{ fontFamily: font.sans, fontSize: 18, lineHeight: 1.7, color: c.textBody, margin: 0 }}>{intro}</p>
          </div>
          <div style={{ display: 'grid', gap: 20, marginTop: 40 }} className="grid-cols-1 md:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                style={{ backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(33,27,22,0.05)' }}
              >
                <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 18, color: c.textPrimary, margin: 0 }}>{it.title}</h3>
                <p style={{ fontFamily: font.sans, fontSize: 15, lineHeight: 1.55, color: c.textBody, margin: '8px 0 0' }}>{it.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <div style={{ maxWidth: 720 }}>
            <h2
              style={{
                fontFamily: font.serif,
                fontWeight: 600,
                fontSize: 'clamp(24px, 3.5vw, 34px)',
                letterSpacing: '-0.01em',
                color: c.textPrimary,
                margin: '0 0 16px',
              }}
            >
              {approachTitle}
            </h2>
            <p style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, margin: 0 }}>{approach}</p>
            <Link
              to="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                marginTop: 32,
                fontFamily: font.sans,
                fontWeight: 600,
                fontSize: 16,
                color: c.textPrimary,
                border: `2px solid ${c.borderHard}`,
                padding: '12px 24px',
                borderRadius: 6,
                textDecoration: 'none',
              }}
            >
              See my work
              <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
