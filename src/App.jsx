import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { CartProvider } from './context/CartContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
        <AppRoutes/>
      </CartProvider>
    </>
  )
}

export default App
