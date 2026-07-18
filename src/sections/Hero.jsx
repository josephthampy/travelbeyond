import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineArrowDown } from 'react-icons/hi'
import HeroScene from '../components/scene/HeroScene.jsx'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-beige">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sand/40 via-sand/70 to-sand" />
      <HeroScene />

      <div className="absolute left-[8%] top-[22%] h-24 w-24 rounded-full border border-gold/30 animate-float-slow hidden md:block" />
      <div className="absolute right-[12%] bottom-[24%] h-16 w-16 rounded-full bg-gold/10 animate-float hidden md:block" />

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center pt-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow"
        >
          Discover The World
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="h-display mt-6 text-5xl font-medium leading-[1.05] text-ink sm:text-6xl md:text-7xl"
        >
          Travel <span className="italic font-script text-bronze">Beyond</span>
          <br /> the ordinary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink/60 md:text-lg"
        >
          Where we believe travel is not just a luxury, but a transformative experience —
          made accessible to every explorer, at every stage of life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Link to="/packages" className="btn-gold">
            Explore Packages
          </Link>
          <Link to="/contact" className="btn-outline">
            Plan My Journey
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink/40"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <HiOutlineArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
