import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Home from "./home.jsx";
import Shop from "./shop.jsx";
import Cart from "./cart.jsx";
import Footer from "./footer.jsx";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(item) {
    let newItem = { ...item };
    newItem.key = `item-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    setCartItems((prev) => [...prev, newItem]);
  }

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  function clearCart() {
    setCartItems([]);
  }
  return (
    <>
      {isCartOpen && <Cart items={cartItems} clearCart={clearCart}></Cart>}
      {isCartOpen && <div className="backdrop" onClick={toggleCart}></div>}
      <div className="page-container">
        <BrowserRouter>
          <Navbar toggleCart={toggleCart} items={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          </Routes>
        </BrowserRouter>
        {!isCartOpen && <Footer />}
      </div>
    </>
  );
}

export default App;
