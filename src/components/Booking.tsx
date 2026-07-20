import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'

interface BookingProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

const Booking = ({ isOpen, onClose, onSubmit }: BookingProps) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childrenNames: '',
    childrenAges: '',
    numberOfChildren: '',
    date: '',
    startTime: '',
    endTime: '',
    address: '',
    emergencyContact: '',
    allergies: '',
    medication: '',
    specialRequirements: '',
    additionalNotes: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        parentName: '',
        phone: '',
        email: '',
        childrenNames: '',
        childrenAges: '',
        numberOfChildren: '',
        date: '',
        startTime: '',
        endTime: '',
        address: '',
        emergencyContact: '',
        allergies: '',
        medication: '',
        specialRequirements: '',
        additionalNotes: '',
      })
      onClose()
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-luxury-lg"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-champagne-gold/10 to-sage-green/10 px-8 py-6 flex items-center justify-between border-b border-champagne-gold/10">
          <h2 className="text-3xl font-cormorant font-bold text-gray-900">Book Your Babysitting</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <HiX size={28} />
          </button>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Parent Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Number of Children *</label>
                <input
                  type="number"
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Number of children"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Children Names *</label>
                <input
                  type="text"
                  name="childrenNames"
                  value={formData.childrenNames}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Names of children"
                />
              </div>
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Children Ages *</label>
                <input
                  type="text"
                  name="childrenAges"
                  value={formData.childrenAges}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Ages (e.g., 3, 5, 7)"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Start Time *</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">End Time *</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                placeholder="Your home address"
              />
            </div>

            {/* Row 6 */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Emergency Contact *</label>
              <input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                placeholder="Emergency contact number"
              />
            </div>

            {/* Row 7 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Allergies</label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Any allergies?"
                />
              </div>
              <div>
                <label className="block font-poppins font-medium text-gray-700 mb-2">Medication</label>
                <input
                  type="text"
                  name="medication"
                  value={formData.medication}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors"
                  placeholder="Any medication?"
                />
              </div>
            </div>

            {/* Row 8 */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Special Requirements</label>
              <textarea
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors resize-none"
                placeholder="Any special requirements or needs?"
                rows={3}
              />
            </div>

            {/* Row 9 */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors resize-none"
                placeholder="Any additional information?"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-primary py-4 text-lg font-medium"
            >
              Confirm Booking
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center"
          >
            <div className="text-6xl mb-6">✨</div>
            <h3 className="text-3xl font-cormorant font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-lg font-poppins text-gray-700 mb-2">
              Thank you for your booking.
            </p>
            <p className="text-lg font-poppins text-champagne-gold font-medium">
              Jana will contact you shortly with your personalised quotation.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Booking
