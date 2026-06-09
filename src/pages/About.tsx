import Section from '../components/Section'
import Reveal from '../components/Reveal'
import About from '../components/About'

export default function AboutPage() {
  return (
    <Section style={{ paddingTop: 128 }}>
      <Reveal>
        <About />
      </Reveal>
    </Section>
  )
}
