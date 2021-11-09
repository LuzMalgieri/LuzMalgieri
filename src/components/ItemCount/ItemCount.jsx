import React, { useState } from "react";
import "../../attributes/styles/ItemCount.css";

//const ItemCount = ({ stock, initial, onSubstract, onAdd, availableStock, counter }) => {
const ItemCount = ({ stock, initial, addToCart }) => {
  const [counter, setCounter] = useState(initial);

  const onAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const onSubstract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="itemCountContainer">
      <div className="buttonContainer">
        <button className="lessItem" onClick={onSubstract}>
          -
        </button>
        <input className="valueItem" value={counter} />
        <button className="plusItem" onClick={onAdd}>
          +
        </button>
        <button
          className="addToCart"
          onClick={() => addToCart(counter)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
