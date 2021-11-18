import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/index";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getFirestore } from "../../firebase/index";

const ItemDetailContainer = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const productId = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = query(collection(db, "items"), where("id", "==", productId));
    getDocs(itemRef).then((snapshot) =>
      setItem(snapshot.docs.map((doc) => doc.data()))
    );
  }, [productId]);

  return <>{item ? <ItemDetail item={item[0]} /> : "Loading.."}</>;
};

export default ItemDetailContainer;
