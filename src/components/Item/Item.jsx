import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../../attributes/styles/Item.css";

//const Item = ({ id, title, price, pictureUrl, stock, initial,onSubstract, onAdd, availableStock, counter }) => {
  const Item = ({ id, title, price, pictureUrl, stock, initial }) => {//
  return (
    <div className="prodCard">
      <img className="prodImg" src={pictureUrl} alt={title}></img>
      <h3 className="prodTitle">{title}</h3>
      <p className="prodPrice">${price}</p>
      {/* <ItemCount initial={initial} stock={stock} onSubstract={onSubstract(stock)} onAdd={onAdd(stock)} availableStock={availableStock(stock)} counter={counter}/> */}
      <ItemCount initial={initial} stock={stock} />
    </div>
  );
};

export default Item;
