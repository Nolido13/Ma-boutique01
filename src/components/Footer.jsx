import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-tertiary/70 pt-12 pb-8 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-1">
            <p className="font-serif text-xl text-white tracking-[0.15em] mb-3">
              DEDSHOP Market
            </p>
            <p className="text-sm leading-relaxed mb-4 text-tertiary/60">
              Vente en Gros et en détail des ustensiles de cuisine, les moules en silicone et les Gadgets
            </p>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-widest uppercase mb-4 font-semibold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">Accueil</Link>
              <Link to="/shop" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">Boutique</Link>
              <Link to="/about" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">À propos</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-widest uppercase mb-4 font-semibold">
              Catégories
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">Ustensiles de cuisine</Link>
              <Link to="/shop" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">Moules en silicone</Link>
              <Link to="/shop" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">Gadgets</Link>
              <Link to="/shop" className="text-sm text-tertiary/60 hover:text-secondary transition-colors duration-300">Accessoires</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-widest uppercase mb-4 font-semibold">
              Horaires
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-tertiary/60">Lundi - Samedi: 8h - 20h</p>
              <p className="text-tertiary/60">Dimanche: 9h - 13h</p>
              <p className="text-tertiary/60">Livraison disponible</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-center text-xs text-tertiary/50">
            © {currentYear} DEDSHOP Market — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-tertiary/50 hover:text-secondary transition-colors text-xs">CGV</a>
            <a href="#" className="text-tertiary/50 hover:text-secondary transition-colors text-xs">Mentions légales</a>
            <a href="#" className="text-tertiary/50 hover:text-secondary transition-colors text-xs">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}