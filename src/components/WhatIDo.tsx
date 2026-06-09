import { PenLine, Code2, FlaskConical } from 'lucide-react'
import { c, font } from '../theme'

const ITEMS = [
  {
    icon: PenLine,
    title: 'Copywriting',
    body: 'Direct-response and B2B SaaS copy that respects the reader. Clear structure, no fluff, built to convert.',
  },
  {
    icon: Code2,
    title: 'Front-end development',
    body: 'Fast, responsive sites and landing pages in React and TypeScript — designed and shipped end to end.',
  },
  {
    icon: FlaskConical,
    title: 'Technical copy',
    body: 'An engineering background means I can read your product and write credibly for a technical audience.',
  },
]

export default function WhatIDo() {
  return (
    <div style={{ display: 'grid', gap: 20 }} className="grid-cols-1 md:grid-cols-3">
      {ITEMS.map(({ icon: Icon, title, body }) => (
        <div
          key={title}
          style={{
            backgroundColor: c.card,
            border: `1px solid ${c.border}`,
            borderRadius: 12,
            padding: 24,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: c.accentIconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}
          >
            <Icon size={20} color={c.accent} />
          </div>
          <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 18, color: c.textPrimary, margin: 0 }}>
            {title}
          </h3>
          <p style={{ fontFamily: font.sans, fontSize: 15, lineHeight: 1.55, color: c.textBody, margin: '10px 0 0' }}>
            {body}
          </p>
        </div>
      ))}
    </div>
  )
}
