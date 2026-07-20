import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation onBookClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Features />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
