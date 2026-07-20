import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Tips for Choosing the Right Babysitter',
      excerpt: 'Learn what to look for when selecting childcare for your family.',
      date: 'July 20, 2024',
      author: 'Jana',
      category: 'Parenting',
      image: '👶',
    },
    {
      id: 2,
      title: 'Creating a Safe Environment for Children',
      excerpt: 'Essential safety tips every caregiver should know.',
      date: 'July 15, 2024',
      author: 'Jana',
      category: 'Safety',
      image: '🛡️',
    },
    {
      id: 3,
      title: 'Age-Appropriate Activities & Games',
      excerpt: 'Fun and educational activities for different age groups.',
      date: 'July 10, 2024',
      author: 'Jana',
      category: 'Activities',
      image: '🎨',
    },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-16"
        >
          Parenting Blog
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card bg-white border border-champagne-gold/10 flex flex-col"
            >
              <div className="text-6xl mb-4">{post.image}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-poppins font-bold text-champagne-gold uppercase">{post.category}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500 font-poppins">{post.date}</span>
                </div>
                <h3 className="text-xl font-cormorant font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="font-poppins text-gray-600 text-sm mb-4">{post.excerpt}</p>
              </div>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="inline-flex items-center gap-2 text-champagne-gold font-poppins font-bold text-sm hover:gap-3 transition-all"
              >
                Read More <HiArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
