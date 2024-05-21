import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.png";
import {CartWidget} from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/courses" className="nav-link">Cursos</Link>
            <Link to="/category/cuerdas" className="nav-link">Cuerdas</Link>
            <Link to="/category/percusion" className="nav-link">Percusion</Link>
            <Link to="/category/humana" className="nav-link">Voz</Link>
            <Link to="/about" className="nav-link">Sobre Nosotros</Link>
          </Nav>
          <Nav>
            <Link to="/cart" className="nav-link">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
