import { useMemo, useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import PackageCard from '../components/PackageCard.jsx'
import { packages } from '../data/packages.js'

export default function Packages() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return packages
    const q = query.toLowerCase()
    return packages.filter(
      (p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <PageBanner
        title="Discover Amazing Tour Packages"
        subtitle="Curated, inclusive journeys — from spiritual cities to tropical islands"
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="section-pad py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-lg">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by destination or trip name..."
            className="w-full rounded-full border border-ink/10 bg-white px-6 py-3.5 text-sm shadow-card outline-none transition-colors focus:border-gold"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-ink/50">No packages match your search.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
