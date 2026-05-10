import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Configuration des données par ville
export const cityData = {
  calavi: {
    name: 'Calavi',
    key: 'calavi',
    urlSlug: 'Calavi',
    tiktok: 'https://www.tiktok.com/@ded_chop.2?_r=1&_t=ZS-96Eo9D3emyl',
    whatsapp: '0162724401',
    whatsappLink: 'https://wa.me/2290162724401',
    call: '0148225922',
    callLink: 'tel:+2290148225922',
    address: 'Tankpè Von de la buvette Parana',
    addressDetail: 'Boutique en face de l\'école primaire les génies',
    reference: '',
    horaires: '7h30 - 20h30',
    bgColor: 'primary',
    borderColor: 'primary'
  },
  portonovo: {
    name: 'Porto-Novo',
    key: 'portonovo',
    urlSlug: 'PN',
    tiktok: 'https://www.tiktok.com/@ded_shop.1?_r=1&_t=ZS-96EpZMbyjMQ',
    whatsapp: '0162232228',
    whatsappLink: 'https://wa.me/2290162232228',
    call: '0195923397',
    callLink: 'tel:+2290195923397',
    address: 'Quartier Kandevié',
    addressDetail: '',
    reference: '0195923397',
    horaires: '7h30 - 20h30',
    bgColor: 'tertiary',
    borderColor: 'tertiary'
  }
}

const CityContext = createContext()

export function CityProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Déterminer la ville à partir de l'URL
  const getCityFromUrl = () => {
    const pathname = location.pathname
    if (pathname.startsWith('/Calavi')) return 'calavi'
    if (pathname.startsWith('/PN')) return 'portonovo'
    return null
  }

  const [currentCity, setCurrentCity] = useState(() => {
    // D'abord essayer l'URL
    const urlCity = getCityFromUrl()
    if (urlCity) return urlCity
    
    // Sinon localStorage
    const saved = localStorage.getItem('selectedCity')
    return saved && cityData[saved] ? saved : 'calavi'
  })

  // Sauvegarder dans localStorage quand la ville change
  useEffect(() => {
    localStorage.setItem('selectedCity', currentCity)
  }, [currentCity])

  // Mettre à jour l'URL quand la ville change
  useEffect(() => {
    const currentPath = location.pathname
    const citySlug = cityData[currentCity].urlSlug
    
    // Vérifier si on est déjà sur le bon préfixe
    if (!currentPath.startsWith(`/${citySlug}`)) {
      // Extraire le chemin après le préfixe ville
      let restOfPath = currentPath
      if (currentPath.startsWith('/Calavi')) {
        restOfPath = currentPath.replace('/Calavi', '') || '/'
      } else if (currentPath.startsWith('/PN')) {
        restOfPath = currentPath.replace('/PN', '') || '/'
      }
      
      // Naviguer vers la nouvelle URL
      navigate(`/${citySlug}${restOfPath}`)
    }
  }, [currentCity, location.pathname, navigate])

  const switchCity = (cityKey) => {
    if (cityData[cityKey]) {
      setCurrentCity(cityKey)
    }
  }

  const otherCityKey = currentCity === 'calavi' ? 'portonovo' : 'calavi'
  const otherCityInfo = cityData[otherCityKey]

  return (
    <CityContext.Provider value={{
      currentCity,
      mainCity: cityData[currentCity],
      secondCity: otherCityInfo,
      switchCity,
      cities: Object.keys(cityData)
    }}>
      {children}
    </CityContext.Provider>
  )
}

export function useCity() {
  const context = useContext(CityContext)
  if (!context) {
    throw new Error('useCity must be used within a CityProvider')
  }
  return context
}