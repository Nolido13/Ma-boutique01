import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CallButton from './components/CallButton'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartCount={cartCount} cartItems={cartItems} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  )
}

export default App