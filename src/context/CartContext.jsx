import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // product now includes weight + packaging
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._cartItemId !== id));
  };

  const removeOneFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((p) => p._cartItemId === id);
      if (index === -1) return prev;
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeOneFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
