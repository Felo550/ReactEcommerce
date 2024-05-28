import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/dbConnection";

import { products } from "./db";

export const importProductsFromMock = () => {
  const productsCollection = collection(db, "cursos");

  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((data) => {
  products.forEach((product) => {
    addDoc(productsCollection, product)
      .then((doc) => {
        console.log("Document written with ID: ", doc.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  });
  // });
};
