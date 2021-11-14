import React from "react";
import { Link } from "react-router-dom";
import "../../attributes/styles/Item.css";

const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="prodCard">
      <img className="prodImg" src={pictureUrl} alt={title}></img>
      <h3 className="prodTitle">{title}</h3>
      <p className="prodPrice">${price}</p>
      <Link to={`/item/${id}`}>SHOP</Link>
    </div>
  );
};

export default Item;
