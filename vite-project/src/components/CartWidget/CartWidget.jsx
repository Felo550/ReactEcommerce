import PropTypes from 'prop-types';

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <img src="/icono-carrito.png" alt="Carrito de compras" />
      <span className="badge badge-primary">{itemCount}</span>
      <a href="/carrito">Ver carrito</a>
    </div>
  );
};

// Definición de PropTypes
CartWidget.propTypes = {
  itemCount: PropTypes.number.isRequired // Asegura que itemCount sea un número y que sea requerido
};

export default CartWidget;
