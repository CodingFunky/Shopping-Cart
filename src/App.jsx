import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Home from "./home.jsx";
import Shop from "./shop.jsx";
import Cart from "./cart.jsx";
import Footer from "./footer.jsx";
import "./App.css";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  isCartOpen: false,
  toggleCart: () => {},
});

export default function App() {
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
    <ShopContext.Provider
      value={{ cartItems, addToCart, isCartOpen, toggleCart, clearCart }}
    >
      <BrowserRouter>
        <Navbar />
        {isCartOpen && (
          <>
            <Cart />
            <div className="backdrop" onClick={toggleCart}></div>
          </>
        )}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          {!isCartOpen && <Footer />}
        </div>
      </BrowserRouter>
    </ShopContext.Provider>
  );
}
