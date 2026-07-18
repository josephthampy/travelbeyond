import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import Reveal from '../components/Reveal.jsx'
import { contactInfo } from '../data/packages.js'

const infoCards = [
  {
    icon: HiOutlineMail,
    title: 'Email Us',
    lines: [contactInfo.email],
    text: 'For bookings and enquiries, our team replies within one business day.',
  },
  {
    icon: HiOutlinePhone,
    title: 'Call Us',
    lines: [contactInfo.phone],
    text: 'Prefer a personal touch? Call for immediate assistance with your travel plans.',
  },
  {
    icon: HiOutlineLocationMarker,
    title: 'Visit Us',
    lines: [contactInfo.location],
    text: 'Reach out and begin your journey toward a bespoke travel experience.',
  },
  {
    icon: FaInstagram,
    title: 'Follow Online',
    lines: ['@travelbeyondkerala'],
    text: 'Exclusive travel stories and behind-the-scenes glimpses on Instagram.',
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-pad py-28 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal direction="fade">
          <span className="eyebrow">Get In Touch</span>
        </Reveal>
        <Reveal direction="up" delay={0.08}>
          <h1 className="h-display mt-4 text-4xl font-medium text-ink md:text-5xl">Connect With Us</h1>
        </Reveal>
        <Reveal direction="up" delay={0.16}>
          <p className="mt-5 text-ink/60">
            Whether you have questions about destinations, need assistance with bookings, or want to
            customize your travel experience, we're just a message away.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {infoCards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-2xl bg-white p-7 text-center shadow-card transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-lg text-sand">
              <c.icon />
            </div>
            <h3 className="h-display mt-4 text-base font-medium text-ink">{c.title}</h3>
            {c.lines.map((l) => (
              <p key={l} className="mt-1 text-sm font-medium text-bronze">{l}</p>
            ))}
            <p className="mt-2 text-xs leading-relaxed text-ink/55">{c.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal direction="left">
          <form onSubmit={handleSubmit} className="rounded-[28px] bg-white p-8 shadow-card md:p-10">
            <h3 className="h-display text-2xl font-medium text-ink">Send An Enquiry</h3>
            <div className="mt-6 grid gap-5">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">Full Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-ink/10 bg-sand px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-ink/10 bg-sand px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-ink/10 bg-sand px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="Tell us about your dream trip..."
                />
              </div>
              <button type="submit" className="btn-gold justify-center">
                Send Message
              </button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-moss"
                >
                  Thank you — we'll be in touch shortly.
                </motion.p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal direction="right" className="flex flex-col gap-6">
          <div className="relative h-64 overflow-hidden rounded-[28px] shadow-card md:h-72">
            <iframe
              title="Kerala Map"
              className="h-full w-full grayscale"
              loading="lazy"
              src="https://maps.google.com/maps?q=Kerala%2C%20India&t=&z=8&ie=UTF8&iwloc=&output=embed"
            />
          </div>
          <div className="rounded-[28px] bg-white p-8 shadow-card">
            <h3 className="h-display flex items-center gap-2 text-xl font-medium text-ink">
              <HiOutlineClock className="text-gold" /> Business Hours
            </h3>
            <ul className="mt-5 space-y-3">
              {contactInfo.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-ink/5 pb-3 text-sm last:border-0">
                  <span className="text-ink/60">{h.day}</span>
                  <span className="font-medium text-ink">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
