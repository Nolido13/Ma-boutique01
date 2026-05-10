import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import { useCity } from '../context/CityContext'

export default function Home() {
  const sectionsRef = useRef([])
  const currentYear = new Date().getFullYear()
  const { mainCity, secondCity } = useCity()

  // Fonction pour générer les liens avec le préfixe de la ville
  const getCityPath = (path) => {
    const citySlug = mainCity.urlSlug
    if (path === '/') return `/${citySlug}`
    return `/${citySlug}${path}`
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
            entry.target.style.opacity = '1'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el
    }
  }

  return (
    <>
      {/* Hero Section avec carrousel */}
      <section 
        ref={(el) => addToRefs(el, 0)}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-beige to-cream py-20"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tertiary rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="text-center mb-8 animate-fadeInUp">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 backdrop-blur-sm">
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
                Collection {currentYear}
              </p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4">
              DEDSHOP Market
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Découvrez notre sélection d'ustensiles de cuisine, moules en silicone et gadgets innovants
            </p>
          </div>
          
          <ImageCarousel />
          
          <div className="text-center mt-12 animate-fadeInUp">
            <Link 
              to={getCityPath('/shop')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-tertiary text-white font-semibold text-sm tracking-widest rounded-lg hover:bg-tertiary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir la boutique
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Section valeurs */}
      <section 
        ref={(el) => addToRefs(el, 1)}
        className="py-20 bg-white opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Nos engagements
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">
              Pourquoi choisir DEDSHOP ?
            </h2>
            <div className="w-20 h-0.5 bg-tertiary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'truck', title: 'Livraison rapide', desc: 'Partout' },
              { icon: 'hand-holding-usd', title: 'Gros & détail', desc: 'Prix compétitifs' },
              { icon: 'headset', title: 'Support 7j/7', desc: 'Service client dédié' },
            ].map((item, idx) => (
              <div 
                key={item.title}
                className="text-center p-6 bg-cream rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas fa-${item.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section contact - DYNAMIQUE AVEC addressDetail */}
      <section 
        ref={(el) => addToRefs(el, 2)}
        className="py-20 bg-beige opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-tertiary/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-tertiary font-semibold">
                Nous contacter
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">
              Besoin d'aide ?
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* WhatsApp - Ville principale */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-whatsapp text-3xl text-green-500"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp {mainCity.name}</h3>
              <a href={mainCity.whatsappLink} className="text-gray-600 hover:text-primary transition-colors">
                {mainCity.whatsapp}
              </a>
              <p className="text-xs text-gray-400 mt-2">
                <i className="fas fa-map-marker-alt mr-1"></i>
                {mainCity.address}
              </p>
              {/* addressDetail pour Calavi */}
              {mainCity.addressDetail && mainCity.addressDetail !== '' && (
                <p className="text-xs text-gray-400 mt-0.5">
                  {mainCity.addressDetail}
                </p>
              )}
              {/* Référence pour Porto-Novo */}
              {mainCity.reference && !mainCity.addressDetail && (
                <p className="text-xs text-gray-400 mt-0.5">
                  Réf: {mainCity.reference}
                </p>
              )}
            </div>

            {/* WhatsApp - Ville secondaire */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-whatsapp text-3xl text-green-500"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp {secondCity.name}</h3>
              <a href={secondCity.whatsappLink} className="text-gray-600 hover:text-tertiary transition-colors">
                {secondCity.whatsapp}
              </a>
              <p className="text-xs text-gray-400 mt-2">
                <i className="fas fa-map-marker-alt mr-1"></i>
                {secondCity.address}
              </p>
              {/* addressDetail pour Calavi (si secondCity est Calavi) */}
              {secondCity.addressDetail && secondCity.addressDetail !== '' && (
                <p className="text-xs text-gray-400 mt-0.5">
                  {secondCity.addressDetail}
                </p>
              )}
              {/* Référence pour Porto-Novo (si secondCity est Porto-Novo) */}
              {secondCity.reference && !secondCity.addressDetail && (
                <p className="text-xs text-gray-400 mt-0.5">
                  Réf: {secondCity.reference}
                </p>
              )}
            </div>
          </div>

          {/* Ligne d'appel direct */}
          <div className="text-center mt-8">
            <div className="inline-block p-4 bg-white rounded-2xl shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone-alt text-tertiary text-lg"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Appel direct</p>
                  <a href={mainCity.callLink} className="text-gray-600 hover:text-tertiary transition-colors font-semibold">
                    {mainCity.call}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {mainCity.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}