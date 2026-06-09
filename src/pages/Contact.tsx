import { useState, type FormEvent, type ReactNode } from 'react'
import { Mail, Phone, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react'
import { c, font, SECTION_MAX } from '../theme'
import { site } from '../data/site'

const SERVICES = ['Copywriting', 'Website building', 'Both — copy and the page', 'Just exploring / not sure']

type Status = 'idle' | 'sending' | 'sent' | 'error'

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          backgroundColor: c.accentIconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: font.mono, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.textMuted, marginBottom: 4 }}>
          {label}
        </div>
        <div style={{ fontFamily: font.sans, fontSize: 16, color: c.textPrimary }}>{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [calHover, setCalHover] = useState(false)
  const [sendHover, setSendHover] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    if (!site.contactFormKey) {
      setStatus('error')
      setErrorMsg(`The form isn't connected yet — please email me directly at ${site.email}.`)
      return
    }

    setStatus('sending')
    const formData = new FormData(form)
    formData.append('access_key', site.contactFormKey)
    formData.append('subject', 'New message from your portfolio site')

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(`Something went wrong. Please email me directly at ${site.email}.`)
      }
    } catch {
      setStatus('error')
      setErrorMsg(`Something went wrong. Please email me directly at ${site.email}.`)
    }
  }

  const labelStyle = { fontFamily: font.sans, fontSize: 14, fontWeight: 600, color: c.textPrimary, display: 'block', marginBottom: 7 } as const
  const fieldWrap = { marginBottom: 18 } as const

  return (
    <div style={{ maxWidth: SECTION_MAX, margin: '0 auto', padding: '128px 24px 96px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56 }}>
        {/* Left — contact details */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ fontFamily: font.mono, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.accent, marginBottom: 16 }}>
            Contact
          </div>
          <h1 style={{ fontFamily: font.serif, fontWeight: 600, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.01em', color: c.textPrimary, margin: 0 }}>
            Let's talk.
          </h1>
          <p style={{ fontFamily: font.sans, fontSize: 17, lineHeight: 1.7, color: c.textBody, maxWidth: 440, margin: '18px 0 0' }}>
            Tell me what you're working on — or what's not working. A quick question, a second opinion,
            or a full project: I read every message myself and reply personally.
          </p>

          {site.calendly && (
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCalHover(true)}
              onMouseLeave={() => setCalHover(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                marginTop: 28,
                fontFamily: font.sans,
                fontWeight: 600,
                fontSize: 16,
                color: c.bg,
                backgroundColor: c.accent,
                padding: '13px 24px',
                borderRadius: 6,
                textDecoration: 'none',
                boxShadow: calHover ? `0 0 24px ${c.accentGlow}` : 'none',
                transition: 'box-shadow 150ms ease',
              }}
            >
              <Calendar size={18} />
              Book a call
            </a>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 36 }}>
            <InfoRow icon={<Mail size={18} color={c.accent} />} label="Email">
              <a href={`mailto:${site.email}`} style={{ color: c.textPrimary, textDecoration: 'none' }}>
                {site.email}
              </a>
            </InfoRow>
            {site.phone && (
              <InfoRow icon={<Phone size={18} color={c.accent} />} label="Phone">
                <a href={`tel:${site.phone.replace(/\s+/g, '')}`} style={{ color: c.textPrimary, textDecoration: 'none' }}>
                  {site.phone}
                </a>
              </InfoRow>
            )}
            <InfoRow icon={<MapPin size={18} color={c.accent} />} label="Based in">
              Romania — working with clients worldwide
            </InfoRow>
            <InfoRow icon={<Clock size={18} color={c.accent} />} label="Response time">
              I usually reply within a day
            </InfoRow>
          </div>
        </div>

        {/* Right — message form */}
        <div style={{ flex: '1.3 1 380px' }}>
          <div style={{ backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: 16, padding: 32, boxShadow: '0 1px 3px rgba(33,27,22,0.05)' }}>
            <div style={{ fontFamily: font.mono, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.accent, marginBottom: 12 }}>
              Send a message
            </div>

            {status === 'sent' ? (
              <div style={{ padding: '24px 0' }}>
                <h2 style={{ fontFamily: font.serif, fontWeight: 600, fontSize: 26, color: c.textPrimary, margin: '0 0 10px' }}>
                  Thanks — it's on its way.
                </h2>
                <p style={{ fontFamily: font.sans, fontSize: 16, lineHeight: 1.6, color: c.textBody, margin: 0 }}>
                  I've got your message and I'll reply personally, usually within a day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

                <div style={fieldWrap}>
                  <label style={labelStyle} htmlFor="cf-name">Name *</label>
                  <input className="field" id="cf-name" name="name" type="text" required placeholder="Your name" />
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle} htmlFor="cf-email">Email *</label>
                  <input className="field" id="cf-email" name="email" type="email" required placeholder="you@example.com" />
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle} htmlFor="cf-phone">Phone</label>
                  <input className="field" id="cf-phone" name="phone" type="tel" placeholder="Optional" />
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle} htmlFor="cf-service">What can I help with?</label>
                  <select className="field" id="cf-service" name="service" defaultValue="">
                    <option value="" disabled>Choose one…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle} htmlFor="cf-message">Your message *</label>
                  <textarea className="field" id="cf-message" name="message" required rows={5} placeholder="Tell me a bit about your product, your goal, or what's stuck." style={{ resize: 'vertical' }} />
                </div>

                <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: font.sans, fontSize: 14, lineHeight: 1.5, color: c.textBody, marginBottom: 22 }}>
                  <input type="checkbox" required style={{ marginTop: 3, accentColor: c.accent, flexShrink: 0 }} />
                  <span>I'm happy for you to use these details to reply to my enquiry.</span>
                </label>

                {status === 'error' && (
                  <p style={{ fontFamily: font.sans, fontSize: 14, color: c.red, margin: '0 0 16px' }}>{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  onMouseEnter={() => setSendHover(true)}
                  onMouseLeave={() => setSendHover(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontFamily: font.sans,
                    fontWeight: 600,
                    fontSize: 16,
                    color: c.bg,
                    backgroundColor: c.accent,
                    border: 'none',
                    padding: '13px 26px',
                    borderRadius: 6,
                    cursor: status === 'sending' ? 'default' : 'pointer',
                    opacity: status === 'sending' ? 0.7 : 1,
                    boxShadow: sendHover && status !== 'sending' ? `0 0 24px ${c.accentGlow}` : 'none',
                    transition: 'box-shadow 150ms ease, opacity 150ms ease',
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                  {status !== 'sending' && <ArrowRight size={17} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
