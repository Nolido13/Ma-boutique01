import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

const categories = [
  { key: 'tous', label: 'Tous', icon: 'th-large' },
  { key: 'ustensiles', label: 'Ustensiles', icon: 'utensils' },
  { key: 'moules', label: 'Moules silicone', icon: 'birthday-cake' },
  { key: 'gadgets', label: 'Gadgets', icon: 'lightbulb' },
  { key: 'accessoires', label: 'Accessoires', icon: 'gift' },
]

export default function Shop({ addToCart }) {
  const [activeFilter, setActiveFilter] = useState('tous')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = products.filter(p => {
    const matchCategory = activeFilter === 'tous' || p.categorie === activeFilter
    const matchSearch = p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       p.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="min-h-screen bg-primary pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* En-tête */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
            <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
              Notre catalogue
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
            Boutique
          </h1>
          <div className="w-20 h-0.5 bg-secondary mx-auto mb-4" />
          <p className="text-tertiary text-sm">{filtered.length} produits trouvés</p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-8 flex gap-4 items-center">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-11 bg-primary-light border border-secondary/30 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-white placeholder:text-tertiary/50"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-tertiary/50"></i>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden px-4 py-3 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors text-secondary"
          >
            <i className="fas fa-sliders-h"></i>
          </button>
        </div>

        {/* Filtres Desktop */}
        <div className="hidden md:flex gap-3 justify-center flex-wrap mb-12">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat.key
                  ? 'bg-secondary text-white shadow-lg transform scale-105'
                  : 'bg-primary-light text-tertiary border border-secondary/30 hover:border-secondary hover:text-secondary'
              }`}
            >
              <i className={`fas fa-${cat.icon} mr-2`}></i>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtres Mobiles */}
        <div className={`md:hidden mb-6 transition-all duration-300 overflow-hidden ${showFilters ? 'max-h-96' : 'max-h-0'}`}>
          <div className="flex flex-wrap gap-2 p-4 bg-primary-light rounded-xl shadow-md">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveFilter(cat.key)
                  setShowFilters(false)
                }}
                className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'bg-secondary text-white'
                    : 'bg-primary text-tertiary hover:bg-secondary/20'
                }`}
              >
                <i className={`fas fa-${cat.icon} mr-1`}></i>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille produits */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 animate-fadeIn">
            <i className="fas fa-search text-5xl text-tertiary/30 mb-4"></i>
            <p className="text-tertiary text-lg mb-4">Aucun produit trouvé</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setActiveFilter('tous')
              }}
              className="text-secondary hover:text-secondary-light transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((p, index) => (
              <div
                key={p.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={p} addToCart={addToCart} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}