/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { ShopContext } from "./App";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart } = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />

        <div
          className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <span className="divider"></span>
        <nav className={`right-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="links">
            <li>
              <NavLink to="/" className="active-nb" onClick={toggleMobileMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="active-nb"
                onClick={toggleMobileMenu}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="active-nb"
                onClick={toggleMobileMenu}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <i className="fa fa-shopping-cart small" onClick={toggleCart}></i>
      </div>

      {/* Additional styles for mobile menu */}
    </>
  );
}

export default Navbar;
