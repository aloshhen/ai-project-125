import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

function Hero({ isTelegramApp }) {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative pt-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-radial from-orange-400/10 via-amber-500/5 to-transparent opacity-50 -z-10"></div>
      
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
        >
          Кофе. Код. Крипто.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Революционная система лояльности нового поколения, объединяющая технологии, кофе и криптовалюту
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <button className="
            px-6 py-3 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 
            text-white font-bold rounded-lg shadow-glow hover:scale-105 transition-transform
            flex items-center gap-2
          ">
            Начать работу <ArrowRight size={20} />
          </button>
          
          <button className="
            px-6 py-3 border border-white/10 text-slate-400 
            rounded-lg hover:bg-white/5 transition-colors
            flex items-center gap-2
          ">
            Документация <Coffee size={20} />
          </button>
        </motion.div>

        {isTelegramApp && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Открыть профиль ТГ
          </motion.button>
        )}
      </div>
    </section>
  )
}

export default Hero