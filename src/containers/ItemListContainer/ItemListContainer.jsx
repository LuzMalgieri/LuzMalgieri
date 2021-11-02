import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

import "../../attributes/styles/ItemListContainer.css";
import catalogue from "../../attributes/products.json";


const ItemListContainer = (props) => {
  

  //LOGICA PARA EL MAPEO DE PRODUCTOS

  const [products, setProducts] = useState([]);

  const getProducts = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No products found.");
        }
      }, 2000);
    });

  useEffect(() => {
    getProducts(catalogue)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{props.greeting}</p>
      <section className="itemListContainer">
        <ItemList items={products} />
      </section>
    </div>
  );
};

export default ItemListContainer;
