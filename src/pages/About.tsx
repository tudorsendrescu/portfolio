import Section from '../components/Section'
import Reveal from '../components/Reveal'
import About from '../components/About'
import Philosophy from '../components/Philosophy'

export default function AboutPage() {
  return (
    <>
      <Section style={{ paddingTop: 128 }}>
        <Reveal>
          <About />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <Philosophy />
        </Reveal>
      </Section>
    </>
  )
}
