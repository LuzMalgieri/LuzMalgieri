import React from "react";
import "../../attributes/styles/ItemDetail.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to={"/cart"}>
      <button className="addToCart">Go To Cart</button>
    </Link>
  );
};

export default Cart;
