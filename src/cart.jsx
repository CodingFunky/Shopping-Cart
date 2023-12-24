/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "./App";
import CartCard from "./cartCard.jsx";
import "./cart.css";

function Cart() {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const { cartItems, clearCart } = useContext(ShopContext);

  function getTotal() {
    const sum = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
    const formattedSum = parseFloat(sum.toFixed(3));
    setTotal(formattedSum);
  }

  function getTax() {
    const tax = total * 0.8;
    setTax(tax);
  }

  useEffect(() => {
    getTotal();
    getTax;
  }, [cartItems]);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-item-count">{cartItems.length} Items</div>
        <div className="cart-empty-btn btn" onClick={clearCart}>
          Clear
        </div>
      </div>
      <div className="cart-main">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartCard
              key={item.key}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="cart-footer">
        <div className="checkout-btn btn">Checkout</div>
        <div className="total-container">
          <div className="subTotal">Sub Total: ${total}</div>
          <div className="tax">Taxes: {tax}</div>
          <div className="total">Total: ${(total + 4.2).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
