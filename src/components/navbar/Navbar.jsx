// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div class="navbar">
//       <Link to="/" className="link">
//         <span class="logo"> TapOver. </span>
//       </Link>
//       <div class="nav-items-container">
//         <ul class="nav-items">
//           <Link to="/" className="link">
//             <li>
//               <a href="#" class="nav-item">
//                 Home
//               </a>
//             </li>
//           </Link>
//           <Link to="/about" className="link">
//             <li>
//               <a href="#" class="nav-item">
//                 About
//               </a>
//             </li>
//           </Link>
//           <Link to="/services" className="link">
//             <li>
//               <a href="#" class="nav-item">
//                 Services
//               </a>
//             </li>
//           </Link>
//           <Link to="/contact" className="link">
//             <li>
//               <a href="#" class="nav-item">
//                 Contact
//               </a>
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for navbar styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" activeClassName="active-link" className=" nav-item link">
        <span className="logo">TapOver.</span>
      </Link>
      <div className={`nav-items-container ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-items">
          <li>
            <Link
              to="/"
              activeClassName="active-link"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
