import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

interface HeroProps {
  onBookClick: () => void
}

const Hero = ({ onBookClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-white to-champagne-gold/5" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ float: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-champagne-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ float: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg font-poppins text-champagne-gold font-medium mb-4">Welcome to Little Lights</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-cormorant font-bold text-gray-900 mb-6 leading-tight">
            Professional<br />Babysitting<br />Services
          </h1>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-cormorant text-warm-taupe mb-8"
        >
          Little Hearts. Bright Futures.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Providing trusted, loving and professional childcare for families in Delmas, Mpumalanga & Surrounding Areas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="btn-primary flex items-center gap-2 text-lg"
          >
            Book Now <HiArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="btn-secondary text-lg"
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-champagne-gold rounded-full flex justify-center">
          <div className="w-1 h-2 bg-champagne-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
