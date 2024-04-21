import { Navbar, Container, Nav } from 'react-bootstrap';
import CarWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Corchea Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#bajo">Curso Bajo</Nav.Link>
            <Nav.Link href="#bateria">Curso Batería</Nav.Link>
            <Nav.Link href="#piano">Curso Piano</Nav.Link>
            <Nav.Link href="#voz">Curso Voz</Nav.Link>
          </Nav>
          <CarWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
