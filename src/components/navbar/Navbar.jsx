import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar">
      <span className="logo">Arohance.</span>
      <div className="menu-btn" onClick={toggleMenu}>
        <span className={`menu-bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`menu-bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`menu-bar ${menuOpen ? "open" : ""}`}></span>
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li className="nav-link">
          <Link to="/" className="navLink" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li className="nav-link">
          <Link
            to="/about"
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/services"
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/contact"
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
