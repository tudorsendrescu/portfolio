import Section from '../components/Section'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import FaqCTA from '../components/FaqCTA'

export default function FaqPage() {
  return (
    <>
      <Section style={{ paddingTop: 128 }}>
        <Reveal>
          <FAQ />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <FaqCTA />
        </Reveal>
      </Section>
    </>
  )
}
