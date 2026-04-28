import { useState } from 'react'

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.nom}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {product.nouveaute && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-gold to-gold-light text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
            Nouveau
          </span>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 py-3.5 bg-dark/95 backdrop-blur-sm
            text-white text-xs tracking-widest font-medium
            translate-y-full group-hover:translate-y-0
            transition-all duration-500 cursor-pointer hover:bg-gold group-hover:shadow-lg"
        >
          {added ? (
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-check"></i>
              Ajoute au panier
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <i className="fas fa-plus"></i>
              Ajouter au panier
            </span>
          )}
        </button>
      </div>

      <div className="pt-4 px-3 pb-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-semibold mb-2">
          {product.categorie}
        </p>
        <h3 className="font-serif text-lg font-medium text-dark mb-1 line-clamp-1">
          {product.nom}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-base font-semibold text-gold">
          {product.prix.toLocaleString()} FCFA
        </p>
      </div>
    </div>
  )
}