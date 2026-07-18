import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

const milestones = [
  { year: '2017', title: 'The Journey Begins', text: 'Travel Beyond was founded in Kerala with a single promise — travel for everyone.' },
  { year: '2019', title: 'Expanding Horizons', text: 'Grew our footprint across South & Southeast Asia with curated packages.' },
  { year: '2022', title: 'Inclusive Travel', text: 'Launched dedicated packages for elderly parents, single mothers and young explorers.' },
  { year: 'Today', title: '2,400+ Happy Travelers', text: 'Trusted by families, couples and groups for meticulously planned journeys.' },
]

export default function Timeline() {
  return (
    <section className="section-pad py-24 md:py-32">
      <SectionHeading eyebrow="Our Story" title="A Path Worth Following" />

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold via-gold/30 to-transparent md:left-1/2" />
        <div className="flex flex-col gap-14">
          {milestones.map((m, i) => (
            <Reveal
              key={m.year}
              direction={i % 2 === 0 ? 'right' : 'left'}
              className={`relative pl-14 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? 'md:pr-14 md:text-right md:self-start' : 'md:pl-14 md:self-end'
              }`}
            >
              <span className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-gradient ring-4 ring-sand md:left-1/2" />
              <p className="eyebrow">{m.year}</p>
              <h3 className="h-display mt-2 text-xl font-medium text-ink">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
