import React, { useState } from "react";
import "../../attributes/styles/ItemCount.css";

const ItemCount = ({ stock, initial, addToCart }) => {
  const [counter, setCounter] = useState(1);

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
        <p className="valueItem">{counter}</p>
        <button className="plusItem" onClick={onAdd}>
          +
        </button>
      </div>
      <div className="buttonCart">
        <button className="addToCart" onClick={() => addToCart(counter)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
