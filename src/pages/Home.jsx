import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Home({ addToCart }) {
  const nouveautes = products.filter(p => p.nouveaute).slice(0, 4)

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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll opacity-0">
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                <p className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">
                  Nouvelle collection 2025
                </p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 text-dark">
                L'accessoire<br />
                <span className="relative inline-block">
                  <em className="italic text-gold not-italic">qui vous definit</em>
                  <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2 L200 2" stroke="#c9a96e" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
                  </svg>
                </span>
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-md mb-10 text-lg">
                Des pieces selectionnees pour celles et ceux qui refusent de choisir
                entre style et intention.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/shop"
                  className="px-8 py-4 bg-dark text-white text-sm tracking-widest font-medium hover:bg-gold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explorer la boutique
                </Link>
                <Link to="/about"
                  className="px-8 py-4 border-2 border-dark text-dark text-sm tracking-widest font-medium hover:bg-dark hover:text-white transition-all duration-300">
                  Notre histoire
                </Link>
              </div>
            </div>

            <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Accessoires elegants"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl">
                <p className="text-xs text-gray-500 mb-1">Tendance du moment</p>
                <p className="font-serif text-lg font-medium text-dark">Sac croco dore</p>
                <p className="text-gold font-semibold">89 000 FCFA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nouveautes */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                Selection du moment
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-dark">
              Nouveautes
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
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
            <Link to="/shop"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-dark text-dark text-sm tracking-widest font-medium hover:bg-dark hover:text-white transition-all duration-300">
              Voir tous les produits
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'truck', label: 'Livraison Benin', desc: 'Gratuite a partir de 50 000 FCFA' },
              { icon: 'lock', label: 'Paiement securise', desc: 'Visa, Mastercard, Mobile Money' },
              { icon: 'gem', label: 'Qualite garantie', desc: 'Satisfaction ou rembourse' },
              { icon: 'undo-alt', label: 'Retour 14 jours', desc: 'Satisfait ou echange' },
            ].map(item => (
              <div key={item.label} className="group animate-on-scroll opacity-0">
                <i className={`fas fa-${item.icon} text-3xl text-gold mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                <p className="text-xs tracking-widest uppercase text-dark font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-gray-400">
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