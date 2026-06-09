import fm from 'front-matter'
import type { GalleryItem, Project, ProjectLinks, ProjectType } from './types'

interface RawAttrs {
  title?: string
  tagline?: string
  type?: ProjectType
  tags?: string[]
  cover?: string
  gallery?: Array<string | GalleryItem>
  links?: ProjectLinks
  order?: number
  featured?: boolean
  role?: string
  stack?: string[]
}

export function parseProject(
  slug: string,
  raw: string,
  resolveImage: (rel: string) => string,
): Project {
  const { attributes, body } = fm<RawAttrs>(raw)
  const a = attributes

  return {
    slug,
    title: a.title ?? slug,
    tagline: a.tagline ?? '',
    type: a.type ?? 'development',
    tags: Array.isArray(a.tags) ? a.tags.map(String) : [],
    cover: a.cover ? resolveImage(a.cover) : '',
    gallery: Array.isArray(a.gallery)
      ? a.gallery.map((g) =>
          typeof g === 'string'
            ? { src: resolveImage(g) }
            : { src: resolveImage(g.src), title: g.title, caption: g.caption },
        )
      : [],
    links: a.links ?? {},
    order: typeof a.order === 'number' ? a.order : 999,
    featured: a.featured === true,
    role: a.role,
    stack: Array.isArray(a.stack) ? a.stack.map(String) : undefined,
    body,
  }
}
