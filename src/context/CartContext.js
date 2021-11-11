import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.find((item) => item.id === id);

  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      const cartList = [...cart, { ...item, quantity: qty }];
      setCart(cartList);
      console.log(cartList);
    } else {
      console.log("Ya agregaste este articulo al carrito");
    }
  };

  // const cartLength = () =>{}

  const removeItem = (id) => {
    setCart(cart.filter((items) => items.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addItem, isInCart, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
