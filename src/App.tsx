import { useState } from 'react'
import { motion } from 'framer-motion'
import AdminDashboard from './components/AdminDashboard'
import AdminLogin from './components/AdminLogin'
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
import Reviews from './components/Reviews'
import ParentReviews from './components/ParentReviews'
import BookingStatus from './components/BookingStatus'
import BookingsCalendar from './components/BookingsCalendar'
import SafetyInformation from './components/SafetyInformation'
import Blog from './components/Blog'
import { sendBookingEmail } from './services/emailService'
import { saveBookingToFirebase } from './services/firebaseService'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [bookings, setBookings] = useState<any[]>([
    {
      id: 1,
      parentName: 'Sample Booking',
      phone: '063 774 8128',
      email: 'example@email.com',
      childrenNames: 'Child Name',
      childrenAges: '5, 7',
      numberOfChildren: '2',
      date: '2026-07-25',
      startTime: '18:00',
      endTime: '22:00',
      address: 'Delmas, Mpumalanga',
      emergencyContact: '063 774 8128',
      allergies: 'None',
      medication: 'None',
      specialRequirements: 'None',
      additionalNotes: 'Sample booking',
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    },
  ])
  const [reviews, setReviews] = useState<any[]>([
    {
      parentName: 'Sarah M.',
      rating: 5,
      text: 'Jana is absolutely amazing with our children. They look forward to her visits every week!',
      date: 'July 20, 2024',
    },
  ])

  const handleAddBooking = async (newBooking: any) => {
    const booking = {
      id: bookings.length + 1,
      ...newBooking,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    setBookings([booking, ...bookings])

    try {
      await sendBookingEmail(booking)
      console.log('✅ Booking email sent successfully')
    } catch (error) {
      console.error('❌ Error sending email:', error)
    }

    try {
      await saveBookingToFirebase(booking)
      console.log('✅ Booking saved to Firebase')
    } catch (error) {
      console.error('❌ Error saving to Firebase:', error)
    }
  }

  const handleAddReview = (review: any) => {
    setReviews([review, ...reviews])
  }

  const handleUpdateBookingStatus = (id: number, status: string) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status } : b)))
  }

  const handleDeleteBooking = (id: number) => {
    setBookings(bookings.filter((b) => b.id !== id))
  }

  if (isAdminLoggedIn) {
    return (
      <AdminDashboard
        bookings={bookings}
        onLogout={() => setIsAdminLoggedIn(false)}
        onUpdateStatus={handleUpdateBookingStatus}
        onDeleteBooking={handleDeleteBooking}
      />
    )
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation onBookClick={() => setIsBookingOpen(true)} onAdminClick={() => setIsAdminLoggedIn(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <Features />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <BookingStatus bookings={bookings} />
        <BookingsCalendar bookings={bookings} />
        <SafetyInformation />
        <Testimonials />
        <ParentReviews reviews={reviews} onAddReview={() => setIsReviewOpen(true)} />
        <Blog />
        <FAQ />
        <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} onSubmit={handleAddBooking} />
        <Reviews isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} onSubmit={handleAddReview} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
