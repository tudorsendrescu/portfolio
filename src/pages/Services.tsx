import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SectionCTA from '../components/SectionCTA'
import HowItWorks from '../components/HowItWorks'
import WhoFor from '../components/WhoFor'

export default function ServicesPage() {
  return (
    <>
      <Section style={{ paddingTop: 128 }}>
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
    </>
  )
}
