import React, { useState } from "react";
import "../../attributes/styles/ItemCount.css";

//const ItemCount = ({ stock, initial, onSubstract, onAdd, availableStock, counter }) => {
const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const availableStock = () =>
    stock > 0 ? <p>Hay {stock} unidades disponibles.</p> : <p>No hay stock.</p>;

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
        {availableStock()}
        <button className="addToCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCount;
