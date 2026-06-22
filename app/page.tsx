import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Spaces from '@/components/Spaces'
import Team from '@/components/Team'
import Blog from '@/components/Blog'
import BookingCTA from '@/components/BookingCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <Spaces />
        <Team />
        <Blog />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
