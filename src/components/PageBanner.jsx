import { motion } from 'framer-motion'

export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative flex h-[46vh] min-h-[340px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      <div className="relative z-10 px-6 text-center text-sand">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-display text-4xl font-medium md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-sm tracking-wide text-sand/70 md:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
