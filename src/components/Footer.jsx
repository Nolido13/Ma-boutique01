import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark to-dark-soft text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-1">
            <p className="font-serif text-3xl text-white tracking-[0.15em] mb-4">
              AURÉA
            </p>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Des accessoires qui racontent votre histoire. Sélectionnés avec soin à Cotonou.
            </p>
            {/* <a
              href="https://wa.me/22900000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-whatsapp"></i>
              Nous contacter sur WhatsApp
            </a> */}
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-4 font-semibold">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm hover:text-gold transition-colors duration-300">Accueil</Link>
              <Link to="/shop" className="text-sm hover:text-gold transition-colors duration-300">Boutique</Link>
              <Link to="/about" className="text-sm hover:text-gold transition-colors duration-300">À propos</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-4 font-semibold">
              Catégories
            </h4>
            <div className="flex flex-col gap-3">
              {['Sacs & Pochettes', 'Bijoux & Parures', 'Foulards & Ceintures', 'Lunettes & Montres'].map(cat => (
                <Link
                  key={cat}
                  to="/shop"
                  className="text-sm hover:text-gold transition-colors duration-300"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-4 font-semibold">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-gray-400">
                <i className="fas fa-map-marker-alt w-4 mr-2 text-gold"></i>
                Cotonou, Benin
              </p>
              <p className="text-gray-400">
                <i className="fas fa-envelope w-4 mr-2 text-gold"></i>
                contact@aurea.bj
              </p>
              <p className="text-gray-400">
                <i className="fas fa-phone w-4 mr-2 text-gold"></i>
                +229 00 00 00 00
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <p className="text-center text-xs text-gray-600">
            &copy; 2025 AURÉA — Tous droits reserves
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gold transition-colors text-xs">CGV</a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors text-xs">Mentions legales</a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors text-xs">Politique de confidentialite</a>
          </div>
        </div>
      </div>
    </footer>
  )
}