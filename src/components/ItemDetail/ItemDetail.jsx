import React, { useState } from "react";
import "../../attributes/styles/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Cart from "../Cart/index";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantityState] = useState(0);
  const { addItem, isInCart } = useCart();

  const quantityState = (addOn) => {
    setQuantityState(addOn);
    addItem(item, addOn);
   
  };

  console.log(setQuantityState)
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
              <Cart />
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
