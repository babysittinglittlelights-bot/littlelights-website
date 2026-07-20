import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  text: string
  rating: number
  date: string
}

interface ParentReviewsProps {
  reviews: Testimonial[]
  onAddReview: () => void
}

const ParentReviews = ({ reviews, onAddReview }: ParentReviewsProps) => {
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-32 bg-gradient-to-br from-champagne-gold/5 to-sage-green/5"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          <div>
            <h2 className="section-title mb-4">Parent Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-cormorant font-bold text-champagne-gold">{averageRating}</div>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={i <= Math.round(averageRating as any) ? 'text-2xl' : 'text-2xl opacity-30'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-poppins mt-2">{reviews.length} reviews</p>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAddReview}
            className="btn-primary self-start md:self-auto"
          >
            Leave a Review
          </motion.button>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <motion.div className="grid md:grid-cols-2 gap-6">
            {reviews.slice(0, 6).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="luxury-card bg-white border border-champagne-gold/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-cormorant text-lg font-bold text-gray-900">{review.name}</h3>
                    <p className="text-xs text-gray-500 font-poppins">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className={i <= review.rating ? 'text-lg' : 'text-lg opacity-30'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-poppins text-gray-700 italic">"{review.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">⭐</div>
            <p className="text-lg font-poppins text-gray-600 mb-6">Be the first to leave a review!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAddReview}
              className="btn-primary"
            >
              Leave a Review
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default ParentReviews
