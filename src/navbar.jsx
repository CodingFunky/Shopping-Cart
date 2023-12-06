// import React from "react";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <nav className="right-nav">
        <ul className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
        <i className="fa fa-shopping-cart"></i>
      </nav>
      {/* <i className="fa fa-shopping-cart"></i> */}
    </div>
  );
}

export default Navbar;
