import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const [isTelegramApp, setIsTelegramApp] = useState(false)

  useEffect(() => {
    setIsTelegramApp(!!window.Telegram?.WebApp)
  }, [])

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-hidden">
      <Header isTelegramApp={isTelegramApp} />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero isTelegramApp={isTelegramApp} />
        <BentoGrid />
        <HowItWorks />
        <Pricing />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App