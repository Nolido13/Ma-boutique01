import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
              <p className="font-serif text-xl text-primary-deep tracking-[0.15em]">
                DEDSHOP Market
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-500 max-w-xs mx-auto md:mx-0">
              Vente en Gros et en détail des ustensiles de cuisine, les moules en silicone et les Gadgets
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-primary-deep text-xs tracking-widest uppercase mb-4 font-semibold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">Accueil</Link>
              <Link to="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">Boutique</Link>
              <Link to="/about" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">À propos</Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-primary-deep text-xs tracking-widest uppercase mb-4 font-semibold">
              Catégories
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">Ustensiles de cuisine</Link>
              <Link to="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">Moules en silicone</Link>
              <Link to="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">Gadgets</Link>
              <Link to="/shop" className="text-sm text-gray-500 hover:text-primary transition-colors duration-300">Accessoires</Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-primary-deep text-xs tracking-widest uppercase mb-4 font-semibold">
              Horaires
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-gray-500">Lundi - Samedi: 8h - 20h</p>
              <p className="text-gray-500">Dimanche: 9h - 13h</p>
              <p className="text-gray-500">Livraison disponible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau copyright - Couleur #e04e00 */}
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