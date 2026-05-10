import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCity } from '../context/CityContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { mainCity, secondCity } = useCity()

  // Fonction pour générer les liens avec le préfixe de la ville
  const getCityPath = (path) => {
    const citySlug = mainCity.urlSlug
    if (path === '/') return `/${citySlug}`
    return `/${citySlug}${path}`
  }

  const navLinkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
      isActive ? 'text-primary' : 'text-gray-600 hover:text-tertiary'
    }`

  return (
    <nav className="bg-cream shadow-lg">
      
      {/* Bandeau coordonnées - #211000 */}
      <div className="bg-[#211000] text-white py-3 border-b border-primary/30">
        <div className="w-full px-3">
          
          {/* Version Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {/* WhatsApp principal - Ville principale */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">WhatsApp {mainCity.name}</span>
                  <a href={mainCity.whatsappLink} className="text-base font-semibold hover:text-primary transition-colors">
                    {mainCity.whatsapp}
                  </a>
                </div>
              </div>
              
              <div className="w-px h-10 bg-white/20"></div>
              
              {/* WhatsApp secondaire - Ville secondaire */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">WhatsApp {secondCity.name}</span>
                  <a href={secondCity.whatsappLink} className="text-base font-semibold hover:text-primary transition-colors">
                    {secondCity.whatsapp}
                  </a>
                </div>
              </div>
              
              <div className="w-px h-10 bg-white/20"></div>
              
              {/* Appels */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone-alt text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">Appels</span>
                  <a href={mainCity.callLink} className="text-base font-semibold hover:text-primary transition-colors">
                    {mainCity.call}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Boutique principale - AVEC addressDetail */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">Boutique {mainCity.name}</span>
                  <span className="text-sm font-medium">{mainCity.address}</span>
                  {mainCity.addressDetail && mainCity.addressDetail !== '' && (
                    <span className="text-xs text-white/60">{mainCity.addressDetail}</span>
                  )}
                  {!mainCity.addressDetail && mainCity.reference && (
                    <span className="text-xs text-white/60">Référence: {mainCity.reference}</span>
                  )}
                </div>
              </div>
              
              {/* Boutique secondaire - AVEC addressDetail ou référence */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80">Boutique {secondCity.name}</span>
                  <span className="text-sm font-medium">{secondCity.address}</span>
                  {secondCity.addressDetail && secondCity.addressDetail !== '' && (
                    <span className="text-xs text-white/60">{secondCity.addressDetail}</span>
                  )}
                  {!secondCity.addressDetail && secondCity.reference && (
                    <span className="text-xs text-white/60">Référence: {secondCity.reference}</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="far fa-clock text-primary text-lg"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/80">Horaires</span>
                <span className="text-sm font-semibold">Lundi - Samedi: 7h30 - 20h30</span>
              </div>
            </div>
          </div>

          {/* Version Tablette - AVEC addressDetail */}
          <div className="hidden md:flex lg:hidden flex-col gap-2">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a href={mainCity.whatsappLink} className="flex items-center gap-1 text-sm text-white">
                <i className="fab fa-whatsapp text-primary"></i>
                <span>{mainCity.whatsapp} ({mainCity.name})</span>
              </a>
              <span className="text-white/30">|</span>
              <a href={secondCity.whatsappLink} className="flex items-center gap-1 text-sm text-white">
                <i className="fab fa-whatsapp text-primary"></i>
                <span>{secondCity.whatsapp} ({secondCity.name})</span>
              </a>
              <span className="text-white/30">|</span>
              <a href={mainCity.callLink} className="flex items-center gap-1 text-sm text-white">
                <i className="fas fa-phone-alt text-primary"></i>
                <span>{mainCity.call}</span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 text-xs text-white/80">
              <div className="flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>
                  {mainCity.name}: {mainCity.address}
                  {mainCity.addressDetail && ` - ${mainCity.addressDetail}`}
                  {mainCity.reference && !mainCity.addressDetail && ` (Réf: ${mainCity.reference})`}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>
                  {secondCity.name}: {secondCity.address}
                  {secondCity.addressDetail && ` - ${secondCity.addressDetail}`}
                  {secondCity.reference && !secondCity.addressDetail && ` (Réf: ${secondCity.reference})`}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <i className="far fa-clock text-primary"></i>
                <span>Lundi - Samedi: 7h30 - 20h30</span>
              </div>
            </div>
          </div>

          {/* Version Mobile - AVEC addressDetail */}
          <div className="md:hidden">
            <div className="flex flex-col gap-3">
              
              {/* WhatsApp principal - Calavi avec addressDetail */}
              <div className="text-center">
                <a href={mainCity.whatsappLink} className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-2">
                  <i className="fab fa-whatsapp text-primary text-lg"></i>
                  {mainCity.whatsapp}
                </a>
                <div className="w-12 h-px bg-white/30 mx-auto my-2"></div>
                <p className="text-xs text-white/70">
                  <i className="fas fa-map-marker-alt text-primary text-xs mr-1"></i>
                  {mainCity.name} - {mainCity.address}
                </p>
                {mainCity.addressDetail && mainCity.addressDetail !== '' && (
                  <p className="text-xs text-white/50 mt-0.5">
                    {mainCity.addressDetail}
                  </p>
                )}
                {mainCity.reference && !mainCity.addressDetail && (
                  <p className="text-xs text-white/50 mt-0.5">
                    Réf: {mainCity.reference}
                  </p>
                )}
              </div>
              
              {/* WhatsApp secondaire - Porto-Novo avec référence */}
              <div className="text-center">
                <a href={secondCity.whatsappLink} className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-2">
                  <i className="fab fa-whatsapp text-primary text-lg"></i>
                  {secondCity.whatsapp}
                </a>
                <div className="w-12 h-px bg-white/30 mx-auto my-2"></div>
                <p className="text-xs text-white/70">
                  <i className="fas fa-map-marker-alt text-primary text-xs mr-1"></i>
                  {secondCity.name} - {secondCity.address}
                </p>
                {secondCity.addressDetail && secondCity.addressDetail !== '' && (
                  <p className="text-xs text-white/50 mt-0.5">
                    {secondCity.addressDetail}
                  </p>
                )}
                {secondCity.reference && !secondCity.addressDetail && (
                  <p className="text-xs text-white/50 mt-0.5">
                    Réf: {secondCity.reference}
                  </p>
                )}
              </div>
              
              {/* Appel - avec précision */}
              <div className="text-center">
                <a href={mainCity.callLink} className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-2">
                  <i className="fas fa-phone-alt text-primary text-lg"></i>
                  {mainCity.call}
                </a>
                <div className="w-12 h-px bg-white/30 mx-auto my-2"></div>
                <p className="text-xs text-white/70">
                  <i className="fas fa-phone-alt text-primary text-xs mr-1"></i>
                  Appel direct {mainCity.name}
                </p>
              </div>
              
              {/* Horaires en bas */}
              <div className="text-center pt-2 border-t border-white/20 mt-1">
                <p className="text-xs text-white/60 flex items-center justify-center gap-1">
                  <i className="far fa-clock text-primary text-xs"></i>
                  Lundi - Samedi: 7h30 - 20h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principale avec liens centrés */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo à gauche - TOUT EN ORANGE */}
          <Link to={getCityPath('/')} className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img 
              src="/logo.jpeg" 
              alt="DEDSHOP Market Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <span className="hidden sm:inline font-['Roboto','sans-serif'] text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-normal whitespace-nowrap">
              <span style={{ color: '#ff5a00' }}>DEDSHOP MARKET</span>
            </span>
            <span className="sm:hidden font-['Roboto','sans-serif'] text-base font-bold uppercase">
              <span style={{ color: '#ff5a00' }}>DEDSHOP MARKET</span>
            </span>
          </Link>

          {/* Liens centrés */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="hidden md:flex gap-8 lg:gap-12 list-none">
              <li><NavLink to={getCityPath('/')} className={navLinkClass} end>Accueil</NavLink></li>
              <li><NavLink to={getCityPath('/shop')} className={navLinkClass}>Boutique</NavLink></li>
              <li><NavLink to={getCityPath('/about')} className={navLinkClass}>À propos</NavLink></li>
            </ul>
          </div>

          {/* Espace vide à droite pour équilibrer */}
          <div className="w-[100px] sm:w-[150px] md:w-[180px] shrink-0"></div>

          {/* Menu Burger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 sm:p-2.5 cursor-pointer group shrink-0"
          >
            <span className={`block w-5 sm:w-6 h-0.5 bg-[#211000] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 sm:w-6 h-0.5 bg-[#211000] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 sm:w-6 h-0.5 bg-[#211000] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div className={`md:hidden bg-cream border-b border-gray-200 transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 flex flex-col gap-3">
          <NavLink 
            to={getCityPath('/')} 
            className={({ isActive }) => `py-2 text-base transition-colors border-b border-gray-200 ${isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-tertiary'}`}
            onClick={() => setMenuOpen(false)}
            end
          >
            Accueil
          </NavLink>
          <NavLink 
            to={getCityPath('/shop')} 
            className={({ isActive }) => `py-2 text-base transition-colors border-b border-gray-200 ${isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-tertiary'}`}
            onClick={() => setMenuOpen(false)}
          >
            Boutique
          </NavLink>
          <NavLink 
            to={getCityPath('/about')} 
            className={({ isActive }) => `py-2 text-base transition-colors ${isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-tertiary'}`}
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </NavLink>
        </div>
      </div>
    </nav>
  )
}