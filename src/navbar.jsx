/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <span className="divider"></span>
        <nav className="right-nav">
          <ul className="links">
            <li>
              <NavLink to="/" className="active-nb">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="active-nb">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="active-nb">
                About
              </NavLink>
            </li>
          </ul>
          <i className="fa fa-shopping-cart" onClick={props.toggleCart}></i>
        </nav>
        {/* <i className="fa fa-shopping-cart"></i> */}
      </div>
    </>
  );
}

export default Navbar;
