import { Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <ItemListContainer message={'Bienvenidos'} />
      </Container>
    </div>
  );
}

export default App;
