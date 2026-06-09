import type { CSSProperties, ReactNode } from 'react'
import { SECTION_MAX } from '../theme'

export default function Section({
  children,
  id,
  style,
}: {
  children: ReactNode
  id?: string
  style?: CSSProperties
}) {
  return (
    <section
      id={id}
      style={{
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 96,
        paddingBottom: 96,
        ...style,
      }}
    >
      <div style={{ maxWidth: SECTION_MAX, margin: '0 auto' }}>{children}</div>
    </section>
  )
}
