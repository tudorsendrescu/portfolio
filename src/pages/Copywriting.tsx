import ServiceDetail from '../components/ServiceDetail'

export default function Copywriting() {
  return (
    <ServiceDetail
      kicker="Copywriting"
      title="Copy that does one job: sell."
      intro="Words that move one reader to act — clear, persuasive, no filler. Here's what I write, and how I think about it."
      items={[
        {
          title: 'Email sequences & campaigns',
          body: 'Welcome flows, launches, and newsletters that build a relationship and turn subscribers into buyers.',
        },
        {
          title: 'Landing & sales page copy',
          body: 'One page, one goal: take a visitor from skim to action with a clear problem → proof → call-to-action arc.',
        },
        {
          title: 'Ads — Google, Meta, LinkedIn',
          body: "Short, sharp copy that earns the click and respects the reader's time.",
        },
        {
          title: 'Scripts — video ads, VSLs, explainers',
          body: 'Written for the ear and built to hold attention from the first line to the call to action.',
        },
        {
          title: 'Website & product copy',
          body: 'Homepages, about pages, and product descriptions that actually say something — and sound like you.',
        },
        {
          title: 'Taglines & brand messaging',
          body: 'The line and the voice that make you memorable and consistent everywhere you show up.',
        },
      ]}
      approachTitle="How I approach it"
      approach="Before I write a word, I ask a lot of questions — about your product, your brand, and what makes you different. Then I write to one person: sell on emotion, back it up with logic, and cut anything that doesn't earn its place. No filler, no clever-for-its-own-sake — just copy built to do a job."
    />
  )
}
