import { useState, useEffect, useRef } from 'react'
import images from '../data/images.json'

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef(null)

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Démarrer l'auto-défilement
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 4000)
  }

  // Arrêter l'auto-défilement
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Gérer l'auto-défilement
  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, []) // Ne dépend de rien, démarre une fois

  // Redémarrer l'auto-défilement après un clic manuel
  const handleManualNext = () => {
    stopAutoPlay()
    nextSlide()
    startAutoPlay()
  }

  const handleManualPrev = () => {
    stopAutoPlay()
    prevSlide()
    startAutoPlay()
  }

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentIndex) {
      stopAutoPlay()
      setIsAnimating(true)
      setCurrentIndex(index)
      setTimeout(() => {
        setIsAnimating(false)
        startAutoPlay()
      }, 500)
    }
  }

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto px-4 overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={img.id} className="w-full flex-shrink-0">
              <img
                src={img.image}
                alt={`Produit ${img.id}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-contain bg-gray-50"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Bouton précédent */}
        <button
          onClick={handleManualPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Bouton suivant */}
        <button
          onClick={handleManualNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicateurs de pagination */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? 'bg-primary w-6 h-2' 
                  : 'bg-white/60 hover:bg-white/80 w-2 h-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}