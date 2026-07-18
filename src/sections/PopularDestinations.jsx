import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import Stagger, { staggerItem } from '../components/Stagger.jsx'
import { motion } from 'framer-motion'
import { destinations } from '../data/packages.js'

export default function PopularDestinations() {
  return (
    <section className="bg-beige/60 py-24 md:py-32">
      <div className="section-pad">
        <SectionHeading eyebrow="Handpicked Journeys" title="Popular Destinations" />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <motion.div key={d.id} variants={staggerItem}>
              <Link
                to={`/packages/${d.id}`}
                className="group relative block h-72 overflow-hidden rounded-[24px] shadow-card"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-sand">
                  <p className="eyebrow !text-gold-light">{d.country}</p>
                  <h3 className="h-display mt-1 text-2xl font-medium">{d.name}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-sand/80 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-20 group-hover:opacity-100">
                    {d.blurb}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
