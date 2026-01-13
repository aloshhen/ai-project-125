import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function PricingCard({ title, price, features, isMostPopular = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`
        bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden
        ${isMostPopular ? 'shadow-pro-card ring-2 ring-electric-coffee-start' : ''}
      `}
    >
      {isMostPopular && (
        <div className="absolute top-0 right-0 bg-electric-coffee-gradient text-white px-4 py-2 transform translate-x-1/4 -translate-y-1/2 rotate-45">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
        {price}
      </p>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-400">
            <Check className="text-electric-coffee-start mr-2" size={20} />
            {feature}
          </li>
        ))}
      </ul>
      
      <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-white font-bold hover:opacity-90 transition-opacity">
        Выбрать тариф
      </button>
    </motion.div>
  )
}

function Pricing() {
  const pricingPlans = [
    {
      title: 'Lite',
      price: 'Бесплатно',
      features: [
        'Базовые функции',
        'Предзаказ кофе',
        'Минимальные бонусы'
      ]
    },
    {
      title: 'Pro',
      price: '$9.99/мес',
      isMostPopular: true,
      features: [
        'Все функции Lite',
        'Персонализация',
        'Расширенная аналитика',
        'NFT-бонусы'
      ]
    },
    {
      title: 'Enterprise',
      price: 'По запросу',
      features: [
        'Корпоративные решения',
        'Индивидуальная интеграция',
        'Полный доступ',
        'Персональный менеджер'
      ]
    }
  ]

  return (
    <section id="pricing" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-16">
        Тарифы
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default Pricing