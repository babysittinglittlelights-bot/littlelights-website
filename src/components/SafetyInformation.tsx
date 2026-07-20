import { motion } from 'framer-motion'
import { HiCheckCircle, HiClock, HiShieldCheck } from 'react-icons/hi'

const SafetyInformation = () => {
  const safetyPoints = [
    {
      icon: <HiShieldCheck className="text-champagne-gold" size={32} />,
      title: 'First Aid Certified',
      desc: 'All caregivers are fully trained in pediatric first aid and CPR.',
    },
    {
      icon: <HiCheckCircle className="text-champagne-gold" size={32} />,
      title: 'Background Checked',
      desc: 'Comprehensive background checks ensure your family\'s safety.',
    },
    {
      icon: <HiClock className="text-champagne-gold" size={32} />,
      title: 'Experienced Professionals',
      desc: 'Years of experience in professional childcare and education.',
    },
  ]

  const safetyChecklist = [
    'Emergency protocols in place',
    'Health & safety compliance',
    'Safe environment guaranteed',
    'Regular training & updates',
    'Open communication with parents',
    'Child-centered care approach',
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title text-center mb-16">Safety & Trust</h2>

        {/* Safety Points Grid */}
        <motion.div className="grid md:grid-cols-3 gap-8 mb-16">
          {safetyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card bg-white border border-champagne-gold/10 text-center"
            >
              <div className="flex justify-center mb-4">{point.icon}</div>
              <h3 className="text-xl font-cormorant font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="font-poppins text-gray-600">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Safety Checklist */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="luxury-card bg-gradient-to-br from-champagne-gold/10 to-sage-green/10 border border-champagne-gold/20 p-12"
        >
          <h3 className="text-2xl font-cormorant font-bold text-gray-900 mb-8">Our Commitment to Your Child's Safety</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyChecklist.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <div className="text-2xl mt-1">✓</div>
                <p className="font-poppins text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SafetyInformation
