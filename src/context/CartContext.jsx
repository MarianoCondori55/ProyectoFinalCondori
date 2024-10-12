import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...existingItem, quantity: existingItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

