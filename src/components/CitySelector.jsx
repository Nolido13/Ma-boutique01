import { useCity } from '../context/CityContext'

export default function CitySelector() {
  const { mainCity, switchCity, currentCity } = useCity()

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3">
      
      {/* 1: Bouton TikTok (NOUVEAU) */}
      <a
        href={mainCity.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title={`TikTok ${mainCity.name}`}
      >
        <i className="fab fa-tiktok text-xl"></i>
      </a>

      {/* Sélecteur de ville (NOUVEAU) */}
      <div className="bg-[#211000] rounded-full shadow-lg overflow-hidden">
        <button
          onClick={() => switchCity(currentCity === 'calavi' ? 'portonovo' : 'calavi')}
          className="px-4 py-2 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          <i className="fas fa-exchange-alt text-primary text-xs"></i>
          <span>Passer à {currentCity === 'calavi' ? 'Porto-Novo' : 'Calavi'}</span>
        </button>
      </div>
    </div>
  )
}