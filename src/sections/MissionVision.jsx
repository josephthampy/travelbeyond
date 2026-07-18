import { HiOutlineFlag, HiOutlineEye, HiOutlineHeart } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'
import Stagger, { staggerItem } from '../components/Stagger.jsx'
import { motion } from 'framer-motion'

const cards = [
  {
    icon: HiOutlineFlag,
    title: 'Our Mission',
    text: 'To empower individuals to explore the world beyond their perceived limits, regardless of budget, life commitments, or personal circumstances.',
  },
  {
    icon: HiOutlineEye,
    title: 'Our Vision',
    text: 'A world where every person, irrespective of financial means or life-stage, can embark on enriching journeys that broaden horizons.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Our Values',
    text: 'Inclusivity, expertise and personalized service — every itinerary is crafted with care, honesty and genuine hospitality.',
  },
]

export default function MissionVision() {
  return (
    <section className="bg-beige/60 py-24 md:py-32">
      <div className="section-pad">
        <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Values" />

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerItem}
              className="rounded-[24px] bg-white p-10 text-center shadow-card transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-2xl text-sand">
                <c.icon />
              </div>
              <h3 className="h-display mt-6 text-xl font-medium text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
