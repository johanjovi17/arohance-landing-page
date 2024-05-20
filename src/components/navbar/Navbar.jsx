import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownService, setDropDownService] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleServicesDropdown = () => {
    setDropDownService(!dropDownService);
    setIsInverted(!isInverted);
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
          <p className="navLink" onClick={handleServicesDropdown}>
            Services{" "}
            <FaChevronDown
              className={`navbar-dropdown-down-arrow ${
                isInverted ? "inverted" : ""
              }`}
            />
          </p>
          <ul
            className={`nav-bar-services-dropdown ${
              dropDownService ? "open" : ""
            }`}
          >
            <li>
              <Link
                to="/marketing"
                className="nav-bar-services-dropdown-navLink"
                onClick={() => setMenuOpen(false)}
              >
                Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="nav-bar-services-dropdown-navLink"
                onClick={() => setMenuOpen(false)}
              >
                Web/App Dev
              </Link>
            </li>
            <li>
              <Link
                to="/other"
                className="nav-bar-services-dropdown-navLink"
                onClick={() => setMenuOpen(false)}
              >
                Other
              </Link>
            </li>
          </ul>
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
