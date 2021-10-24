import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length
        ? items.map((item) => (
            <Item
              id={item.id}
              title={item.title}
              price={item.price}
              pictureUrl={item.pictureUrl}
              stock={item.stock}
              initial={item.initial}
            />
          ))
        : "Loading.."}
    </>
  );
};

export default ItemList;
