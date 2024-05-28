/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount = ({ stock, initial, handlleAddToCart }) => {
  const navigate = useNavigate();
  const [cantItems, setCantItems] = useState(0);
  const [prodAgregado, setProdAgregado] = useState(false);

  const handlleAdd = () => {
    if (cantItems < stock) setCantItems(cantItems + 1);
  };

  const handlleSubs = () => {
    if (cantItems > 0) setCantItems(cantItems - 1);
  };

  const handleTerminarCompra = () => {
    setProdAgregado(false);
    navigate("/cart");
  };

  const handleAgregarAlCarrito = () => {
    setProdAgregado(true);
    handlleAddToCart(cantItems);
  };

  return (
    <div className="text-center">
      <div className="mb-3">Cantidad</div>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button variant="outline-primary" onClick={handlleAdd} className="me-2"> + </Button>
        <span className="mx-2"> {cantItems} </span>
        <Button variant="outline-primary" onClick={handlleSubs} className="ms-2"> - </Button>
      </div>

      {prodAgregado ? (
        <Button variant="success" onClick={handleTerminarCompra}> Terminar Compra </Button>
      ) : (
        <Button variant="primary" onClick={handleAgregarAlCarrito}>Agregar al carrito</Button>
      )}
    </div>
  );
};
