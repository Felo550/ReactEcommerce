/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../utils/db";
import { ItemList } from "../../components/ItemList/ItemList";
import { Spinner } from "../../components/spinner/spinner";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const defaultTitle = "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "cursos");

    if (catId) {
      const cons = query(
        productsCollection,
        where("category", "array-contains", catId)
      );

      getDocs(cons)
        .then(({ docs }) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
      // getProductsByCategory(catId).then((res) => {
      //   setProducts(res);
      //   setLoading(false);
      // });
    } else {
      getDocs(productsCollection)
        .then(({ docs }) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });

      // getProducts()
      //   .then((res) => {
      //     setProducts(res);
      //     setLoading(false);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [catId]);

  return (
    <main className="container">
      <h1 className="text-center"> {greeting ? greeting : defaultTitle} </h1>
      {loading === true ? (
        <Spinner />
      ) : (
        <div>
          <ItemList productsList={products} />
        </div>
      )}
    </main>
  );
};
