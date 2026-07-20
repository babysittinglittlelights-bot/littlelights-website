import { motion } from 'framer-motion'

const Pricing = () => {
  const pricingItems = [
    { label: 'Standard Rate', price: 'R50', unit: 'per child/hour' },
    { label: 'Travel (First 30km)', price: 'Included', unit: '' },
    { label: 'Travel (Beyond 30km)', price: 'R10', unit: 'per km' },
    { label: 'Meal Preparation', price: '+R20', unit: '' },
    { label: 'Medication/Special Care', price: '+R15', unit: '' },
    { label: 'Household Tasks', price: '+R100', unit: '' },
  ]

  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-champagne-gold/5 to-sage-green/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Transparent Pricing
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Pricing Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {pricingItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="flex justify-between items-center p-4 rounded-2xl bg-white/50 hover:bg-white transition-all duration-300"
              >
                <span className="font-poppins text-gray-700 font-medium">{item.label}</span>
                <div className="text-right">
                  <span className="text-2xl font-cormorant font-bold text-champagne-gold">{item.price}</span>
                  {item.unit && <span className="text-sm text-gray-600 ml-2">{item.unit}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="luxury-card bg-white border-2 border-champagne-gold/20">
              <h3 className="text-2xl font-cormorant font-bold text-gray-900 mb-4">Flexible & Transparent</h3>
              <p className="font-poppins text-gray-600 mb-6">We believe in transparent pricing with no hidden fees. Every service is clearly outlined so you know exactly what to expect.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full text-center justify-center"
              >
                Request Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
