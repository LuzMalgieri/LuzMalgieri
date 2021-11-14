import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7S_Fyxmp1C7ZUJU430PydfDI0EsaLVLA",
  authDomain: "moles-ecommerce.firebaseapp.com",
  projectId: "moles-ecommerce",
  storageBucket: "moles-ecommerce.appspot.com",
  messagingSenderId: "850435110368",
  appId: "1:850435110368:web:4324547d9f4886cbdd6785"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };