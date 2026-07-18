import { HiOutlineGlobeAlt, HiOutlineSparkles, HiOutlineHeart } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'
import Stagger, { staggerItem } from '../components/Stagger.jsx'
import { motion } from 'framer-motion'

const points = [
  {
    icon: HiOutlineGlobeAlt,
    title: 'Inclusivity',
    text: 'Our packages cater to diverse demographics, ensuring every traveler finds a perfect trip that suits their needs.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Expertise',
    text: 'Our team comprises seasoned travel professionals dedicated to creating safe, enjoyable and enriching experiences.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Personalized Service',
    text: 'We work closely with our clients to customize itineraries that align with their interests, preferences and schedules.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad py-24 md:py-32">
      <SectionHeading eyebrow="Simply Amazing Places" title="Why Choose Us" />

      <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
        {points.map((p) => (
          <motion.div
            key={p.title}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-[24px] border border-ink/5 bg-white p-10 shadow-card transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-2xl text-sand shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <p.icon />
            </div>
            <h3 className="h-display mt-6 text-xl font-medium text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.text}</p>
            <span className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-beige/60 transition-transform duration-700 group-hover:scale-150" />
          </motion.div>
        ))}
      </Stagger>
    </section>
  )
}
