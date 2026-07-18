import Reveal from '../components/Reveal.jsx'
import { Link } from 'react-router-dom'

export default function AboutStory() {
  return (
    <section className="section-pad py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <Reveal direction="left">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop"
              alt="Traveler with luggage"
              className="w-full rounded-[28px] object-cover shadow-soft"
            />
            <div className="absolute -bottom-8 -right-8 hidden w-48 rounded-2xl bg-white p-5 shadow-card md:block">
              <p className="h-display text-3xl font-medium text-bronze">8+</p>
              <p className="text-xs text-ink/50">Years crafting journeys across the globe</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal direction="fade">
            <span className="eyebrow">Simply Amazing Places</span>
          </Reveal>
          <Reveal direction="up" delay={0.08}>
            <h2 className="h-display mt-4 text-4xl font-medium text-ink md:text-5xl">A Few Words About Us</h2>
          </Reveal>
          <Reveal direction="up" delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-ink/65">
              Welcome to Travel Beyond, where we believe that travel is not just a luxury but a
              transformative experience accessible to all. Our mission is to empower individuals to
              explore the world beyond their perceived limits, regardless of budget, life commitments,
              or personal circumstances.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.22}>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              At Travel Beyond, we envision a world where every person, irrespective of their financial
              means or life-stage, can embark on enriching journeys that broaden horizons and create
              lasting memories — offering tailored, budget-friendly packages for families, elderly
              parents, single mothers with children, young explorers with limited income, and more.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <Link to="/packages" className="btn-gold mt-8 inline-flex">
              Explore Packages
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
