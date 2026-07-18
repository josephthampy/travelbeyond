import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiCheckCircle,
  HiXCircle,
} from 'react-icons/hi'
import Reveal from '../components/Reveal.jsx'
import { getPackageById, packages } from '../data/packages.js'
import PackageCard from '../components/PackageCard.jsx'

const tabs = ['Overview', 'Itinerary', 'Included', 'Travel Tips']

export default function PackageDetails() {
  const { id } = useParams()
  const pkg = getPackageById(id)
  const [tab, setTab] = useState('Overview')
  const [activeImage, setActiveImage] = useState(0)

  if (!pkg) return <Navigate to="/packages" replace />

  const related = packages.filter((p) => p.id !== pkg.id).slice(0, 3)

  return (
    <>
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <motion.img
          key={activeImage}
          src={pkg.gallery[activeImage] || pkg.heroImage}
          alt={pkg.title}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        <Link
          to="/packages"
          className="glass absolute left-6 top-24 z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-ink shadow-md transition-transform duration-300 hover:-translate-x-1 md:left-12"
        >
          <HiArrowLeft /> Back
        </Link>

        <div className="section-pad absolute inset-x-0 bottom-0 z-10 pb-12 text-sand">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="eyebrow !text-gold-light">
            {pkg.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-display mt-3 max-w-3xl text-3xl font-medium md:text-5xl"
          >
            {pkg.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-6 text-sm text-sand/80"
          >
            <span className="flex items-center gap-2"><HiOutlineLocationMarker className="text-gold-light" /> {pkg.location}</span>
            <span className="flex items-center gap-2"><HiOutlineClock className="text-gold-light" /> {pkg.duration}</span>
            <span className="flex items-center gap-2"><HiOutlineUserGroup className="text-gold-light" /> {pkg.groupSize} travelers</span>
          </motion.div>
        </div>

        {pkg.gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 z-10 hidden gap-3 md:flex">
            {pkg.gallery.map((g, i) => (
              <button
                key={g}
                onClick={() => setActiveImage(i)}
                className={`h-14 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                  activeImage === i ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="section-pad py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative rounded-full px-5 py-2.5 text-sm transition-colors ${
                    tab === t ? 'bg-beige text-bronze' : 'text-ink/50 hover:text-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-10">
              {tab === 'Overview' && (
                <Reveal direction="fade">
                  <p className="text-base leading-relaxed text-ink/70">{pkg.description}</p>
                  <h3 className="h-display mt-10 text-xl font-medium text-ink">Package Highlights</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink/70">
                        <HiCheckCircle className="mt-0.5 shrink-0 text-gold" /> {h}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {tab === 'Itinerary' && (
                <Reveal direction="fade" className="flex flex-col gap-6">
                  {pkg.itinerary.map((it, i) => (
                    <div key={it.day} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-xs font-medium text-sand">
                          {i + 1}
                        </span>
                        {i < pkg.itinerary.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-ink/10" />}
                      </div>
                      <div className="pb-6">
                        <p className="eyebrow">{it.day}</p>
                        <h4 className="h-display mt-1 text-lg font-medium text-ink">{it.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink/60">{it.detail}</p>
                      </div>
                    </div>
                  ))}
                </Reveal>
              )}

              {tab === 'Included' && (
                <Reveal direction="fade" className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="h-display flex items-center gap-2 text-lg font-medium text-moss">
                      <HiCheckCircle /> Included
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm text-ink/65">
                      {pkg.included.map((i) => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="h-display flex items-center gap-2 text-lg font-medium text-ink/50">
                      <HiXCircle /> Excluded
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm text-ink/50">
                      {pkg.excluded.map((i) => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )}

              {tab === 'Travel Tips' && (
                <Reveal direction="fade">
                  <p className="rounded-2xl bg-beige p-6 text-sm leading-relaxed text-ink/70">{pkg.tips}</p>
                </Reveal>
              )}
            </div>
          </div>

          <Reveal direction="left" className="h-fit rounded-[28px] bg-white p-8 shadow-soft lg:sticky lg:top-28">
            <p className="eyebrow">Starting From</p>
            <p className="h-display mt-2 text-3xl font-medium text-bronze">{pkg.price}</p>
            <div className="mt-6 space-y-3 border-t border-ink/10 pt-6 text-sm">
              <div className="flex justify-between"><span className="text-ink/50">Duration</span><span className="font-medium text-ink">{pkg.duration}</span></div>
              <div className="flex justify-between"><span className="text-ink/50">Location</span><span className="font-medium text-ink text-right">{pkg.location}</span></div>
              <div className="flex justify-between"><span className="text-ink/50">Group Size</span><span className="font-medium text-ink">{pkg.groupSize}</span></div>
            </div>
            <Link to="/contact" className="btn-gold mt-8 w-full justify-center">
              Book Now
            </Link>
            <Link to="/packages" className="btn-outline mt-3 w-full justify-center">
              All Packages
            </Link>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-beige/60 py-20 md:py-28">
          <div className="section-pad">
            <h2 className="h-display text-center text-3xl font-medium text-ink md:text-4xl">You Might Also Like</h2>
            <span className="divider-gold mt-4 block" />
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
