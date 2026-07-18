import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker, HiOutlineUserGroup, HiArrowRight } from 'react-icons/hi'

export default function PackageCard({ pkg, index = 0 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="card-tilt group relative flex flex-col overflow-hidden rounded-[28px] bg-white shadow-card"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
        <span className="absolute top-4 right-4 rounded-full bg-white/85 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide text-bronze">
          {pkg.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <h3 className="h-display text-xl font-medium text-ink leading-snug">{pkg.title}</h3>

        <div className="flex flex-wrap gap-4 text-xs text-ink/55">
          <span className="flex items-center gap-1.5">
            <HiOutlineLocationMarker className="text-gold" /> {pkg.location}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineUserGroup className="text-gold" /> {pkg.groupSize}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-ink/60 line-clamp-3">{pkg.description}</p>

        <div className="mt-auto pt-2">
          <Link
            to={`/packages/${pkg.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-bronze transition-all duration-300 hover:gap-3 hover:text-gold"
          >
            View Details <HiArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
