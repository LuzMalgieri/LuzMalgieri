import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <Item
      id={items.id}
      title={items.title}
      price={items.price}
      pictureUrl={items.pictureUrl}
      stock={items.stock}
      initial={items.initial}
    />
  );
};

export default ItemList;
