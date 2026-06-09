import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { c, font } from '../theme'

const components: Components = {
  h1: ({ children }) => (
    <h1 style={{ fontFamily: font.sans, fontWeight: 700, fontSize: 30, color: c.textPrimary, margin: '32px 0 12px', letterSpacing: '-0.01em' }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ fontFamily: font.sans, fontWeight: 700, fontSize: 23, color: c.textPrimary, margin: '32px 0 12px' }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontFamily: font.sans, fontWeight: 600, fontSize: 19, color: c.textPrimary, margin: '24px 0 8px' }}>
      {children}
    </h3>
  ),
  p: ({ children }) => <p style={{ margin: '0 0 16px' }}>{children}</p>,
  ul: ({ children }) => <ul style={{ margin: '0 0 16px', paddingLeft: 22 }}>{children}</ul>,
  ol: ({ children }) => <ol style={{ margin: '0 0 16px', paddingLeft: 22 }}>{children}</ol>,
  li: ({ children }) => <li style={{ margin: '0 0 8px' }}>{children}</li>,
  strong: ({ children }) => <strong style={{ color: c.textPrimary, fontWeight: 600 }}>{children}</strong>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noreferrer" style={{ color: c.accent, textDecoration: 'none' }}>
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code style={{ fontFamily: font.mono, fontSize: 15, backgroundColor: c.surface, color: c.textPrimary, padding: '2px 6px', borderRadius: 4 }}>
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{ borderLeft: `2px solid ${c.borderHard}`, paddingLeft: 16, margin: '0 0 16px', color: c.textMuted, fontStyle: 'italic' }}>
      {children}
    </blockquote>
  ),
}

export default function Markdown({ children }: { children: string }) {
  return (
    <div style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
