import { Link } from 'react-router-dom'
import { useCity } from '../context/CityContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { mainCity } = useCity()

  // Fonction pour générer les liens avec le préfixe de la ville
  const getCityPath = (path) => {
    const citySlug = mainCity.urlSlug
    if (path === '/') return `/${citySlug}`
    return `/${citySlug}${path}`
  }

  return (
    <footer className="bg-cream text-gray-600 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-200">
          
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <img 
                src="/logo.jpeg" 
                alt="DEDSHOP Market Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              {/* Version desktop - tout en orange */}
              <p className="hidden sm:block font-['Roboto','sans-serif'] text-lg sm:text-xl font-bold uppercase tracking-normal whitespace-nowrap">
                <span style={{ color: '#ff5a00' }}>DEDSHOP MARKET</span>
              </p>
              {/* Version mobile - tout en orange */}
              <p className="sm:hidden font-['Roboto','sans-serif'] text-base font-bold uppercase">
                <span style={{ color: '#ff5a00' }}>DEDSHOP MARKET</span>
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-500 max-w-xs mx-auto md:mx-0">
              Vente en gros et en détail des ustensiles de cuisine, les moules en silicone et les gadgets
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-primary-deep text-xs tracking-widest uppercase mb-4 font-semibold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link to={getCityPath('/')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Accueil</Link>
              <Link to={getCityPath('/shop')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Boutique</Link>
              <Link to={getCityPath('/about')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">À propos</Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-primary-deep text-xs tracking-widest uppercase mb-4 font-semibold">
              Catégories
            </h4>
            <div className="flex flex-col gap-2">
              <Link to={getCityPath('/shop')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Ustensiles de cuisine</Link>
              <Link to={getCityPath('/shop')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Moules en silicone</Link>
              <Link to={getCityPath('/shop')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Gadgets</Link>
              <Link to={getCityPath('/shop')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Accessoires</Link>
              <Link to={getCityPath('/shop')} className="text-sm text-gray-500 hover:text-tertiary transition-colors duration-300">Et plus...</Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-primary-deep text-xs tracking-widest uppercase mb-4 font-semibold">
              Horaires
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-gray-500">Lundi - Samedi: 7h30 - 20h30</p>
              <p className="text-gray-500">Livraison partout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e04e00] mt-8 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-xs text-white/90">
              © {currentYear} DEDSHOP Market — Tous droits réservés
            </p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs">CGV</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs">Mentions légales</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-xs">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}