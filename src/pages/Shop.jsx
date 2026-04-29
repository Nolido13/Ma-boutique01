import { useEffect, useRef, useState } from 'react'
import images from '../data/images.json'

export default function Shop() {
  const [visibleImages, setVisibleImages] = useState([])
  const sectionsRef = useRef([])

  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
            entry.target.style.opacity = '1'
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Animation progressive des images
    const timer = setTimeout(() => {
      const newVisible = []
      for (let i = 0; i < Math.min(12, images.length); i++) {
        setTimeout(() => {
          setVisibleImages(prev => [...prev, images[i]])
        }, i * 100)
      }
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const addToRefs = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el
    }
  }

  return (
    <section className="min-h-screen bg-cream pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* En-tête */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className="text-center mb-12 opacity-0"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
              Notre galerie
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-gray-900 mb-4">
            Boutique
          </h1>
          <div className="w-20 h-0.5 bg-tertiary mx-auto mt-4" />
          <p className="text-gray-500 text-sm mt-4">{images.length} produits disponibles</p>
        </div>

        {/* Grille images avec animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              ref={(el) => addToRefs(el, index + 1)}
              className="group opacity-0 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => window.open(img.image, '_blank')}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img
                  src={img.image}
                  alt={`Produit ${img.id}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-semibold tracking-wider">Voir le produit</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}