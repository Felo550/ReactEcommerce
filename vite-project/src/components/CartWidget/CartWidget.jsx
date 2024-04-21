import { Badge } from 'react-bootstrap';
import cart from '../../assets/carritocompras.png';

const CarWidget = () => {
  return (
    <div>
      <img src={cart} alt="cart-widget" />
      <Badge bg="secondary">0</Badge>
    </div>
  );
};

export default CarWidget;
