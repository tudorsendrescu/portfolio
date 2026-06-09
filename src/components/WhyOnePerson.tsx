import { Check, X } from 'lucide-react'
import { c, font } from '../theme'
import SectionHeading from './SectionHeading'

const USUAL = [
  'Two people to find, brief, and manage',
  'Two timelines and two invoices',
  'A hand-off where the message gets watered down',
  'A writer who never sees the page their words live on',
]

const WITHME = [
  'One brief, one point of contact',
  'One timeline, one invoice',
  'The words and the design decided together',
  'Nothing lost between two inboxes — there is only one',
]

function Panel({ title, items, accent }: { title: string; items: string[]; accent: boolean }) {
  return (
    <div
      style={{
        backgroundColor: c.card,
        border: `1px solid ${accent ? c.accentBorderSoft : c.border}`,
        borderRadius: 12,
        padding: 24,
      }}
    >
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 13,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: accent ? c.accent : c.textMuted,
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
              fontFamily: font.sans,
              fontSize: 15,
              lineHeight: 1.5,
              color: c.textBody,
            }}
          >
            {accent ? (
              <Check size={18} color={c.accent} style={{ flexShrink: 0, marginTop: 2 }} />
            ) : (
              <X size={18} color={c.textMuted} style={{ flexShrink: 0, marginTop: 2 }} />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WhyOnePerson() {
  return (
    <div>
      <SectionHeading kicker="Why me" title="Hire one person, not two." />
      <div style={{ maxWidth: 720, fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody }}>
        <p style={{ margin: '0 0 16px' }}>
          The usual way to launch a page: hire a copywriter, then hand their words to a developer or
          drop them into a template. It works — until it doesn't. The writer never sees the final
          layout. The builder never feels the argument the words are making. Lines get cut, moved,
          and softened in the gap between them. And you're the one managing both ends.
        </p>
        <p style={{ margin: '0 0 36px' }}>
          When the same person writes and builds, that gap disappears. The headline is sized the way
          it's meant to be read. The proof lands exactly where the doubt shows up. The page and the
          pitch are the same thought — because they came from the same head.
        </p>
      </div>
      <div style={{ display: 'grid', gap: 20 }} className="grid-cols-1 md:grid-cols-2">
        <Panel title="The usual way" items={USUAL} accent={false} />
        <Panel title="Working with me" items={WITHME} accent />
      </div>
    </div>
  )
}
