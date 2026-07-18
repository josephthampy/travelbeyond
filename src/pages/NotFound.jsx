import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-display text-8xl font-medium text-gold"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="h-display mt-4 text-2xl font-medium text-ink"
      >
        This destination doesn't exist — yet.
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <Link to="/" className="btn-gold mt-8 inline-flex">
          Back Home
        </Link>
      </motion.div>
    </section>
  )
}
