import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { HiStar } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading.jsx'
import { testimonials } from '../data/packages.js'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="bg-beige/60 py-24 md:py-32">
      <div className="section-pad">
        <SectionHeading eyebrow="Voices Of Travel Beyond" title="What Our Clients Say" />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={28}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="flex h-full flex-col rounded-[24px] bg-white p-8 shadow-card">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <HiStar key={idx} className={idx < t.rating ? 'opacity-100' : 'opacity-20'} />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-sm italic leading-relaxed text-ink/70">"{t.quote}"</p>
                  <p className="mt-6 text-sm font-medium text-bronze">{t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
