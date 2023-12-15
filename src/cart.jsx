/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CartCard from "./cartCard.jsx";

function Cart(props) {
  const [total, setTotal] = useState(0);

  function getTotal() {
    const sum = props.items.reduce((acc, item) => acc + Number(item.price), 0);
    const formattedSum = parseFloat(sum.toFixed(3));
    setTotal(formattedSum);
  }

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-item-count">{props.items.length} Items</div>
        <div className="cart-empty-btn btn">Clear</div>
      </div>
      <div className="cart-main">
        <div className="cart-items">
          {props.items.map((item) => (
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
        <div className="total">Total: ${total}</div>
      </div>
    </div>
  );
}

export default Cart;
