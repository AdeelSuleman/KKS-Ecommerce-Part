import { memo } from 'react'
import { CartProvider } from './context/CartContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  const MemoRoutes = memo(AppRoutes);
  return (
      <CartProvider>
        <MemoRoutes/>
      </CartProvider>
  )
}

export default App
