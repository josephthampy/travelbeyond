import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { stats } from '../data/packages.js'

export default function StatsBand() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-20">
      <div className="section-pad">
        <Reveal direction="up" className="glass mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-[28px] px-8 py-10 shadow-soft md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="h-display text-3xl font-medium text-bronze md:text-4xl">
                <Counter to={s.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-ink/50 md:text-sm">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
