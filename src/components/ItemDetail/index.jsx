import React, { useState } from "react";
import "../../attributes/styles/ItemDetail.css";
import ItemCount from "../ItemCount/index";
import { useCart } from "../../context";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantityState] = useState(0);
  const { addItem, isInCart } = useCart();

  const quantityState = (addOn) => {
    setQuantityState(addOn);
    addItem(item, addOn);
  };

  return (
    <>
      <section className="detailBody">
        <div className="itemDetailContainer">
          <div>
            <img
              className="imgDetail"
              src={item.pictureUrl}
              alt={item.title}
            ></img>
          </div>
          <div className="textDetail">
            <h1 className="itemDetailTitle">{item.title}</h1>
            <p className="itemDetailPrice">${item.price}</p>
            <p className="itemDetailDescription">{item.description}</p>
            {isInCart(item.id) ? (
              <Link to={"/cart"}>
                <button className="addToCart">TO CHECKOUT</button>
              </Link>
            ) : (
              <ItemCount
                stock={item.stock}
                initial={item.initial}
                addToCart={quantityState}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
