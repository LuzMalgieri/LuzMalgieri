import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/index";
import { useParams } from "react-router-dom";
import "../../attributes/styles/ItemListContainer.css";
import catalogue from "../../attributes/products.json";

const ItemListContainer = (props) => {
  //LOGICA PARA EL MAPEO DE PRODUCTOS
  const { id } = useParams();
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
      .then((res) => {id ? setProducts(res.filter((product) => product.category === id)) : setProducts(catalogue);})
      .catch((err) => console.log(err));
  }, [id]);

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
