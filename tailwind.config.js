/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        'champagne-gold': '#C8A96A',
        'sage-green': '#8E9A84',
        'warm-taupe': '#B9A89B',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
