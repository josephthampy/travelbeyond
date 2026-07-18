import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-sand"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.img
            src={logo}
            alt="Travel Beyond"
            className="h-16 w-auto"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-beige">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gold-gradient"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="eyebrow">Discover The World</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
