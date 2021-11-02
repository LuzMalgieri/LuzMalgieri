import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items, onAdd, onSubstract}) => {
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
              onAdd={onAdd}
              onSubstract={onSubstract}
            />
          ))
        : "Loading.."}
    </>
  );
};

export default ItemList;
