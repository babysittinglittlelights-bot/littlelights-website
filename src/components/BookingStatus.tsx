import { motion } from 'framer-motion'
import { HiClock, HiUser, HiPhone, HiStar } from 'react-icons/hi'

interface BookingRequest {
  id: number
  parentName: string
  phone: string
  date: string
  startTime: string
  endTime: string
  numberOfChildren: number
  status: string
  createdAt: string
}

interface BookingStatusProps {
  bookings: BookingRequest[]
}

const BookingStatus = ({ bookings }: BookingStatusProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700'
      case 'confirmed':
        return 'bg-blue-50 border-blue-200 text-blue-700'
      case 'completed':
        return 'bg-green-50 border-green-200 text-green-700'
      case 'cancelled':
        return 'bg-red-50 border-red-200 text-red-700'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return '⏳'
      case 'confirmed':
        return '✅'
      case 'completed':
        return '🎉'
      case 'cancelled':
        return '❌'
      default:
        return '📋'
    }
  }

  const upcomingBookings = bookings
    .filter((b) => b.status === 'confirmed')
    .slice(0, 5)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-br from-ivory to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-12">Your Upcoming Bookings</h2>

        {upcomingBookings.length > 0 ? (
          <motion.div className="space-y-4">
            {upcomingBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card bg-white border border-champagne-gold/10 hover:shadow-luxury-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-cormorant font-bold text-gray-900">{booking.parentName}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-poppins font-semibold border ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)} {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm font-poppins text-gray-600">
                      <div className="flex items-center gap-2">
                        <HiClock className="text-champagne-gold" />
                        {new Date(booking.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        })} • {booking.startTime} - {booking.endTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <HiUser className="text-champagne-gold" />
                        {booking.numberOfChildren} child{booking.numberOfChildren > 1 ? 'ren' : ''}
                      </div>
                      <div className="flex items-center gap-2">
                        <HiPhone className="text-champagne-gold" />
                        {booking.phone}
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:self-end btn-secondary whitespace-nowrap"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📅</div>
            <p className="text-lg font-poppins text-gray-600">No upcoming bookings yet</p>
            <p className="text-sm text-gray-500 mt-2">New bookings will appear here</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default BookingStatus
