import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/index";
import { useParams } from "react-router-dom";
import "../../attributes/styles/ItemListContainer.css";
import { getFirestore } from "../../firebase/index";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const getItems = (categoryFilter) =>
      getDocs(categoryFilter).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => doc.data()));
      });

    if (id) {
      const categoryFilter = query(
        collection(db, "items"),
        where("category", "==", id)
      );
      getItems(categoryFilter);
    } else {
      const categoryFilter = query(collection(db, "items"));
      getItems(categoryFilter);
    }
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
