import { Code2 } from 'lucide-react'
import { c, font } from '../theme'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SectionCTA from '../components/SectionCTA'
import ProjectGrid from '../components/ProjectGrid'
import Testimonials from '../components/Testimonials'

export default function Work() {
  return (
    <>
      <Section style={{ paddingTop: 128 }}>
        <Reveal>
          <SectionHeading kicker="Selected work" title="Proof, not promises." />
          <ProjectGrid />

          <div
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              backgroundColor: c.accentBg,
              border: `1px solid ${c.accentBorderSoft}`,
              borderRadius: 12,
              padding: '20px 22px',
              marginTop: 32,
            }}
          >
            <Code2 size={20} color={c.accent} style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontFamily: font.sans, fontSize: 16, lineHeight: 1.6, color: c.textBody, margin: 0 }}>
              One more piece you're already looking at: <strong style={{ color: c.textPrimary, fontWeight: 600 }}>this site itself</strong>. Every
              page was written, designed, and built from scratch by me in React — so what you're
              browsing right now is part of the portfolio too.
            </p>
          </div>

          <SectionCTA line="Like what you see?" label="Let's talk" />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <Testimonials />
        </Reveal>
      </Section>
    </>
  )
}
