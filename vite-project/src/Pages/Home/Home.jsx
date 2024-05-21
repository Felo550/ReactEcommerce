import { useState } from "react";
import { products } from "../../utils/db"; // Importa los productos desde db.jsx

export const Home = () => {
  const [addedProducts, setAddedProducts] = useState([]);

  const importProductsFromMock = () => {
    setAddedProducts(products);
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-4">Home page</h1>
        <button onClick={importProductsFromMock} className="btn btn-primary mb-3">
          Agregar productos desde mock
        </button>
        <div className="row">
          {addedProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
