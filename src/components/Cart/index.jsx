import React from "react";
import "../../attributes/styles/Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import CheckoutForm  from "../CheckoutForm/index";

const Cart = () => {
  const { cart, removeItem, total, clearCart } = useCart();

  return (
    <>
      {cart.length === 0 ? (
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
      ) : (
        cart.map((product) => {
          return (
            <section className="container">
              <div>
                <ul className="products">
                  <li className="row">
                    <div className="col left">
                      <div className="thumbnail">
                        <img className="imageCart" src={product.pictureUrl} alt={product.title} />
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
            </section>
          );
        })
      )}
      {cart.length === 0 ? "" : (
      <section className="container">
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
        <CheckoutForm/>
        <div className="checkout">
          <button className="noItemsBtn" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      </section>)}
    </>
  );
};

export default Cart;
