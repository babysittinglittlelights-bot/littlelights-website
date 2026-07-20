import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiStar, HiX } from 'react-icons/hi'

interface ReviewsProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (review: any) => void
}

const Reviews = ({ isOpen, onClose, onSubmit }: ReviewsProps) => {
  const [formData, setFormData] = useState({
    parentName: '',
    rating: 5,
    title: '',
    review: '',
    childAge: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value === 'rating' ? parseInt(value) : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      rating: parseInt(formData.rating.toString()),
      createdAt: new Date().toISOString(),
    })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        parentName: '',
        rating: 5,
        title: '',
        review: '',
        childAge: '',
      })
      onClose()
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full shadow-luxury-lg p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-cormorant font-bold text-gray-900">Leave a Review</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
            <HiX size={24} />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Your Name *</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    whileHover={{ scale: 1.1 }}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                    className={`text-3xl transition-all ${
                      formData.rating >= star ? 'text-champagne-gold' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Review Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none"
                placeholder="e.g., Amazing caregiver!"
              />
            </div>

            {/* Child Age */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Child's Age</label>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none"
                placeholder="e.g., 5 years old"
              />
            </div>

            {/* Review */}
            <div>
              <label className="block font-poppins font-medium text-gray-700 mb-2">Your Review *</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl border border-champagne-gold/20 focus:border-champagne-gold focus:outline-none resize-none"
                placeholder="Share your experience..."
                rows={4}
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-primary py-3 font-medium"
            >
              Submit Review
            </motion.button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-cormorant font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="font-poppins text-gray-600">Your review has been submitted.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Reviews
