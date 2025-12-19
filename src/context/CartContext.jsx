import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // ✅ LocalStorage sync (safe)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Stable functions (NO re-creation)
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((p) => p._cartItemId !== id));
  }, []);

  const removeOneFromCart = useCallback((id) => {
    setCart((prev) => {
      const index = prev.findIndex((p) => p._cartItemId === id);
      if (index === -1) return prev;
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // ✅ Memoized context value (MOST IMPORTANT)
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      removeOneFromCart,
      clearCart,
    }),
    [cart, addToCart, removeFromCart, removeOneFromCart, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
