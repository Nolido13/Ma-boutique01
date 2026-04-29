import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-8">
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white px-8 py-5 rounded-xl shadow-xl hidden lg:block">
              <p className="font-serif text-3xl font-bold">DEDSHOP</p>
              <p className="text-xs tracking-widest uppercase">Market</p>
            </div>
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
                Qui sommes-nous
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-white">
              DEDSHOP Market<br />
              <span className="relative inline-block">
                <span className="italic text-secondary">Votre partenaire cuisine</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2 L200 2" stroke="#f98d1d" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
                </svg>
              </span>
            </h1>
            <p className="text-tertiary leading-relaxed mb-4">
              DEDSHOP Market est votre partenaire de confiance pour tous vos besoins en ustensiles de cuisine, 
              moules en silicone et gadgets innovants. Nous proposons la vente en gros et en détail pour particuliers et professionnels.
            </p>
            <p className="text-tertiary leading-relaxed">
              Avec deux boutiques physiques à Calavi et Porto-Novo, nous vous accueillons pour vous offrir 
              des produits de qualité à des prix compétitifs.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 - Notre spécialité */}
      <div className="bg-primary/40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
                Notre spécialité
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Ce que nous proposons
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                titre: 'Ustensiles de cuisine',
                description: 'Casseroles, poêles, couteaux, et tout l\'équipement essentiel pour une cuisine professionnelle.',
                img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: 'utensils'
              },
              {
                titre: 'Moules en silicone',
                description: 'Moules pâtisserie, cakes, chocolats - Idéal pour vos créations culinaires.',
                img: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: 'birthday-cake'
              },
              {
                titre: 'Gadgets innovants',
                description: 'Découvrez nos accessoires pratiques et originaux pour faciliter votre quotidien.',
                img: 'https://images.pexels.com/photos/3755701/pexels-photo-3755701.jpeg?auto=compress&cs=tinysrgb&w=600',
                icon: 'lightbulb'
              },
            ].map((v, idx) => (
              <div key={v.titre} className="group">
                <div className="overflow-hidden mb-4 h-64 rounded-xl">
                  <img src={v.img} alt={v.titre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                </div>
                <div className="text-center">
                  <i className={`fas fa-${v.icon} text-3xl text-secondary mb-3`}></i>
                  <h3 className="font-serif text-2xl mb-2 text-white">{v.titre}</h3>
                  <p className="text-sm text-tertiary/80 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 - Nos boutiques */}
      <div className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
                Nos points de vente
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Venez nous rencontrer
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-light rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-map-marker-alt text-secondary text-2xl"></i>
                <h3 className="font-serif text-2xl text-white">Boutique Calavi</h3>
              </div>
              <p className="text-tertiary/80 mb-2">Tankpè Von de la buvette Parana</p>
              <p className="text-tertiary/80 mb-4">Boutique en face de l'école primaire les génies</p>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-green-400"></i>
                <span className="text-tertiary/80">229 48 22 59 22</span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-sm text-tertiary/60">
                  <i className="far fa-clock mr-2 text-secondary"></i>
                  Horaires: 8h - 20h (Lun-Sam)
                </p>
              </div>
            </div>

            <div className="bg-primary-light rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-map-marker-alt text-secondary text-2xl"></i>
                <h3 className="font-serif text-2xl text-white">Boutique Porto-Novo</h3>
              </div>
              <p className="text-tertiary/80 mb-2">Quartier Kandevié</p>
              <p className="text-tertiary/80 mb-4">Référence: 0195923397</p>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-green-400"></i>
                <span className="text-tertiary/80">229 62 72 44 01</span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-sm text-tertiary/60">
                  <i className="far fa-clock mr-2 text-secondary"></i>
                  Horaires: 8h - 20h (Lun-Sam)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Pourquoi nous choisir */}
      <div className="bg-primary/40 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-secondary font-semibold">
                Nos atouts
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Pourquoi nous choisir ?
            </h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vente en gros & détail',
                desc: 'Que vous soyez particulier ou professionnel, nous avons des prix adaptés à vos besoins.',
                icon: 'handshake'
              },
              {
                title: 'Qualité garantie',
                desc: 'Tous nos produits sont sélectionnés avec soin pour leur durabilité et performance.',
                icon: 'check-circle'
              },
              {
                title: 'Livraison rapide',
                desc: 'Service de livraison disponible sur tout le territoire béninois.',
                icon: 'shipping-fast'
              }
            ].map((item, idx) => (
              <div key={item.title} className="text-center p-6 bg-primary-light rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-secondary/20 group">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <i className={`fas fa-${item.icon} text-2xl text-secondary`}></i>
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                <p className="text-tertiary/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}