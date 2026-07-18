import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { galleryImages } from '../data/gallery.js'

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  function openAt(id) {
    const idx = galleryImages.findIndex((g) => g.id === id)
    setLightboxIndex(idx)
  }

  function next(e) {
    e?.stopPropagation()
    setLightboxIndex((i) => (i + 1) % galleryImages.length)
  }

  function prev(e) {
    e?.stopPropagation()
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div>
      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence>
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => openAt(img.id)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/92 p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute right-6 top-6 text-2xl text-white/80 hover:text-gold"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <HiX />
            </button>
            <button
              className="absolute left-4 text-3xl text-white/70 hover:text-gold md:left-10"
              onClick={prev}
              aria-label="Previous image"
            >
              <HiChevronLeft />
            </button>
            <motion.img
              key={galleryImages[lightboxIndex]?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={galleryImages[lightboxIndex]?.src}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-4xl rounded-2xl object-contain shadow-2xl"
            />
            <button
              className="absolute right-4 text-3xl text-white/70 hover:text-gold md:right-10"
              onClick={next}
              aria-label="Next image"
            >
              <HiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
