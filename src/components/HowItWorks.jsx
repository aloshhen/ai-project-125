import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function HowItWorksStep({ step, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center mb-12 last:mb-0"
    >
      <div className="mr-6">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 
          rounded-full flex items-center justify-center text-2xl font-bold text-slate-950">
          {step}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 tracking-tighter">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Регистрация',
      description: 'Создайте аккаунт через Telegram с мгновенной верификацией'
    },
    {
      step: '02',
      title: 'Выбор Кофе',
      description: 'Персонализируйте заказ и оплатите криптовалютой'
    },
    {
      step: '03',
      title: 'Получение Бонусов',
      description: 'Зарабатывайте NFT-токены и эксклюзивные привилегии'
    }
  ]

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-16">
        Как это работает
      </h2>
      <div className="max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks