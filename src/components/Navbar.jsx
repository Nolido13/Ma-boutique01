import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ cartCount, cartItems }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const total = cartItems.reduce((sum, i) => sum + i.prix * i.qty, 0)

  const navLinkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase transition-all duration-300 ${
      isActive 
        ? 'text-gold font-medium' 
        : 'text-dark/60 hover:text-gold'
    }`

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-sm' 
          : 'bg-white/95 backdrop-blur-md'
      } border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          <Link 
            to="/" 
            className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-dark hover:text-gold transition-colors duration-300"
          >
            AURÉA
          </Link>

          <ul className="hidden md:flex gap-8 lg:gap-12 list-none">
            <li><NavLink to="/" className={navLinkClass}>Accueil</NavLink></li>
            <li><NavLink to="/shop" className={navLinkClass}>Boutique</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>À propos</NavLink></li>
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2 text-dark hover:text-gold transition-colors duration-300 cursor-pointer group"
            >
              <i className="fas fa-shopping-bag text-lg group-hover:scale-110 transition-transform duration-300"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-medium w-4.5 h-4.5 rounded-full flex items-center justify-center animate-scaleIn">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer group"
            >
              <span className={`block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 flex flex-col gap-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Accueil</NavLink>
            <NavLink to="/shop" className={navLinkClass} onClick={() => setMenuOpen(false)}>Boutique</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>À propos</NavLink>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${cartOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            cartOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setCartOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="font-serif text-2xl text-dark">Mon panier</h3>
              <button 
                onClick={() => setCartOpen(false)}
                className="text-dark/60 hover:text-dark transition-colors text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-shopping-bag text-5xl text-gray-300 mb-4"></i>
                  <p className="text-gray-400 mb-4">Votre panier est vide</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-gold hover:text-gold-dark transition-colors text-sm"
                  >
                    Continuer mes achats <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 items-center p-3 bg-gray-50 rounded-xl">
                      <img src={item.image} alt={item.nom} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-dark">{item.nom}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {item.qty} × {item.prix.toLocaleString()} FCFA
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gold">
                        {(item.prix * item.qty).toLocaleString()} FCFA
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-dark font-medium">Total</span>
                  <span className="text-xl font-serif text-gold">{total.toLocaleString()} FCFA</span>
                </div>
                <a
                  href={`https://wa.me/22900000000?text=${encodeURIComponent(
                    'Ma commande AUREA\n\n' +
                    cartItems.map(i => `- ${i.nom} x${i.qty} = ${(i.prix * i.qty).toLocaleString()} FCFA`).join('\n') +
                    `\n\nTotal : ${total.toLocaleString()} FCFA`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <i className="fab fa-whatsapp"></i>
                  Commander via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}