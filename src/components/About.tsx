import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-ivory to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="section-title text-center">More Than Just Babysitting</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg font-poppins text-gray-700 leading-relaxed">
                At Little Lights Babysitting, we understand that finding the right caregiver for your child is one of the most important decisions you'll make as a parent. That's why we're committed to providing safe, nurturing, and professional childcare where every child feels loved and valued.
              </p>
              <p className="text-lg font-poppins text-gray-700 leading-relaxed">
                With years of experience and a passion for working with children, our team ensures that your little ones are in caring, responsible hands. We create a warm and stimulating environment where children can learn, play, and grow.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-champagne-gold/20 flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
                <p className="font-poppins text-gray-700">Trusted by families throughout the region</p>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-champagne-gold/20 to-sage-green/20 flex items-center justify-center text-6xl overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  👶✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
