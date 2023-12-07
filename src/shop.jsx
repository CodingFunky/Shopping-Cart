import { useState, useEffect } from "react";
import Card from "./card.jsx";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
// import MensClothing from './categories/MensClothing'; // Import your category components
// import WomensClothing from './categories/WomensClothing';
// import Jewelry from './categories/Jewelry';

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  function getProducts() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        let shown = [];
        setAllProducts(data);
        for (let i = 0; i < 8; i++) {
          shown.push(data[i]);
        }
        setShownProducts(shown);
      });
  }
  //Get Products from server on load
  useEffect(() => {
    getProducts();
  }, []);

  function handleCategoryChange(category) {
    // setActiveTab(catagory);
    // setCurrentCategory(catagory);
    setCurrentCategory(category);

    if (category === "all") {
      setShownProducts(allProducts.slice(0, 8)); // Show first 10 products or as needed
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
      setShownProducts(filteredProducts);
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
