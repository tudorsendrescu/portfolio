import { c, font } from '../theme'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ProjectGrid from '../components/ProjectGrid'
import WhatIDo from '../components/WhatIDo'
import About from '../components/About'
import ContactCTA from '../components/ContactCTA'

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
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
          fontFamily: font.sans,
          fontWeight: 700,
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

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="work">
        <Reveal>
          <SectionHeading kicker="Selected work" title="Words and the pages that ship them." />
          <ProjectGrid />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <SectionHeading kicker="What I do" title="Two skills, one cohesive deliverable." />
          <WhatIDo />
        </Reveal>
      </Section>

      <Section id="about">
        <Reveal>
          <About />
        </Reveal>
      </Section>

      <Section id="contact" style={{ paddingTop: 0 }}>
        <Reveal>
          <ContactCTA />
        </Reveal>
      </Section>
    </>
  )
}
