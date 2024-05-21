/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../utils/db";
import { ItemList } from "../../components/ItemList/ItemList";
import { Spinner } from "../../components/spinner/spinner";
import { useParams } from "react-router-dom";

export const ItemListContainer = (greeting) => {
  const defaultTitle = "default Title";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (catId) {
      getProductsByCategory(catId).then((res) => {
        setProducts(res);
        setLoading(false);
      });
    } else {
      getProducts()
        .then((res) => {
          setProducts(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
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
