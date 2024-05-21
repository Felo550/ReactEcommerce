import { Badge } from 'react-bootstrap';
import cart from '../../assets/carritocompras.png';

export const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt="cart-widget" />
      <Badge bg="secondary">0</Badge>
    </div>
  );
};