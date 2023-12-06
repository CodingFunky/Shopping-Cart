import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);

  function getProducts() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        let shown = [];
        setAllProducts(data);
        for (let i = 0; i < 10; i++) {
          shown.push(data[i]);
        }
        setShownProducts(shown);
      });
  }
  //Get Products from server on load
  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="shopMain">
      <h1>Shop</h1>
      <div className="card-container">
        {shownProducts.map((product, index) => (
          <Card product={product} key={index}></Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
