import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header({ isTelegramApp }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Login', href: '#login' }
  ]

  return (
    <header className="fixed w-full z-50 bg-slate-950/50 backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">CoffeeCrypto</div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          lg:block absolute lg:relative top-full left-0 w-full lg:w-auto 
          bg-slate-950 lg:bg-transparent
        `}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header