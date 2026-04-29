import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Home({ addToCart }) {
  const nouveautes = products.slice(0, 4)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll opacity-0">
              <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-6">
                <p className="text-xs tracking-[0.25em] uppercase text-secondary font-semibold">
                  Nouveautés 2025
                </p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 text-white">
                Ustensiles de cuisine<br />
                <span className="relative inline-block">
                  <em className="italic text-secondary not-italic">Qualité professionnelle</em>
                  <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2 L200 2" stroke="#f98d1d" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
                  </svg>
                </span>
              </h1>
              <p className="text-tertiary leading-relaxed max-w-md mb-10 text-lg">
                Vente en gros et en détail. Découvrez nos ustensiles de cuisine, moules en silicone et gadgets innovants.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link 
                  to="/shop"
                  className="px-8 py-4 bg-secondary text-white font-semibold text-sm tracking-widest rounded-lg hover:bg-secondary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explorer la boutique
                </Link>
                <Link 
                  to="/about"
                  className="px-8 py-4 border-2 border-secondary text-secondary font-semibold text-sm tracking-widest rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  Notre histoire
                </Link>
              </div>
            </div>

            <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ustensiles de cuisine"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border border-secondary/30">
                <p className="text-xs text-tertiary mb-1">Promotion</p>
                <p className="font-serif text-lg font-medium text-white">-20% sur tout le site</p>
                <p className="text-secondary font-semibold">Commander maintenant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits populaires */}
      <section className="py-24 bg-primary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
                Nos meilleures ventes
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Produits populaires
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {nouveautes.map((p, index) => (
              <div 
                key={p.id} 
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={p} addToCart={addToCart} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-on-scroll opacity-0">
            <Link 
              to="/shop"
              className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-white font-semibold text-sm tracking-widest rounded-lg hover:bg-secondary-dark transition-all duration-300"
            >
              Voir tous les produits
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'truck', label: 'Livraison rapide', desc: 'Partout au Bénin' },
              { icon: 'hand-holding-usd', label: 'Gros & Détail', desc: 'Prix compétitifs' },
              { icon: 'certificate', label: 'Qualité garantie', desc: 'Produits certifiés' },
              { icon: 'headset', label: 'Support 7j/7', desc: 'Service client dédié' },
            ].map(item => (
              <div key={item.label} className="group animate-on-scroll opacity-0">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/30 transition-colors">
                  <i className={`fas fa-${item.icon} text-2xl text-secondary`}></i>
                </div>
                <p className="text-xs tracking-widest uppercase text-white font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-tertiary/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}