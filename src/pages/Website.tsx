import ServiceDetail from '../components/ServiceDetail'

export default function Website() {
  return (
    <ServiceDetail
      kicker="Website building"
      title="Websites built around the message."
      intro="Fast, responsive pages built from scratch — designed so the words lead, not the layout."
      items={[
        {
          title: 'Landing pages',
          body: 'Focused, fast, single-goal pages made to convert the traffic you send them.',
        },
        {
          title: 'Marketing & product sites',
          body: 'Multi-page sites that stay cohesive, quick, and easy to update as you grow.',
        },
        {
          title: 'Responsive front-end builds (React / TypeScript)',
          body: 'Modern, maintainable code that looks right on every screen and is built to last.',
        },
        {
          title: 'Speed & mobile optimization',
          body: 'Pages that load fast and feel effortless on phones — where most people will see them.',
        },
        {
          title: 'Deployment & hosting setup',
          body: 'I get it live and make it yours — no lock-in, no black box.',
        },
      ]}
      approachTitle="How I approach it"
      approach="I design the page around the copy, not the other way round. The result is fast, clean, and free of bloat: the message leads, the layout serves it, and nothing gets between the reader and saying yes."
    />
  )
}
