import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { c, font } from '../theme'

// A persistent "work with me" button that fades in once the reader scrolls past the hero.
export default function FloatingCTA() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#contact"
      aria-label="Work with me"
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 60,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: font.sans,
        fontWeight: 600,
        fontSize: 15,
        color: c.bg,
        backgroundColor: c.accent,
        padding: '12px 20px',
        borderRadius: 9999,
        textDecoration: 'none',
        boxShadow: '0 8px 30px rgba(0,0,0,0.45)',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: shown ? 'auto' : 'none',
        transition: 'opacity 250ms ease, transform 250ms ease',
      }}
    >
      Work with me
      <ArrowRight size={16} />
    </a>
  )
}
