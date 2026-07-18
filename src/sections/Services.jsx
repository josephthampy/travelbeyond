import {
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineUsers,
  HiOutlineUserCircle,
  HiOutlineBriefcase,
  HiOutlineSun,
} from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'
import Stagger, { staggerItem } from '../components/Stagger.jsx'
import { motion } from 'framer-motion'
import { services } from '../data/packages.js'

const icons = [
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineSun,
  HiOutlineUsers,
  HiOutlineSparkles,
  HiOutlineBriefcase,
]

export default function Services() {
  return (
    <section className="section-pad py-24 md:py-32">
      <SectionHeading eyebrow="Tailored For You" title="Our Specialized Travel Services" />

      <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={s.title}
              variants={staggerItem}
              className="group rounded-2xl border border-ink/5 bg-white p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-beige text-xl text-bronze transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-sand">
                <Icon />
              </div>
              <h3 className="h-display mt-5 text-base font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/55">{s.blurb}</p>
            </motion.div>
          )
        })}
      </Stagger>
    </section>
  )
}
