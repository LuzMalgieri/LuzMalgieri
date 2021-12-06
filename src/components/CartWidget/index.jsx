import React from "react";
import CartIcon from "../../attributes/img/shopping-cart.png";
import { useCart } from "../../context/CartContext/index";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {totalItems > 0 ? (
        <li className="menuItemCart">
          <Link to={"/cart"}>
            <img src={CartIcon} alt="cart" /> {totalItems}
          </Link>
        </li>
      ) : (
        console.log("No items in cart")
      )}
    </>
  );
};

export default CartWidget;
