import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { db } from "../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";

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

    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    };
    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        alert("Compra realizada con éxito, su número de orden es: " + doc.id);
        clearCart();
        setFormData({ name: "", tel: "", email: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
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
                {cart?.map(({ id, name, price, qty }, index) => (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{qty}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(id, price, qty)}
                      >
                        Remover del Carrito
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4}>Total</td>
                  <td> $ {totalPrice}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        {cart.length > 0 && (
          <>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="warning" onClick={handleClearCart}>
                Vaciar Carrito
              </Button>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Card className="w-50 p-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Ingrese nombre"
                      value={formData.name}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formTel">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="number"
                      name="tel"
                      placeholder="Ingrese teléfono"
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
              </Card>
            </div>
          </>
        )}
      </div>
    </>
  );
};
