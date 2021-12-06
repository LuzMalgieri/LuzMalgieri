import React from "react";
import "../../attributes/styles/Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/index";

const Cart = () => {
  const { cart, removeItem, total, clearCart } = useCart();

  if (cart.length) {
    return (
      <section className="container">
        <div>
          <ul className="products">
            <li className="row2">
              <div className="col left">
                <div className="thumbnail">
                  <h2 className="titleSect">Product</h2>
                </div>
                <div className="detail">
                  <h2 className="titleSect">Details</h2>
                </div>
              </div>
              <div className="col right">
                <div className="quantity">
                  <h2 className="titleSect">Qty</h2>
                </div>
                <h2 className="titleSect">Remove</h2>
              </div>
            </li>
          </ul>
        </div>
        {cart.map((product) => (
          <div>
            <ul className="products">
              <li className="row">
                <div className="col left">
                  <div className="thumbnail">
                    <img
                      className="imageCart"
                      src={product.pictureUrl}
                      alt={product.title}
                    />
                  </div>
                  <div className="detail">
                    <div className="name">
                      <p>{product.title}</p>
                    </div>
                    <div className="price">${product.price}</div>
                  </div>
                </div>
                <div className="col right">
                  <div className="quantity">{product.quantity}</div>
                  <button
                    className="remove"
                    onClick={() => removeItem(product.id, product.quantity)}
                  >
                    X
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))}
        <div className="promotion">
          <label>Have A Promo Code?</label>
          <input type="text" id="promo-code" v-model="promoCode" />{" "}
          <button className=""></button>
        </div>
        <div className="summary">
          <ul>
            <li className="total">
              Total <span>${total}</span>
            </li>
          </ul>
        </div>
        <CheckoutForm />
        <div className="checkout">
          <button className="noItemsBtn" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>{" "}
      </section>
    );
  } else {
    return (
      <section className="container">
        <div>
          <h3 className="noProductsTitle">
            There are no products in your cart.
          </h3>
          <Link to="/">
            <button className="noItemsBtn">Continue Shopping</button>
          </Link>
        </div>
      </section>
    );
  }
};

export default Cart;
