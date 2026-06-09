import { PenLine, Code2, FlaskConical } from 'lucide-react'
import { c, font } from '../theme'

const ITEMS = [
  {
    icon: PenLine,
    title: 'Copy that does one job: sell',
    body: 'Direct-response writing built on a single line — problem, proof, action. No filler, no clever-for-its-own-sake. Every sentence earns the next one.',
  },
  {
    icon: Code2,
    title: 'A page built around the words',
    body: 'I build the site myself, in React — fast, responsive, and designed so the copy leads instead of fighting the layout. One person owns the result, start to finish.',
  },
  {
    icon: FlaskConical,
    title: 'I actually speak technical',
    body: "I'm an engineering student. I can read your product, understand what it really does, and write for technical buyers in a way they trust — instead of the vague hype that makes them click away.",
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
