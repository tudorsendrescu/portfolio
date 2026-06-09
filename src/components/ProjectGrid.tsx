import { useMemo, useState } from 'react'
import { c, font } from '../theme'
import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

type Filter = 'all' | 'copywriting' | 'development'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'copywriting', label: 'Copywriting' },
  { key: 'development', label: 'Development' },
]

function matches(filter: Filter, type: string) {
  if (filter === 'all') return true
  if (filter === 'copywriting') return type === 'copywriting' || type === 'hybrid'
  return type === 'development' || type === 'hybrid'
}

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = useMemo(() => projects.filter((p) => matches(filter, p.type)), [filter])

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
        {FILTERS.map((f) => {
          const active = f.key === filter
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                fontFamily: font.mono,
                fontSize: 13,
                cursor: 'pointer',
                color: active ? c.bg : c.textMuted,
                backgroundColor: active ? c.accent : 'transparent',
                border: `1px solid ${active ? c.accent : c.borderHard}`,
                borderRadius: 9999,
                padding: '6px 16px',
                transition: 'all 150ms ease',
              }}
            >
              {f.label}
            </button>
          )
        })}
      </div>
      <div style={{ display: 'grid', gap: 24 }} className="grid-cols-1 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
