import Hero from '../sections/Hero.jsx'
import StatsBand from '../sections/StatsBand.jsx'
import WhyChooseUs from '../sections/WhyChooseUs.jsx'
import PopularDestinations from '../sections/PopularDestinations.jsx'
import Services from '../sections/Services.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import CallToAction from '../sections/CallToAction.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <WhyChooseUs />
      <PopularDestinations />
      <Services />
      <Testimonials />
      <CallToAction />
    </>
  )
}
