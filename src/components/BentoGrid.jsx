import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

function BentoGridCard({ icon: Icon, title, description, wide = false }) {
  return (
    <motion.div 
      variants={cardVariants}
      className={`
        bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-2xl
        hover:bg-white/10 hover:-translate-y-2 transition-all duration-300
        ${wide ? 'col-span-2' : 'col-span-1'}
      `}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-electric-coffee-start mr-4" size={32} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  )
}

function BentoGrid() {
  const gridItems = [
    {
      icon: Coffee,
      title: 'Smart Order',
      description: 'Предзаказ кофе с персонализацией и моментальной оплатой'
    },
    {
      icon: Wallet,
      title: 'Crypto Payments',
      description: 'Поддержка TON и Stars с моментальными транзакциями',
      wide: true
    },
    {
      icon: Trophy,
      title: 'NFT Loyalty',
      description: 'Уникальные бонусы и привилегии через NFT-токены'
    },
    {
      icon: BarChart3,
      title: 'Live Analytics',
      description: 'Real-time данные о вашем потреблении и бонусах'
    }
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={gridVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {gridItems.map((item, index) => (
          <BentoGridCard 
            key={index} 
            {...item} 
          />
        ))}
      </motion.div>
    </section>
  )
}

export default BentoGrid