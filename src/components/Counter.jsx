import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function Counter({ to = 100, suffix = '+', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (isInView) motionValue.set(to)
  }, [isInView, motionValue, to])

  const displayRef = useRef(null)

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (displayRef.current) displayRef.current.textContent = Math.round(v).toLocaleString() + suffix
    })
    return unsub
  }, [spring, suffix])

  return (
    <motion.span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </motion.span>
  )
}
