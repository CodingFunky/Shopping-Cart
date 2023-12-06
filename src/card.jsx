import React, { useState, useEffect } from "react";
import "./card.css";

function Card({ product }) {
  return (
    <div className="card">
      <h3 className="card-title">{product.title}</h3>
      <img className="card-image" src={product.image} alt="" />{" "}
      <p className="card-des">{product.description}</p>
    </div>
  );
}

export default Card;
