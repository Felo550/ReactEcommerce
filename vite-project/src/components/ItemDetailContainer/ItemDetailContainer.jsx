import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductById } from "../../utils/db.js";
import { Spinner } from "../../components/spinner/spinner";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { db } from "../../firebase/dbConnection";
import { collection, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "cursos");
    const refDoc = doc(productsCollection, prodId);

    getDoc(refDoc)
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    // getProductById(prodId)
    //   .then((res) => {
    //     setProduct(res);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     console.log(err);
    //   });
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
