import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="section-pad relative z-10 mx-auto max-w-2xl text-center">
        <Reveal direction="fade">
          <span className="eyebrow !text-gold-light">Simply Amazing Places</span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="h-display mt-5 text-4xl font-medium text-white md:text-5xl">
            Your Next Story Begins Beyond the Horizon
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="mt-5 text-white/70">
            Let us craft a journey tailored to you — inclusive, personal, and unforgettable.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link to="/contact" className="btn-gold">
              Contact Us For Bookings
            </Link>
            <Link to="/packages" className="btn-outline !border-white/30 !text-white hover:!bg-white/10">
              Browse Packages
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
