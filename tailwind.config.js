export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'electric-coffee': {
          start: '#FB923C',   // orange-400
          middle: '#F59E0B',  // amber-500
          end: '#FBBF24'      // yellow-600
        }
      },
      backgroundImage: {
        'electric-coffee-gradient': 'linear-gradient(to right, #FB923C, #F59E0B, #FBBF24)'
      },
      boxShadow: {
        'glow': '0 0 30px rgba(251, 146, 60, 0.5)',
        'pro-card': '0 0 50px rgba(251, 146, 60, 0.3)'
      },
      animation: {
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}