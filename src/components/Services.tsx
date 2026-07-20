import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    { icon: '👶', title: 'Infant Care', desc: 'Gentle and attentive care for your precious newborns' },
    { icon: '☀️', title: 'Day Babysitting', desc: 'Reliable daytime childcare with engaging activities' },
    { icon: '🌙', title: 'Night Babysitting', desc: 'Professional overnight care while you enjoy your evening' },
    { icon: '📅', title: 'Weekend Care', desc: 'Weekend childcare for your family adventures' },
    { icon: '💒', title: 'Wedding Babysitting', desc: 'Specialized care during your special day' },
    { icon: '🌹', title: 'Date Night Care', desc: 'Trusted care so you can enjoy quality time together' },
    { icon: '😴', title: 'Overnight Care', desc: 'Extended overnight care for your peace of mind' },
    { icon: '📚', title: 'Homework Assistance', desc: 'Support with studies and learning activities' },
    { icon: '🎨', title: 'Arts & Crafts', desc: 'Creative and engaging craft activities' },
    { icon: '🏃', title: 'Outdoor Play', desc: 'Safe and fun outdoor activities' },
    { icon: '🍽️', title: 'Meal Preparation', desc: 'Nutritious meal prep and feeding assistance' },
    { icon: '🛁', title: 'Bath & Bedtime', desc: 'Gentle bath time and bedtime routines' },
    { icon: '🎄', title: 'Holiday Care', desc: 'Specialized holiday season childcare' },
    { icon: '🚨', title: 'Emergency Babysitting', desc: 'Last-minute reliable care when you need it' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Our Premium Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="luxury-card bg-white border border-champagne-gold/10"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-cormorant font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm font-poppins text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
