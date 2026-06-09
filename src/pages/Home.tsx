import Hero from '../components/Hero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Services from '../components/Services'
import MyStory from '../components/MyStory'
import WhyOnePerson from '../components/WhyOnePerson'

export default function Home() {
  return (
    <>
      <Hero />

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <Services />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <MyStory />
        </Reveal>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <WhyOnePerson />
        </Reveal>
      </Section>
    </>
  )
}
