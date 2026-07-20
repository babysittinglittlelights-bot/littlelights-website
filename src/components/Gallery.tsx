import { motion } from 'framer-motion'

const Gallery = () => {
  const galleryItems = [
    { emoji: '🎨', title: 'Creative Fun' },
    { emoji: '📚', title: 'Learning Time' },
    { emoji: '🏃', title: 'Active Play' },
    { emoji: '🌳', title: 'Outdoor Adventures' },
    { emoji: '🎭', title: 'Story Time' },
    { emoji: '🍰', title: 'Snack Time' },
    { emoji: '🎪', title: 'Playtime' },
    { emoji: '✨', title: 'Special Moments' },
  ]

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Our Gallery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="aspect-square rounded-3xl bg-gradient-to-br from-champagne-gold/20 to-sage-green/20 flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                {item.emoji}
              </motion.div>
              <p className="font-poppins text-center text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
