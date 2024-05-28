// import { useState } from "react";
// import { products } from "../../utils/db"; // Importa los productos desde db.jsx
import { importProductsFromMock } from "../../utils/importProducts";


export const Home = () => {
  // const [addedProducts, setAddedProducts] = useState([]);

  // const importProductsFromMock = () => {
  //   // setAddedProducts(products);
  // };

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-4">Home page</h1>
        <button onClick={importProductsFromMock} className="btn btn-primary mb-3">
          Cargar productos desde mock
        </button>
       
      </div>
    </>
  );
};
