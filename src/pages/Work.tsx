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
