import React from "react";
import "../../attributes/styles/ItemDetail.css";

const ItemDetail = ({ item }) => {
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
            {/* <ItemCount onAdd={onAdd.stock}
              onSubstract={onSubstract}/> */}
            <button className="addToCart">Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
