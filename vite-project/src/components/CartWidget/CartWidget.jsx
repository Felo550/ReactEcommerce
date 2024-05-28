import { Badge } from "react-bootstrap";
import cart from "../../assets/carritocompras.png";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalQty } = useCartContext();
  return (
    <div>
      <img src={cart} alt="cart-widget" />
      <Badge bg="secondary">{totalQty}</Badge>
    </div>
  );
};
