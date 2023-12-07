/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import "./card.css";

function Card({ product }) {
  return (
    <div className="card">
      <div className="card-title">
        <h3>{product.title}</h3>
      </div>
      <div className="image-container">
        <img className="card-image" src={product.image} alt="" />{" "}
        <div className="card-price">${product.price}</div>
      </div>
      <div className="card-des">
        <p className="product-des">{product.description}</p>
      </div>
    </div>
  );
}

export default Card;
