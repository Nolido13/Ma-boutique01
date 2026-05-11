import { useState } from 'react'


function App() {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? {...i, qty: i.qty + 1} : i)
      return [...prev, {...product, qty: 1}]
    })
    setCartCount(c => c + 1)
  }

  return (
    <div className="app">
      <h1>En construction ..</h1>
    </div>
  )
}

export default App