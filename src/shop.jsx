import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
// import MensClothing from './categories/MensClothing'; // Import your category components
// import WomensClothing from './categories/WomensClothing';
// import Jewelry from './categories/Jewelry';

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
    <div className="shop-container">
      <div className="shop-banner">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-tagline">
          A place to by trinkets, stuff, and things
        </p>
      </div>
      <div className="shop-main">
        {/* <div className="shop-search">
          <input type="text" placeholder="Search Product"></input>
        </div> */}
        <nav className="shop-sidebar">
          <ul className="shop-links">
            <li className="shop-link-wrapper">ALL PRODUCTS</li>
            <li className="shop-link-wrapper">MEN'S CLOTHING</li>
            <li className="shop-link-wrapper">WOMEN'S CLOTHING</li>
            <li className="shop-link-wrapper">JEWELERY</li>
            <li className="shop-link-wrapper">ELECTRONICS</li>
          </ul>
        </nav>
        <div className="catagories"></div>
        <div className="card-container">
          {shownProducts.map((product, index) => (
            <Card product={product} key={index}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
