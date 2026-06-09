import Hero from '../components/Hero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import WhyOnePerson from '../components/WhyOnePerson'

export default function Home() {
  return (
    <>
      <Hero />

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <WhyOnePerson />
        </Reveal>
      </Section>
    </>
  )
}
