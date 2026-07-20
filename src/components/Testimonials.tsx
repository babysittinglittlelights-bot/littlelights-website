import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Jana, baie dankie vir die skottelgoed en die beddens opmaak. Dit was nie nodig nie. Ek waardeer dit verskriklik. Hulle geniet jou altyd. Hulle kan nie wag dat jy kom nie. Dankie weereens dat jy jou Saterdag opoffer.',
      author: 'Satisfied Parent',
      rating: 5,
    },
    {
      text: 'Professional, caring, and reliable. Our children look forward to every visit. Jana truly makes us feel like part of an extended family.',
      author: 'Happy Family',
      rating: 5,
    },
    {
      text: 'The peace of mind we have knowing our children are in such capable hands is priceless. Highly recommended!',
      author: 'Grateful Parents',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="testimonials" className="py-32 bg-gradient-to-br from-ivory to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Testimonials
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="luxury-card bg-white border border-champagne-gold/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HiStar key={i} className="text-champagne-gold" size={20} />
                ))}
              </div>
              
              {/* Quote */}
              <p className="font-poppins text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="font-cormorant text-lg font-bold text-champagne-gold">{testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
