import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catalogue from "../../attributes/products.json";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const productId = parseInt(id);

  // LOGICA PARA EL ITEM COUNTER
  // const [counter, setCounter] = useState();

  // const onAdd = (stock) => (counter < stock ? setCounter(counter + 1) : null);

  // const onSubstract = (stock) => (counter > 1 ? setCounter(counter - 1) : null );

  //LOGICA PARA RENDERIZAR ITEM DETAIL

  const getItem = (item) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("No products found");
        }
      }, 2000);
    });

  useEffect(() => {
    getItem(catalogue)
      .then((res) => {
        const filteredProduct = catalogue.find(
          (product) => product.id === productId
        );
        setItem(filteredProduct);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return <>{item ? <ItemDetail item={item} /> : "Loading.."}</>;
};

export default ItemDetailContainer;
