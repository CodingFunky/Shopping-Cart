/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "./App";
import "./card.css";

function Card({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, toggleCart, isCartOpen } = useContext(ShopContext);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    if (!isCartOpen) {
      toggleCart(); // Open the cart if it's not already open
    }
  };

  return (
    <div className="card">
      <div className="image-container">
        <img className="card-image" src={product.image} alt="" />{" "}
        <div className="card-price">${product.price}</div>
        <div className="add-to-cart-btn">
          <i className="fa fa-plus" onClick={handleAddToCart}></i>
        </div>
        {/* <div className="quantity-controls">
          <button className="minus-btn" onClick={decrementQuantity}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="plus-btn" onClick={incrementQuantity}>
            +
          </button>
        </div> */}
        <div className="rating">{product.rating.rate}</div>
      </div>
      <div className="card-des">
        <h3>{product.title}</h3>
        <p className="product-des">{product.description}</p>
      </div>
    </div>
  );
}

export default Card;
