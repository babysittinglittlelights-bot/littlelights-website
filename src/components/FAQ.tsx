import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What ages do you babysit?',
      answer: 'We provide care for children from 5 months to 18 years old. Each age group receives tailored attention and activities appropriate to their developmental stage.',
    },
    {
      question: 'Are you First Aid trained?',
      answer: 'Yes! All our caregivers are fully First Aid trained and certified. Your child\'s safety and wellbeing are our top priorities.',
    },
    {
      question: 'How do I book?',
      answer: 'Booking is easy! You can book online through our website, contact us via WhatsApp at 063 774 8128, or send us an email at babysittinglittlelights@gmail.com.',
    },
    {
      question: 'How do I pay?',
      answer: 'We accept payment via Electronic EFT (Electronic Funds Transfer). Invoices and payment details will be provided after your booking is confirmed.',
    },
    {
      question: 'Do you offer special occasion care?',
      answer: 'Absolutely! We specialize in wedding babysitting, date night care, and holiday special care. These services are customized to meet your specific needs.',
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer: 'Yes, we can accommodate allergies and dietary restrictions. Please provide all dietary information during booking so we can prepare appropriate meals and snacks.',
    },
  ]

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-champagne-gold/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-ivory transition-colors duration-300"
              >
                <h3 className="font-cormorant text-xl font-bold text-gray-900 text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <HiChevronDown className="text-champagne-gold" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 py-6 bg-ivory/50 border-t border-champagne-gold/20"
                  >
                    <p className="font-poppins text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
