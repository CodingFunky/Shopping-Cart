/* eslint-disable react/prop-types */
// import React, { useState } from "react";

function Cart(props) {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-item-count">
          <div></div>
        </div>
        <div className="cart-empty-btn btn"></div>
      </div>
      <div className="cart-main">
        <div className="cart-items">props.cartItems[0].title</div>
      </div>
      <div className="cart-footer">
        <div className="total"></div>
      </div>
    </div>
  );
}

export default Cart;
