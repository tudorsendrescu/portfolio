export type ProjectType = 'copywriting' | 'development' | 'hybrid'

export interface ProjectLinks {
  live?: string
  github?: string
}

export interface GalleryItem {
  src: string
  title?: string
  caption?: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  type: ProjectType
  tags: string[]
  cover: string
  gallery: GalleryItem[]
  links: ProjectLinks
  order: number
  featured: boolean
  role?: string
  stack?: string[]
  body: string
}
