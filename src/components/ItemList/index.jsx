import React from "react";
import Item from "../Item/index";

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
              key={item.id}
            />
          ))
        : "Loading.."}
    </>
  );
};

export default ItemList;
