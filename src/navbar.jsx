/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <i className="fa fa-shopping-cart" onClick={props.toggleCart}></i>
        </nav>
      </div>

      {/* Additional styles for mobile menu */}
    </>
  );
}

export default Navbar;
