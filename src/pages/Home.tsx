import Hero from '../components/Hero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SectionCTA from '../components/SectionCTA'
import FloatingCTA from '../components/FloatingCTA'
import ProjectGrid from '../components/ProjectGrid'
import WhyOnePerson from '../components/WhyOnePerson'
import WhatIDo from '../components/WhatIDo'
import HowItWorks from '../components/HowItWorks'
import WhoFor from '../components/WhoFor'
import About from '../components/About'
import FAQ from '../components/FAQ'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="work">
        <Reveal>
          <SectionHeading kicker="Selected work" title="Proof, not promises." />
          <ProjectGrid />
          <SectionCTA line="Like what you see?" label="Let's talk" />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <WhyOnePerson />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <SectionHeading kicker="What I do" title="One person. The whole launch." />
          <WhatIDo />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <HowItWorks />
          <SectionCTA line="Sound like what you need?" label="Start a conversation" />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <WhoFor />
        </Reveal>
      </Section>

      <Section id="about" style={{ paddingTop: 0 }}>
        <Reveal>
          <About />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <FAQ />
        </Reveal>
      </Section>

      <Section id="contact" style={{ paddingTop: 0 }}>
        <Reveal>
          <ContactCTA />
        </Reveal>
      </Section>

      <FloatingCTA />
    </>
  )
}
