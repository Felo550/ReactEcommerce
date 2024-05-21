import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/db";
import { Spinner } from "../../components/spinner/spinner";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(prodId)
      .then((product) => {
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [prodId]);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <ItemDetail {...product} />
          </div>
        </div>
      )}
    </div>
  );
};
