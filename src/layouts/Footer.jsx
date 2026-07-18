import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { contactInfo } from '../data/packages.js'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <footer className="relative overflow-hidden bg-ink text-sand">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="section-pad relative grid gap-12 py-20 md:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
        <div>
          <img src={logo} alt="Travel Beyond" className="h-12 w-auto filter sepia saturate-[2.5] hue-rotate-[10deg] brightness-[0.9] opacity-90" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/60">
            Redefining travel, breaking barriers — bringing the world closer to every explorer.
          </p>
          <div className="mt-6 flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => {
              const socialLinks = {
                0: '#',
                1: '#',
                2: 'https://instagram.com/travelbeyondkerala',
                3: '#'
              }
              return (
                <a
                  key={i}
                  href={socialLinks[i]}
                  target={i === 2 ? '_blank' : undefined}
                  rel={i === 2 ? 'noreferrer' : undefined}
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-sand/15 text-sand/70 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1"
                >
                  <Icon size={13} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-light">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-sand/65">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-light">Contact Us</h4>
          <ul className="mt-5 space-y-3 text-sm text-sand/65">
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-light">Newsletter</h4>
          <p className="mt-5 text-sm text-sand/65">Curated journeys, delivered occasionally to your inbox.</p>
          <form onSubmit={handleSubmit} className="mt-4 flex overflow-hidden rounded-full border border-sand/20 bg-white/5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2.5 text-sm text-sand placeholder:text-sand/40 focus:outline-none"
            />
            <button type="submit" className="bg-gold-gradient px-4 text-xs font-medium text-ink whitespace-nowrap">
              Join
            </button>
          </form>
          {sent && <p className="mt-2 text-xs text-gold-light">Thank you — you're on the list.</p>}
        </div>
      </div>

      <div className="border-t border-sand/10">
        <p className="section-pad py-6 text-center text-xs text-sand/40">
          © {new Date().getFullYear()} Travel Beyond. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
