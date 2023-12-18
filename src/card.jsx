/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./card.css";

function Card({ product, addToCart }) {
  // const [quantity, setQuantity] = useState();

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
