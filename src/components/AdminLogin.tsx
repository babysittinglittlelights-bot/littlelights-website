import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLockClosed, HiArrowRight } from 'react-icons/hi'

interface AdminLoginProps {
  onLogin: () => void
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  
  // Get password from environment or use default
  const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'Jana2024!'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (attempts >= 5) {
      setError('Too many attempts. Please try again later.')
      return
    }
    
    if (password === correctPassword) {
      onLogin()
      setPassword('')
      setError('')
      setAttempts(0)
    } else {
      setError('❌ Incorrect password')
      setPassword('')
      setAttempts(attempts + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-champagne-gold/10 to-sage-green/10 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-luxury-lg max-w-md w-full p-8"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl font-cormorant font-bold text-champagne-gold mb-2">Little Lights</h1>
          <p className="font-poppins text-gray-600">Admin Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-poppins font-medium text-gray-700 mb-2">Admin Password</label>
            <div className="relative">
              <HiLockClosed className="absolute left-4 top-3 text-champagne-gold" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="Enter admin password"
                disabled={attempts >= 5}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-champagne-gold/20 focus:border-champagne-gold focus:outline-none transition-colors disabled:bg-gray-100"
              />
            </div>
            {error && <p className="text-red-500 text-sm font-poppins mt-2">{error}</p>}
            {attempts > 0 && attempts < 5 && (
              <p className="text-yellow-600 text-sm font-poppins mt-2">Attempt {attempts}/5</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: attempts >= 5 ? 1 : 1.02 }}
            whileTap={{ scale: attempts >= 5 ? 1 : 0.98 }}
            type="submit"
            disabled={attempts >= 5}
            className="w-full btn-primary py-3 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login to Dashboard <HiArrowRight size={18} />
          </motion.button>
        </form>

        {/* Info */}
        <p className="text-center text-sm text-gray-600 font-poppins mt-6">
          🔐 Only authorized administrators can access this area.
        </p>
      </motion.div>
    </div>
  )
}

export default AdminLogin
