import React from "react";
import CartIcon from "../../attributes/img/shopping-cart.png";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const {cartLength} = useCart();

  return (
    <li className="menuItemCart">
      <a href="*">
        <img src={CartIcon} alt="cart" /> 2
      </a>
    </li>
  );
};

export default CartWidget;
