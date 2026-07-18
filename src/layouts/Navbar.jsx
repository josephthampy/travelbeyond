import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-sand/90 backdrop-blur-lg shadow-[0_10px_30px_-15px_rgba(60,45,15,0.25)]' : 'bg-transparent'
      }`}
    >
      <nav className="section-pad flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Travel Beyond" className="h-10 w-auto md:h-12 filter sepia saturate-[2.5] hue-rotate-[10deg] brightness-[0.9]" />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `group relative py-2 text-sm tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-bronze' : scrolled ? 'text-ink/80 hover:text-bronze' : 'text-ink/90 hover:text-bronze'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-gold-gradient transition-all duration-400 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="text-2xl text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-sand/98 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base transition-colors ${
                        isActive ? 'bg-beige text-bronze' : 'text-ink/80'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
