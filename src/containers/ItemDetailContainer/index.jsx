import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/index";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "../../firebase/index";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const productId = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = query(
      collection(db, "items"),
      where("id", "==", productId)
    );
    getDocs(itemRef).then((snapshot) => {
      if (snapshot !== null) {
        console.log(snapshot);
        setItem(snapshot.docs.map((doc) => doc.data()));
      } else {
        console.log("Product does not exist");
      }
    });
  }, [productId]);

  return <>{item !== null ? <ItemDetail item={item[0]} /> : "Loading.."}</>;
};

export default ItemDetailContainer;
