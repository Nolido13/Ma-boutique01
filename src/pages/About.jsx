import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Section 1 - Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative animate-fadeInUp">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Notre boutique"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold to-gold-light text-white px-8 py-5 rounded-xl shadow-xl hidden lg:block">
              <p className="font-serif text-4xl font-bold">2020</p>
              <p className="text-xs tracking-widest uppercase">Fondée à Cotonou</p>
            </div>
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                Notre histoire
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-dark">
              Née à Cotonou,<br />
              <span className="relative inline-block">
                <span className="italic text-gold">portée dans le monde</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2 L200 2" stroke="#c9a96e" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              AURÉA est née d'une envie simple : rendre accessible l'accessoire qui fait
              la différence. Chaque pièce est sélectionnée avec soin pour sa qualité,
              son design, et sa capacité à raconter une histoire.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous collaborons avec des artisans locaux et des créateurs internationaux
              pour vous offrir une sélection unique, renouvelée chaque saison.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 - Nos valeurs */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                Ce qui nous guide
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-dark">
              Nos valeurs
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                titre: 'Qualité',
                texte: 'Chaque pièce passe par une sélection rigoureuse avant d\'intégrer notre catalogue.',
                img: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: 'medal'
              },
              {
                titre: 'Authenticité',
                texte: 'Nous privilégions des créateurs locaux et des matières nobles, traçables et durables.',
                img: 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: 'hand-sparkles'
              },
              {
                titre: 'Proximité',
                texte: 'Notre équipe est disponible 7j/7 sur WhatsApp pour vous accompagner dans vos choix.',
                img: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: 'heart'
              },
            ].map((v, idx) => (
              <div key={v.titre} className="group">
                <div className="overflow-hidden mb-4 h-64 rounded-xl">
                  <img src={v.img} alt={v.titre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                </div>
                <div className="text-center">
                  <i className={`fas fa-${v.icon} text-3xl text-gold mb-3`}></i>
                  <h3 className="font-serif text-2xl mb-2 text-dark">{v.titre}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 - Chiffres clés */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { nombre: '500+', label: 'Clients satisfaits' },
              { nombre: '50+', label: 'Créateurs partenaires' },
              { nombre: '1000+', label: 'Produits vendus' },
              { nombre: '4.9', label: 'Note moyenne' },
            ].map((stat, idx) => (
              <div key={stat.label} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <p className="font-serif text-4xl md:text-5xl text-gold font-bold mb-2">{stat.nombre}</p>
                <p className="text-xs tracking-widest uppercase text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4 - Notre équipe */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                Derrière AURÉA
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-dark">
              Notre équipe
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nom: 'Sarah Koné',
                role: 'Fondatrice & Directrice Artistique',
                img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                nom: 'David Adjayi',
                role: 'Responsable des opérations',
                img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                nom: 'Marie Fagbemi',
                role: 'Styliste & Curatrice',
                img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
            ].map((membre, idx) => (
              <div key={membre.nom} className="text-center group animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img src={membre.img} alt={membre.nom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-xl text-dark mb-1">{membre.nom}</h3>
                <p className="text-sm text-gold">{membre.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}