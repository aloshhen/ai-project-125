import { Coffee } from 'lucide-react'

function Footer() {
  const footerLinks = {
    'Продукт': ['Возможности', 'Цены', 'Демо'],
    'Компания': ['О нас', 'Карьера', 'Блог'],
    'Поддержка': ['Контакты', 'FAQ', 'Документация'],
    'Легальность': ['Политика', 'Условия', 'Безопасность']
  }

  return (
    <footer className="bg-white/5 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="flex items-center mb-6 md:mb-0">
            <Coffee className="text-electric-coffee-start mr-2" size={32} />
            <span className="text-2xl font-bold">CoffeeCrypto</span>
          </div>
          
          <div className="flex space-x-4">
            {/* Social icons here */}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-slate-400 border-t border-white/10 pt-6">
          © 2024 CoffeeCrypto. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

export default Footer