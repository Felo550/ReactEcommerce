import { useState } from 'react'; // Solo importamos useState, ya que es lo único que usamos

import  NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // Estado que representa la cantidad de elementos en el carrito
  const [itemCount] = useState(0); // Eliminamos setItemCount ya que no se utiliza

  return (
    <div className="App">
      <NavBar />
      <CartWidget itemCount={itemCount} />
      <ItemListContainer category="Batería" />
    </div>
  );
}

export default App;
