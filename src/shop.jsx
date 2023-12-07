import React, { useState, useEffect } from "react";
import Card from "./card.jsx";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
// import MensClothing from './categories/MensClothing'; // Import your category components
// import WomensClothing from './categories/WomensClothing';
// import Jewelry from './categories/Jewelry';

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [currentActiveTab, setActiveTab] = useState("");
  const [currentCategory, setCurrentCategory] = useState("All");

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

  function handleCategoryChange(catagory) {
    // setActiveTab(catagory);
    // setCurrentCategory(catagory);
    if (catagory === "all") {
      setShownProducts(allProducts);
    } else if (catagory === "men's clothing") {
      setShownProducts(
        allProducts.filter((product) => product.category === "men's clothing")
      );
    } else if (catagory === "women's clothing") {
      setShownProducts(
        allProducts.filter((product) => product.category === "women's clothing")
      );
    } else if (catagory === "jewelery") {
      setShownProducts(
        allProducts.filter((product) => product.category === "jewelery")
      );
    } else if (catagory === "electronics") {
      setShownProducts(
        allProducts.filter((product) => product.category === "electronics")
      );
    }
  }

  return (
    <div className="shop-container">
      <div className="shop-banner">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-tagline">
          A place to by trinkets, stuff, and things
        </p>
      </div>
      <div className="shop-main">
        <nav className="shop-sidebar">
          <ul className="shop-links">
            <li
              className="shop-link-wrapper"
              onClick={() => handleCategoryChange("all")}
            >
              ALL PRODUCTS
            </li>
            <li
              className="shop-link-wrapper"
              onClick={() => handleCategoryChange("men's clothing")}
            >
              MEN'S CLOTHING
            </li>
            <li
              className="shop-link-wrapper"
              onClick={() => handleCategoryChange("women's clothing")}
            >
              WOMEN'S CLOTHING
            </li>
            <li
              className="shop-link-wrapper"
              onClick={() => handleCategoryChange("jewelery")}
            >
              JEWELERY
            </li>
            <li
              className="shop-link-wrapper"
              onClick={() => handleCategoryChange("electronics")}
            >
              ELECTRONICS
            </li>
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
