import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
      isActive 
        ? 'text-primary' 
        : 'text-gray-600 hover:text-tertiary'
    }`

  return (
    <nav className="bg-cream shadow-lg">
      
      {/* Bandeau coordonnées - #211000 */}
      <div className="bg-[#211000] text-white py-3 border-b border-primary/30">
        <div className="w-full px-3">
          
          {/* Version Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">WHATSAPP PRINCIPAL</span>
                  <a href="https://wa.me/2290148225922" className="text-base font-semibold hover:text-primary transition-colors">
                    229 01 48 22 59 22
                  </a>
                </div>
              </div>
              
              <div className="w-px h-10 bg-white/20"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">WHATSAPP SECONDAIRE</span>
                  <a href="https://wa.me/22962724401" className="text-base font-semibold hover:text-primary transition-colors">
                    229 62 72 44 01
                  </a>
                </div>
              </div>
              
              <div className="w-px h-10 bg-white/20"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone-alt text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">APPELS</span>
                  <a href="tel:+2290148225922" className="text-base font-semibold hover:text-primary transition-colors">
                    229 01 48 22 59 22
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">BOUTIQUE CALAVI</span>
                  <span className="text-sm font-medium">Tankpè Von de la buvette Parana</span>
                  <span className="text-xs text-white/60">Boutique en face de l'école primaire les génies</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">BOUTIQUE PORTO-NOVO</span>
                  <span className="text-sm font-medium">Quartier Kandevié</span>
                  <span className="text-xs text-white/60">Référence: 0195923397</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="far fa-clock text-primary text-lg"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/80">HORAIRES</span>
                <span className="text-sm font-semibold">LUNDI - SAMEDI: 8H - 20H</span>
                <span className="text-xs text-white/60">DIMANCHE: 9H - 13H</span>
              </div>
            </div>
          </div>

          {/* Version Tablette */}
          <div className="hidden md:flex lg:hidden flex-col gap-2">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a href="https://wa.me/2290148225922" className="flex items-center gap-1 text-sm text-white">
                <i className="fab fa-whatsapp text-primary"></i>
                <span>229 01 48 22 59 22</span>
              </a>
              <span className="text-white/30">|</span>
              <a href="https://wa.me/22962724401" className="flex items-center gap-1 text-sm text-white">
                <i className="fab fa-whatsapp text-primary"></i>
                <span>229 62 72 44 01</span>
              </a>
              <span className="text-white/30">|</span>
              <a href="tel:+2290148225922" className="flex items-center gap-1 text-sm text-white">
                <i className="fas fa-phone-alt text-primary"></i>
                <span>229 01 48 22 59 22</span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 text-xs text-white/80">
              <div className="flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>CALAVI: Tankpè Von de la buvette Parana (face école primaire les génies)</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>PORTO-NOVO: Quartier Kandevié (Réf: 0195923397)</span>
              </div>
              <div className="flex items-center gap-1">
                <i className="far fa-clock text-primary"></i>
                <span>LUN-SAM: 8H-20H | DIM: 9H-13H</span>
              </div>
            </div>
          </div>

          {/* Version Mobile */}
          <div className="md:hidden">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-3">
                <a href="https://wa.me/2290148225922" className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-full text-white">
                  <i className="fab fa-whatsapp text-primary text-xs"></i>
                  <span className="text-xs font-medium">01 48 22 59 22</span>
                </a>
                <a href="https://wa.me/22962724401" className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-full text-white">
                  <i className="fab fa-whatsapp text-primary text-xs"></i>
                  <span className="text-xs font-medium">62 72 44 01</span>
                </a>
                <a href="tel:+2290148225922" className="flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-full text-white">
                  <i className="fas fa-phone-alt text-primary text-xs"></i>
                  <span className="text-xs font-medium">01 48 22 59 22</span>
                </a>
              </div>
              
              <div className="flex items-start gap-1.5 justify-center text-white/80">
                <i className="fas fa-map-marker-alt text-primary text-xs mt-0.5"></i>
                <span className="text-xs text-center leading-tight">
                  CALAVI: Tankpè Von de la buvette Parana, face école primaire les génies
                </span>
              </div>
              
              <div className="flex items-start gap-1.5 justify-center text-white/80">
                <i className="fas fa-map-marker-alt text-primary text-xs mt-0.5"></i>
                <span className="text-xs text-center leading-tight">
                  PORTO-NOVO: Quartier Kandevié (Réf: 0195923397)
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-1.5 text-white/80">
                <i className="far fa-clock text-primary text-xs"></i>
                <span className="text-xs">LUNDI - SAMEDI: 8H - 20H</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-white/80">
                <i className="far fa-clock text-primary text-xs"></i>
                <span className="text-xs">DIMANCHE: 9H - 13H</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principale avec logo et liens centrés */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo à gauche - version corrigée pour mobile */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src="/logo.jpeg" 
              alt="DEDSHOP Market Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-['Roboto','sans-serif'] font-bold uppercase whitespace-nowrap">
              <span style={{ color: '#00ff01', fontSize: 'clamp(14px, 4vw, 24px)' }}>D</span>
              <span style={{ color: '#ff5a00', fontSize: 'clamp(14px, 4vw, 24px)' }}>ED</span>
              <span style={{ color: '#00ff01', fontSize: 'clamp(14px, 4vw, 24px)' }}>S</span>
              <span style={{ color: '#ff5a00', fontSize: 'clamp(14px, 4vw, 24px)' }}>HOP </span>
              <span style={{ color: '#00ff01', fontSize: 'clamp(14px, 4vw, 24px)' }}>M</span>
              <span style={{ color: '#ff5a00', fontSize: 'clamp(14px, 4vw, 24px)' }}>ARKET</span>
            </span>
          </Link>

          {/* Liens centrés */}
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex gap-8 lg:gap-12 list-none">
              <li><NavLink to="/" className={navLinkClass}>ACCUEIL</NavLink></li>
              <li><NavLink to="/shop" className={navLinkClass}>BOUTIQUE</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>À PROPOS</NavLink></li>
            </ul>
          </div>

          {/* Espace vide à droite pour équilibrer */}
          <div className="w-8 sm:w-10 md:w-12"></div>

          {/* Menu Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 sm:p-2.5 cursor-pointer group"
          >
            <span className={`block w-5 sm:w-6 h-0.5 bg-[#211000] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 sm:w-6 h-0.5 bg-[#211000] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 sm:w-6 h-0.5 bg-[#211000] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Menu Mobile déroulant */}
      <div className={`md:hidden bg-cream border-b border-gray-200 transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 flex flex-col gap-3">
          <NavLink 
            to="/" 
            className="py-2 text-base text-gray-600 hover:text-tertiary transition-colors uppercase border-b border-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            ACCUEIL
          </NavLink>
          <NavLink 
            to="/shop" 
            className="py-2 text-base text-gray-600 hover:text-tertiary transition-colors uppercase border-b border-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            BOUTIQUE
          </NavLink>
          <NavLink 
            to="/about" 
            className="py-2 text-base text-gray-600 hover:text-tertiary transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
          >
            À PROPOS
          </NavLink>
        </div>
      </div>
    </nav>
  )
}