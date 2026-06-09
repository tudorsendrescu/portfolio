import { describe, it, expect } from 'vitest'
import { parseProject } from './parse'

const RAW = `---
title: SpinUp
tagline: Landing page + copy for a dev tool
type: hybrid
tags: [React, Copywriting, SaaS]
cover: ./cover.png
gallery: [./a.png, ./b.png]
links:
  live: https://example.com
  github: https://github.com/x/y
order: 1
featured: true
role: Sole author
stack: [React, TypeScript]
---
# Heading

Body paragraph.
`

const resolve = (rel: string) => rel.replace(/^\.\//, '/resolved/')

describe('parseProject', () => {
  it('parses scalar and array frontmatter fields', () => {
    const p = parseProject('spinup', RAW, resolve)
    expect(p.slug).toBe('spinup')
    expect(p.title).toBe('SpinUp')
    expect(p.tagline).toBe('Landing page + copy for a dev tool')
    expect(p.type).toBe('hybrid')
    expect(p.tags).toEqual(['React', 'Copywriting', 'SaaS'])
    expect(p.order).toBe(1)
    expect(p.featured).toBe(true)
    expect(p.role).toBe('Sole author')
    expect(p.stack).toEqual(['React', 'TypeScript'])
  })

  it('resolves cover and gallery image paths through the resolver', () => {
    const p = parseProject('spinup', RAW, resolve)
    expect(p.cover).toBe('/resolved/cover.png')
    expect(p.gallery).toEqual([{ src: '/resolved/a.png' }, { src: '/resolved/b.png' }])
  })

  it('supports gallery items with titles and captions', () => {
    const raw = `---
title: X
type: copywriting
gallery:
  - src: ./one.png
    title: First
    caption: Does a thing
---
body`
    const p = parseProject('x', raw, resolve)
    expect(p.gallery).toEqual([{ src: '/resolved/one.png', title: 'First', caption: 'Does a thing' }])
  })

  it('keeps the markdown body without the frontmatter block', () => {
    const p = parseProject('spinup', RAW, resolve)
    expect(p.body).toContain('# Heading')
    expect(p.body).toContain('Body paragraph.')
    expect(p.body).not.toContain('title: SpinUp')
  })

  it('reads links into a typed object', () => {
    const p = parseProject('spinup', RAW, resolve)
    expect(p.links.live).toBe('https://example.com')
    expect(p.links.github).toBe('https://github.com/x/y')
  })

  it('applies defaults when optional fields are missing', () => {
    const minimal = `---
title: Bare
type: development
---
body`
    const p = parseProject('bare', minimal, resolve)
    expect(p.tagline).toBe('')
    expect(p.tags).toEqual([])
    expect(p.gallery).toEqual([])
    expect(p.cover).toBe('')
    expect(p.order).toBe(999)
    expect(p.featured).toBe(false)
    expect(p.links).toEqual({})
    expect(p.role).toBeUndefined()
    expect(p.stack).toBeUndefined()
  })
})
