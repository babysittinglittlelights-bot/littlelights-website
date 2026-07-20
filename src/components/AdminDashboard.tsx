import { motion } from 'framer-motion'
import { HiLogout, HiTrash, HiEye } from 'react-icons/hi'
import { useState } from 'react'

interface AdminDashboardProps {
  bookings: any[]
  onLogout: () => void
  onUpdateStatus: (id: number, status: string) => void
  onDeleteBooking: (id: number) => void
}

const AdminDashboard = ({
  bookings,
  onLogout,
  onUpdateStatus,
  onDeleteBooking,
}: AdminDashboardProps) => {
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null)
  const [filter, setFilter] = useState('all')

  const filteredBookings = filter === 'all' ? bookings : bookings.filter(b => b.status === filter)

  const pendingCount = bookings.filter(b => b.status === 'pending').length
  const confirmedCount = bookings.filter(b => b.status === 'confirmed').length
  const completedCount = bookings.filter(b => b.status === 'completed').length

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-gold/5 to-sage-green/5">
      {/* Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-white shadow-luxury border-b border-champagne-gold/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-4xl font-cormorant font-bold text-gray-900">✨ Admin Dashboard</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <HiLogout /> Logout
          </motion.button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <div className="luxury-card bg-white">
            <p className="text-sm font-poppins text-gray-600 mb-2">Total Bookings</p>
            <p className="text-4xl font-cormorant font-bold text-champagne-gold">{bookings.length}</p>
          </div>
          <div className="luxury-card bg-white">
            <p className="text-sm font-poppins text-gray-600 mb-2">Pending</p>
            <p className="text-4xl font-cormorant font-bold text-yellow-600">{pendingCount}</p>
          </div>
          <div className="luxury-card bg-white">
            <p className="text-sm font-poppins text-gray-600 mb-2">Confirmed</p>
            <p className="text-4xl font-cormorant font-bold text-blue-600">{confirmedCount}</p>
          </div>
          <div className="luxury-card bg-white">
            <p className="text-sm font-poppins text-gray-600 mb-2">Completed</p>
            <p className="text-4xl font-cormorant font-bold text-green-600">{completedCount}</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap gap-4"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-poppins font-medium transition-all ${
              filter === 'all'
                ? 'bg-champagne-gold text-white'
                : 'bg-white text-gray-700 border border-champagne-gold/20 hover:border-champagne-gold'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-6 py-2 rounded-full font-poppins font-medium transition-all ${
              filter === 'pending'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 border border-champagne-gold/20 hover:border-champagne-gold'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-6 py-2 rounded-full font-poppins font-medium transition-all ${
              filter === 'confirmed'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 border border-champagne-gold/20 hover:border-champagne-gold'
            }`}
          >
            Confirmed
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-full font-poppins font-medium transition-all ${
              filter === 'completed'
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 border border-champagne-gold/20 hover:border-champagne-gold'
            }`}
          >
            Completed
          </button>
        </motion.div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-luxury overflow-hidden"
        >
          {filteredBookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-champagne-gold/10 to-sage-green/10 border-b border-champagne-gold/10">
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Parent Name</th>
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Phone</th>
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Time</th>
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Children</th>
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left font-poppins font-bold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking, index) => (
                    <motion.tr
                      key={booking.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-champagne-gold/10 hover:bg-ivory/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-poppins text-gray-900 font-medium">{booking.parentName}</td>
                      <td className="px-6 py-4 font-poppins text-gray-700">{booking.phone}</td>
                      <td className="px-6 py-4 font-poppins text-gray-700">{formatDate(booking.date)}</td>
                      <td className="px-6 py-4 font-poppins text-gray-700">
                        {booking.startTime} - {booking.endTime}
                      </td>
                      <td className="px-6 py-4 font-poppins text-gray-700">{booking.numberOfChildren}</td>
                      <td className="px-6 py-4">
                        <select
                          value={booking.status}
                          onChange={(e) => onUpdateStatus(booking.id, e.target.value)}
                          className={`px-3 py-1 rounded-full font-poppins font-medium text-sm border-0 cursor-pointer ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedBooking(booking)}
                          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                          title="View Details"
                        >
                          <HiEye size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onDeleteBooking(booking.id)}
                          className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                          title="Delete Booking"
                        >
                          <HiTrash size={18} />
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-xl font-poppins text-gray-600">No bookings found</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBooking(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-luxury-lg p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-cormorant font-bold text-gray-900">Booking Details</h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                ��
              </button>
            </div>

            <div className="space-y-6">
              {/* Parent Info */}
              <div>
                <h3 className="text-xl font-cormorant font-bold text-champagne-gold mb-4">Parent Information</h3>
                <div className="grid md:grid-cols-2 gap-4 bg-ivory/50 p-6 rounded-2xl">
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Name</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.parentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Phone</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Email</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Address</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Emergency Contact</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.emergencyContact}</p>
                  </div>
                </div>
              </div>

              {/* Children Info */}
              <div>
                <h3 className="text-xl font-cormorant font-bold text-champagne-gold mb-4">Children Information</h3>
                <div className="grid md:grid-cols-2 gap-4 bg-ivory/50 p-6 rounded-2xl">
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Number of Children</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.numberOfChildren}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Names</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.childrenNames}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Ages</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.childrenAges}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Allergies</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.allergies || 'None'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Medication</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.medication || 'None'}</p>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div>
                <h3 className="text-xl font-cormorant font-bold text-champagne-gold mb-4">Booking Details</h3>
                <div className="grid md:grid-cols-3 gap-4 bg-ivory/50 p-6 rounded-2xl">
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Date</p>
                    <p className="font-poppins font-bold text-gray-900">{formatDate(selectedBooking.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">Start Time</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.startTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-poppins">End Time</p>
                    <p className="font-poppins font-bold text-gray-900">{selectedBooking.endTime}</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              {(selectedBooking.specialRequirements || selectedBooking.additionalNotes) && (
                <div>
                  <h3 className="text-xl font-cormorant font-bold text-champagne-gold mb-4">Additional Information</h3>
                  {selectedBooking.specialRequirements && (
                    <div className="mb-4 bg-ivory/50 p-6 rounded-2xl">
                      <p className="text-sm text-gray-600 font-poppins mb-2">Special Requirements</p>
                      <p className="font-poppins text-gray-900">{selectedBooking.specialRequirements}</p>
                    </div>
                  )}
                  {selectedBooking.additionalNotes && (
                    <div className="bg-ivory/50 p-6 rounded-2xl">
                      <p className="text-sm text-gray-600 font-poppins mb-2">Additional Notes</p>
                      <p className="font-poppins text-gray-900">{selectedBooking.additionalNotes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedBooking(null)}
              className="w-full mt-8 btn-primary py-3"
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default AdminDashboard
