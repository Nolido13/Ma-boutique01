import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

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
      href="https://wa.me/22948225922"
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform duration-300"></i>
      <span className="absolute right-full mr-3 bg-primary-dark text-white text-xs font-medium py-1.5 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Nous contacter
      </span>
    </a>
  )
}