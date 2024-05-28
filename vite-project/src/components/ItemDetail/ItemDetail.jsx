/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de que Bootstrap esté importado

export const ItemDetail = (item) => {
  const { name, description, price, image, stock } = item;

  const { addToCart } = useCartContext();

  const handlleAddToCart = (cantItems) => {
    addToCart(item, cantItems);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <ItemCount
            stock={stock}
            initial={1}
            handlleAddToCart={handlleAddToCart}
          />
        </Card.Body>
      </Card>
    </div>
  );
};
