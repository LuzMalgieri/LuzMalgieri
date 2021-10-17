import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../../attributes/styles/ItemListContainer.css";

const ItemListContainer = (props) => (
  <div>
    <p>{props.greeting}</p>
    <section className="itemListContainer">
      <ItemCount initial={1} stock={5} />
      <ItemCount initial={1} stock={2} />
      <ItemCount initial={1} stock={10} />
    </section>
  </div>
);

export default ItemListContainer;
