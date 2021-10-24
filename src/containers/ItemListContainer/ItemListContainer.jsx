import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "../../attributes/styles/ItemListContainer.css";
import catalogue from "../../attributes/products.json";

const ItemListContainer = (props) => {
  // LOGICA PARA EL ITEM COUNTER
  // //const [counter, setCounter] = useState();

  //   const availableStock = (stock) =>
  //     stock > 0 ? <p>Hay {stock} unidades disponibles.</p> : <p>No hay stock.</p>;

  //   const onAdd = (stock,counter, setCounter) => {
  //     if (counter < stock) {
  //       setCounter(counter + 1);
  //     }
  //   };

  //   const onSubstract = (stockcounter, setCounter) => {
  //     if (counter > 1) {
  //       setCounter(counter - 1);
  //     }
  //   };

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
