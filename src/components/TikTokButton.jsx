import { useState, useEffect } from 'react'
import { useCity } from '../context/CityContext'

export default function TikTokButton() {
  const [visible, setVisible] = useState(false)
  const { mainCity } = useCity()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={mainCity.tiktok}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-40 right-6 z-50 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all duration-300 hover:scale-110 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <i className="fab fa-tiktok text-2xl group-hover:scale-110 transition-transform duration-300"></i>
      
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:inline-block shadow-lg">
        TIKTOK {mainCity.name}
      </span>
    </a>
  )
}