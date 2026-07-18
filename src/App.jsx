import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import useLenis from './hooks/useLenis.js'
import useScrollToTop from './hooks/useScrollToTop.js'

import Navbar from './layouts/Navbar.jsx'
import Footer from './layouts/Footer.jsx'
import Loader from './components/Loader.jsx'
import PageTransition from './components/PageTransition.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Packages from './pages/Packages.jsx'
import PackageDetails from './pages/PackageDetails.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function AnimatedRoutes() {
  const location = useLocation()
  useScrollToTop()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/packages" element={<PageTransition><Packages /></PageTransition>} />
        <Route path="/packages/:id" element={<PageTransition><PackageDetails /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  useLenis()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-sand">
      <Loader show={loading} />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}
