import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const Features = () => {
  const features = [
    { icon: '🩺', label: 'First Aid Trained' },
    { icon: '🛡️', label: 'Safe & Trusted' },
    { icon: '💒', label: 'Wedding Specialist' },
    { icon: '⏰', label: 'Day, Night & Weekend Care' },
  ]

  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <p className="font-poppins text-gray-700 font-medium">{feature.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
