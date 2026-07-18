import PageBanner from '../components/PageBanner.jsx'
import GalleryGrid from '../sections/GalleryGrid.jsx'

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Our Gallery"
        subtitle="Moments captured across the journeys we've crafted"
        image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="section-pad py-20 md:py-28">
        <GalleryGrid />
      </section>
    </>
  )
}
