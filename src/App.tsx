import { Routes, Route, useLocation } from 'react-router-dom'
import { c } from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import Section from './components/Section'
import Reveal from './components/Reveal'
import ContactCTA from './components/ContactCTA'
import FloatingCTA from './components/FloatingCTA'
import Home from './pages/Home'
import Work from './pages/Work'
import ServicesPage from './pages/Services'
import AboutPage from './pages/About'
import FaqPage from './pages/Faq'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'

export default function App() {
  const { pathname } = useLocation()
  const onContact = pathname === '/contact'

  return (
    <div style={{ backgroundColor: c.bg, minHeight: '100vh' }}>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </main>

      {!onContact && (
        <Section id="contact" style={{ paddingTop: 0 }}>
          <Reveal>
            <ContactCTA />
          </Reveal>
        </Section>
      )}

      <Footer />
      {!onContact && <FloatingCTA />}
    </div>
  )
}
