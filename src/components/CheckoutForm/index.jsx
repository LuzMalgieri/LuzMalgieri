import React from "react";
import { useState } from "react/cjs/react.development";
import { useCart } from "../../context/CartContext/index";
import { getFirestore } from "../../firebase/index";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../../attributes/styles/CheckoutForm.css";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { cart, clearCart, total } = useCart();
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const nameSetter = (event) => {
    setName(event.target.value);
  };
  const lastNameSetter = (event) => {
    setlastName(event.target.value);
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
        last_name: lastName,
        phone: phone,
        email: email,
      },
      item: cart,
      date: Timestamp.fromDate(new Date()),
      total: total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    if (name && lastName && email && phone) {
      addDoc(ordersCollection, order).then(({ id }) =>
        Swal.fire({
          title: order.buyer.name + ", thanks for your order!",
          text: "Your order name is" + id,
          icon: "success",
          confirmButtonColor: "green",
          confirmButtonText: "Close",
        })
      );
      clearCart();
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Please input all required data");
    }
  };

  return (
    <form className="checkout">
      <div className="inputLabels">
        <label htmlFor="name">First Name:</label>
        <input
          type="text"
          value={name}
          onChange={nameSetter}
          placeholder="First Name"
        />
      </div>
      <div className="inputLabels">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={lastNameSetter}
          placeholder="Last Name"
        />
      </div>
      <div className="inputLabels">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          onChange={emailSetter}
          placeholder="john@gmail.com"
        />
      </div>
      <div className="inputLabels">
        <label htmlFor="phone">Phone number:</label>
        <input
          type="text"
          value={phone}
          onChange={phoneSetter}
          placeholder="123456789"
          required
        />
      </div>
      <button className="noItemsBtn" onClick={sendOrder}>
        Check Out
      </button>
    </form>
  );
};

export default CheckoutForm;
