/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "./App";
import "./card.css";

function Card({ product }) {
  // const [quantity, setQuantity] = useState();
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="image-container">
        <img className="card-image" src={product.image} alt="" />{" "}
        <div className="card-price">${product.price}</div>
        <div className="plus-btn">
          <i className="fa fa-plus" onClick={() => addToCart(product)}></i>
        </div>
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
