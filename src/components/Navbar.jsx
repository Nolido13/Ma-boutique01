import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ cartCount, cartItems }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const total = cartItems.reduce((sum, i) => sum + i.prix * i.qty, 0)

  const navLinkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
      isActive 
        ? 'text-secondary' 
        : 'text-tertiary hover:text-secondary'
    }`

  return (
    <>
      <nav className="bg-primary shadow-lg">
        
        {/* Bandeau coordonnées */}
        <div className="bg-primary-dark text-white py-3 border-b border-secondary/30">
          <div className="w-full px-3">
            
            {/* Version Desktop */}
            <div className="hidden lg:flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-green-400 text-lg"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary">WhatsApp principal</span>
                    <a href="https://wa.me/22948225922" className="text-base font-semibold hover:text-secondary transition-colors">
                      229 48 22 59 22
                    </a>
                  </div>
                </div>
                
                <div className="w-px h-10 bg-white/20"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-green-400 text-lg"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary">WhatsApp secondaire</span>
                    <a href="https://wa.me/22962724401" className="text-base font-semibold hover:text-secondary transition-colors">
                      229 62 72 44 01
                    </a>
                  </div>
                </div>
                
                <div className="w-px h-10 bg-white/20"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone-alt text-secondary text-lg"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary">Appels</span>
                    <a href="tel:+2290148225922" className="text-base font-semibold hover:text-secondary transition-colors">
                      229 01 48 22 59 22
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-secondary text-lg"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary">Boutique Calavi</span>
                    <span className="text-sm font-medium">Tankpè Von - Face école primaire "Les génies"</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-secondary text-lg"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-tertiary">Boutique Porto-Novo</span>
                    <span className="text-sm font-medium">Quartier Kandevié - Réf: 0195923397</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <i className="far fa-clock text-secondary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-tertiary">Horaires</span>
                  <span className="text-sm font-semibold">Lun-Sam: 8h-20h</span>
                </div>
              </div>
            </div>

            {/* Version Tablette */}
            <div className="hidden md:flex lg:hidden flex-col gap-2">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a href="https://wa.me/2290148225922" className="flex items-center gap-1 text-sm">
                  <i className="fab fa-whatsapp text-green-400"></i>
                  <span>229 01 48 22 59 22</span>
                </a>
                <span className="text-white/30">|</span>
                <a href="https://wa.me/22962724401" className="flex items-center gap-1 text-sm">
                  <i className="fab fa-whatsapp text-green-400"></i>
                  <span>229 62 72 44 01</span>
                </a>
                <span className="text-white/30">|</span>
                <a href="tel:+2290148225922" className="flex items-center gap-1 text-sm">
                  <i className="fas fa-phone-alt text-secondary"></i>
                  <span>229 01 48 22 59 22</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap text-xs">
                <div className="flex items-center gap-1">
                  <i className="fas fa-map-marker-alt text-secondary"></i>
                  <span>Calavi: Tankpè Von</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-1">
                  <i className="fas fa-map-marker-alt text-secondary"></i>
                  <span>Porto-Novo: Kandevié</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-1">
                  <i className="far fa-clock text-secondary"></i>
                  <span>8h-20h</span>
                </div>
              </div>
            </div>

            {/* Version Mobile */}
            <div className="md:hidden">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-3">
                  <a href="https://wa.me/2290148225922" className="flex items-center gap-1.5 bg-green-500/15 px-2.5 py-1 rounded-full">
                    <i className="fab fa-whatsapp text-green-400 text-xs"></i>
                    <span className="text-xs font-medium">01 48 22 59 22</span>
                  </a>
                  <a href="https://wa.me/22962724401" className="flex items-center gap-1.5 bg-green-500/15 px-2.5 py-1 rounded-full">
                    <i className="fab fa-whatsapp text-green-400 text-xs"></i>
                    <span className="text-xs font-medium">62 72 44 01</span>
                  </a>
                  <a href="tel:+2290148225922" className="flex items-center gap-1.5 bg-secondary/15 px-2.5 py-1 rounded-full">
                    <i className="fas fa-phone-alt text-secondary text-xs"></i>
                    <span className="text-xs font-medium">01 48 22 59 22</span>
                  </a>
                </div>
                
                <div className="flex items-start gap-1.5 justify-center">
                  <i className="fas fa-map-marker-alt text-secondary text-xs mt-0.5"></i>
                  <span className="text-xs text-center leading-tight">
                    Calavi: Tankpè Von (face école primaire "Les génies")
                  </span>
                </div>
                
                <div className="flex items-start gap-1.5 justify-center">
                  <i className="fas fa-map-marker-alt text-secondary text-xs mt-0.5"></i>
                  <span className="text-xs text-center leading-tight">
                    Porto-Novo: Quartier Kandevié (0195923397)
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-1.5">
                  <i className="far fa-clock text-secondary text-xs"></i>
                  <span className="text-xs">Lundi - Samedi: 8h - 20h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar principale */}
        <div className="border-b border-secondary/20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between">
            
            <Link 
              to="/" 
              className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.15em] text-white hover:text-secondary transition-colors duration-300"
            >
              DEDSHOP Market
            </Link>

            <ul className="hidden md:flex gap-8 lg:gap-12 list-none">
              <li><NavLink to="/" className={navLinkClass}>Accueil</NavLink></li>
              <li><NavLink to="/shop" className={navLinkClass}>Boutique</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>À propos</NavLink></li>
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2 sm:p-2.5 text-white hover:text-secondary transition-colors duration-300 cursor-pointer group"
              >
                <i className="fas fa-shopping-bag text-base sm:text-lg md:text-xl"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2 sm:p-2.5 cursor-pointer group"
              >
                <span className={`block w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-primary border-b border-secondary/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 flex flex-col gap-3">
            <NavLink 
              to="/" 
              className="py-2 text-base text-tertiary hover:text-secondary transition-colors border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/shop" 
              className="py-2 text-base text-tertiary hover:text-secondary transition-colors border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Boutique
            </NavLink>
            <NavLink 
              to="/about" 
              className="py-2 text-base text-tertiary hover:text-secondary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Panier Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${cartOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            cartOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setCartOpen(false)}
        />
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-primary shadow-2xl transition-transform duration-500 transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-secondary/20">
              <h3 className="font-serif text-xl sm:text-2xl text-white">Mon panier</h3>
              <button 
                onClick={() => setCartOpen(false)}
                className="text-tertiary hover:text-secondary transition-colors text-xl sm:text-2xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-shopping-bag text-5xl text-tertiary/50 mb-4"></i>
                  <p className="text-tertiary mb-4">Votre panier est vide</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-secondary hover:text-secondary-light transition-colors text-sm"
                  >
                    Continuer mes achats <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 sm:gap-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-3 items-center p-2 sm:p-3 bg-primary-light rounded-xl">
                      <img src={item.image} alt={item.nom} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-white">{item.nom}</p>
                        <p className="text-xs text-tertiary mt-1">
                          {item.qty} × {item.prix.toLocaleString()} FCFA
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-secondary">
                        {(item.prix * item.qty).toLocaleString()} FCFA
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-secondary/20 p-4 sm:p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-lg sm:text-xl font-serif text-secondary">{total.toLocaleString()} FCFA</span>
                </div>
                <a
                  href={`https://wa.me/2290148225922?text=${encodeURIComponent(
                    'Commande DEDSHOP Market\n\n' +
                    cartItems.map(i => `- ${i.nom} x${i.qty} = ${(i.prix * i.qty).toLocaleString()} FCFA`).join('\n') +
                    `\n\nTotal : ${total.toLocaleString()} FCFA`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center py-3 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition-all duration-300"
                >
                  <i className="fab fa-whatsapp text-base"></i>
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