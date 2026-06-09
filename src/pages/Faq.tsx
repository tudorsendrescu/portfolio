import Section from '../components/Section'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'

export default function FaqPage() {
  return (
    <Section style={{ paddingTop: 128 }}>
      <Reveal>
        <FAQ />
      </Reveal>
    </Section>
  )
}
