import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    // remove all instances of this product id
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const removeOneFromCart = (id) => {
    // remove a single instance of product with given id
    setCart((prev) => {
      const index = prev.findIndex((p) => p.id === id);
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
