import { useEffect, useRef } from 'react'
import { useCity } from '../context/CityContext'

export default function About() {
  const sectionsRef = useRef([])
  const { mainCity, secondCity } = useCity()

  useEffect(() => {
    window.scrollTo(0, 0)

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

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el
    }
  }

  // Déterminer la couleur en fonction de la ville
  const getCityColor = (cityName) => {
    return cityName === 'Calavi' ? 'primary' : 'tertiary'
  }

  return (
    <div className="min-h-screen pt-8 bg-cream">
      
      {/* Section 1 - Hero */}
      <div 
        ref={(el) => addToRefs(el, 0)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 opacity-0"
      >
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-tertiary/10 rounded-full mb-4">
            <p className="text-xs tracking-[0.2em] uppercase text-tertiary font-semibold">
              Notre histoire
            </p>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            DEDSHOP Market
          </h1>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Votre partenaire de confiance pour tous vos besoins en ustensiles de cuisine, 
            moules en silicone et gadgets innovants.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img
            src="/1.jpeg"
            alt="DEDSHOP Market"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Section 2 - Nos valeurs */}
      <div 
        ref={(el) => addToRefs(el, 1)}
        className="bg-beige py-20 opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Nos valeurs
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">
              Ce qui nous guide
            </h2>
            <div className="w-20 h-0.5 bg-tertiary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'medal', title: 'Qualité', desc: 'Produits sélectionnés avec soin' },
              { icon: 'hand-sparkles', title: 'Authenticité', desc: 'Créateurs locaux et matières nobles' },
              { icon: 'heart', title: 'Proximité', desc: 'Service client disponible 7j/7' },
            ].map((item, idx) => (
              <div 
                key={item.title}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
      </div>

      {/* Section 3 - Nos boutiques (ordre dynamique) */}
      <div 
        ref={(el) => addToRefs(el, 2)}
        className="py-20 bg-cream opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-tertiary/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-tertiary font-semibold">
                Nos boutiques
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">
              Venez nous rencontrer
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Boutique PRINCIPALE - celle de la ville sélectionnée (en premier) */}
            <div className={`bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-l-8 border-${getCityColor(mainCity.name)} shadow-lg relative`}>
              <div className={`absolute -top-3 left-6 bg-${getCityColor(mainCity.name)} text-white text-xs px-3 py-1 rounded-full`}>
                ⭐ Boutique principale ({mainCity.name})
              </div>
              <div className="flex items-center gap-3 mb-4 mt-4">
                <i className={`fas fa-map-marker-alt text-${getCityColor(mainCity.name)} text-2xl`}></i>
                <h3 className="font-serif text-xl text-gray-900">Boutique {mainCity.name}</h3>
              </div>
              <p className="text-gray-600">{mainCity.address}</p>
              {mainCity.addressDetail && <p className="text-gray-600 mb-4">{mainCity.addressDetail}</p>}
              {mainCity.reference && <p className="text-gray-600 mb-4">Référence: {mainCity.reference}</p>}
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-green-500"></i>
                <span className="text-gray-600">{mainCity.whatsapp}</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <i className="fab fa-tiktok text-black"></i>
                <a href={mainCity.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  @{mainCity.name === 'Calavi' ? 'ded_chop.2' : 'ded_shop.1'}
                </a>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <i className={`far fa-clock mr-2 text-${getCityColor(mainCity.name)}`}></i>
                  Horaires: {mainCity.horaires} (Lundi - Samedi)
                </p>
              </div>
            </div>

            {/* Boutique SECONDAIRE - l'autre ville */}
            <div className={`bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-${getCityColor(secondCity.name)}/30 opacity-90 hover:opacity-100`}>
              <div className="flex items-center gap-3 mb-4">
                <i className={`fas fa-map-marker-alt text-${getCityColor(secondCity.name)} text-2xl`}></i>
                <h3 className="font-serif text-xl text-gray-900">Boutique {secondCity.name}</h3>
              </div>
              <p className="text-gray-600">{secondCity.address}</p>
              {secondCity.addressDetail && <p className="text-gray-600 mb-4">{secondCity.addressDetail}</p>}
              {secondCity.reference && <p className="text-gray-600 mb-4">Référence: {secondCity.reference}</p>}
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-green-500"></i>
                <span className="text-gray-600">{secondCity.whatsapp}</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <i className="fab fa-tiktok text-black"></i>
                <a href={secondCity.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  @{secondCity.name === 'Calavi' ? 'ded_chop.2' : 'ded_shop.1'}
                </a>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <i className={`far fa-clock mr-2 text-${getCityColor(secondCity.name)}`}></i>
                  Horaires: {secondCity.horaires} (Lundi - Samedi)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Pourquoi nous choisir */}
      <div 
        ref={(el) => addToRefs(el, 3)}
        className="bg-beige py-20 opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Nos atouts
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">
              Pourquoi nous choisir ?
            </h2>
            <div className="w-20 h-0.5 bg-tertiary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Vente en gros & détail',
                desc: 'Que vous soyez particulier ou professionnel, nous avons des prix adaptés à vos besoins.',
                icon: 'handshake',
                color: 'primary'
              },
              {
                title: 'Qualité garantie',
                desc: 'Tous nos produits sont sélectionnés avec soin pour leur durabilité et performance.',
                icon: 'check-circle',
                color: 'tertiary'
              },
              {
                title: 'Livraison partout',
                desc: 'Service de livraison disponible sur toute la zone de couverture.',
                icon: 'shipping-fast',
                color: 'primary'
              }
            ].map((item, idx) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className={`w-16 h-16 bg-${item.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color}/20 transition-colors`}>
                  <i className={`fas fa-${item.icon} text-2xl text-${item.color}`}></i>
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}