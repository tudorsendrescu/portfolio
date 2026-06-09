import { parseProject } from './parse'
import type { Project } from './types'

const rawFiles = import.meta.glob('./projects/*/index.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const imageFiles = import.meta.glob('./projects/*/*.{png,jpg,jpeg,webp,svg}', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

function buildProject(path: string, raw: string): Project {
  const dir = path.replace(/\/index\.md$/, '')
  const slug = dir.split('/').pop() as string
  const resolveImage = (rel: string) => {
    const key = rel.replace(/^\.\//, `${dir}/`)
    return imageFiles[key] ?? rel
  }
  return parseProject(slug, raw, resolveImage)
}

export const projects: Project[] = Object.entries(rawFiles)
  .map(([path, raw]) => buildProject(path, raw))
  .sort((a, b) => a.order - b.order)

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
