import React from "react";
import { useState } from "react/cjs/react.development";
import { useCart } from "../../context";
import { getFirestore } from "../../firebase/index";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../../attributes/styles/CheckoutForm.css";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart, total } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const nameSetter = (event) => {
    setName(event.target.value);
  };
  const phoneSetter = (event) => {
    setPhone(event.target.value);
  };
  const emailSetter = (event) => {
    setEmail(event.target.value);
  };

  const sendOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      item: cart,
      date: Timestamp.fromDate(new Date()),
      total: total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    // const setOrderData = () => addDoc(ordersCollection, order);
    // setOrderData();
    // checkoutComplete(order.buyer.name, "ii");
    addDoc(ordersCollection, order).then(({id}) => alert("Su numero de orden es "+ id));
    clearCart();
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form className="checkout">
      <div className="inputLabels">
        <label htmlFor="name">Full Name:</label>
        <input type="text" value={name} onChange={nameSetter} />
      </div>
      <div className="inputLabels">
        <label htmlFor="email">Email:</label>
        <input type="text" value={email} onChange={emailSetter} />
      </div>
      <div className="inputLabels">
        <label htmlFor="phone">Phone number:</label>
        <input type="text" value={phone} onChange={phoneSetter} />
      </div>
      {/* <Link to="/checkout"> */}
        <button className="noItemsBtn" onClick={sendOrder}>
          Check Out
        </button>
      {/* </Link> */}
    </form>
  );
};

export default CheckoutForm;
