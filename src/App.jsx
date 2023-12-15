import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Home from "./home.jsx";
import Shop from "./shop.jsx";
import Cart from "./cart.jsx";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(item) {
    setCartItems((prev) => [...prev, item]);
    console.log(cartItems);
  }

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }
  return (
    <>
      {isCartOpen && <Cart items={cartItems}></Cart>}
      {isCartOpen && <div className="backdrop" onClick={toggleCart}></div>}
      <div className="page-container">
        <BrowserRouter>
          <Navbar toggleCart={toggleCart} items={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
