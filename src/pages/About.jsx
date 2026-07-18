import PageBanner from '../components/PageBanner.jsx'
import AboutStory from '../sections/AboutStory.jsx'
import MissionVision from '../sections/MissionVision.jsx'
import Timeline from '../sections/Timeline.jsx'
import WhyChooseUs from '../sections/WhyChooseUs.jsx'
import CallToAction from '../sections/CallToAction.jsx'

export default function About() {
  return (
    <>
      <PageBanner
        title="About Travel Beyond"
        subtitle="Redefining travel, breaking barriers — bringing the world closer to every explorer"
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
      />
      <AboutStory />
      <MissionVision />
      <Timeline />
      <WhyChooseUs />
      <CallToAction />
    </>
  )
}
