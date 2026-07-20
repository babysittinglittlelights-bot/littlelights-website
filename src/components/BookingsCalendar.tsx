import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiUser } from 'react-icons/hi'

interface CalendarEvent {
  date: string
  parentName: string
  childrenCount: number
  startTime: string
  endTime: string
}

interface BookingsCalendarProps {
  bookings: any[]
}

const BookingsCalendar = ({ bookings }: BookingsCalendarProps) => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })

  const getBookingsForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return bookings.filter((b) => b.date === dateStr && b.status === 'confirmed')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-center mb-12">Booking Calendar</h2>

        <motion.div className="luxury-card bg-white border border-champagne-gold/10 p-8">
          {/* Month Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-cormorant font-bold text-gray-900">
              {monthName} {currentYear}
            </h3>
            <p className="text-sm text-gray-600 font-poppins mt-2">Confirmed bookings shown in calendar</p>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-8">
            {/* Day Headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-poppins font-bold text-champagne-gold py-2">
                {day}
              </div>
            ))}

            {/* Calendar Days */}
            {days.map((day, index) => {
              const bookingsForDay = day ? getBookingsForDate(day) : []
              const hasBookings = bookingsForDay.length > 0

              return (
                <motion.div
                  key={index}
                  whileHover={day ? { scale: 1.05 } : {}}
                  className={`aspect-square rounded-xl flex items-center justify-center text-center p-2 transition-all ${
                    day
                      ? hasBookings
                        ? 'bg-champagne-gold/20 border-2 border-champagne-gold cursor-pointer'
                        : 'bg-gray-50 border border-gray-200'
                      : 'bg-transparent'
                  }`}
                  title={hasBookings ? `${bookingsForDay.length} booking(s)` : ''}
                >
                  {day && (
                    <div className="text-center">
                      <div className="font-poppins font-bold text-gray-900">{day}</div>
                      {hasBookings && (
                        <div className="text-xs font-poppins text-champagne-gold font-semibold mt-1">
                          {bookingsForDay.length} book
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-6 text-sm font-poppins text-gray-600 border-t border-champagne-gold/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-champagne-gold/20 border-2 border-champagne-gold"></div>
              <span>Confirmed Bookings</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BookingsCalendar
