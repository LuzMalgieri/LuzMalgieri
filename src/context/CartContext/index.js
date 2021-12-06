import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const isInCart = (id) => cart.find((item) => item.id === id);

  const round = (value, decimals) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  const addItem = (item, qty) => {
    if (!isInCart(item.id)) {
      const cartList = [...cart, { ...item, quantity: qty }];
      setCart(cartList);
      setTotal(round(total + item.price * qty, 2));
    } else {
      console.log("Ya agregaste este articulo al carrito");
    }
  };

  // const cartLength = () =>{}

  const removeItem = (id, qty) => {
    setCart(cart.filter((items) => items.id !== id));
    const removeTotal = cart.filter((item) => item.id === id);
    setTotal(round(total - removeTotal[0]["price"] * qty, 2));
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const checkoutComplete = (name, id) => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        clearCart,
        removeItem,
        total,
        checkoutComplete,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
