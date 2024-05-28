import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext(); //cart es un array de productos en el carrito
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleSaveCart = () => {
    console.log("Saving in Database");
    console.log("formData", formData);
    console.log("cart", cart);

    // Aquí es donde guardarías los datos en la base de datos
    // const ordersCollection = collection(db, "orders");
    // const newOrder = {
    //   buyer: formData,
    //   items: cart,
    //   date: new Date(),
    //   total: totalPrice,
    // };
    // addDoc(ordersCollection, newOrder)
    //   .then((doc) => {
    //     alert("Compra realizada con éxito, su número de orden es: " + doc.id);
    //     console.log(doc);
    //     clearCart();
    //     setFormData({ name: "", tel: "", email: "" });
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, qty }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td>
                  <Button variant="danger" onClick={() => handleRemoveItem(id, price, qty)}>
                    Remove Item
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Total price</td>
            <td> $ {totalPrice}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Button variant="warning" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ingrese nombre"
              value={formData.name}
              onChange={(e) => handleOnChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTel">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              name="tel"
              placeholder="Ingrese telefono"
              value={formData.tel}
              onChange={(e) => handleOnChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Ingrese email"
              value={formData.email}
              onChange={(e) => handleOnChange(e)}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleSaveCart}>
              Finalizar Compra
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
