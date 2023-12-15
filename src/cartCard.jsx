/* eslint-disable no-unused-vars */
// import { useState } from "react";

function cartCard({ id, title, price, image }) {
  return (
    <div className="cart-item">
      <div className="cart-image-container">
        <img src={image} alt="" className="cart-image" />
      </div>
      <p>{title}</p>
      <h4>{price}</h4>
    </div>
  );
}

export default cartCard;
