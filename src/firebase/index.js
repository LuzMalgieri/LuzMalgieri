import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnRsswWuulsec_PUHpRRXyDT9pu619T5U",
  authDomain: "ecommerce-malgieri.firebaseapp.com",
  projectId: "ecommerce-malgieri",
  storageBucket: "ecommerce-malgieri.appspot.com",
  messagingSenderId: "40145777059",
  appId: "1:40145777059:web:c95276ee1d743a1df72a16",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
