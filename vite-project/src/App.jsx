/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Layout/Navigation/Navigation.jsx";
import { Footer } from "./components/Layout/Footer/Footer.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Error } from "./components/Error/Error.jsx";
// import { Cart } from "./components/Cart/Cart.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<ItemListContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/courses/:prodId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;