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
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" activeClassName="active-link" className=" nav-item link">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, ease: "easeIn" } }}
          className="logo"
        >
          Arohance.
        </motion.span>
      </Link>
      <div className={`nav-items-container ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-items">
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, ease: "easeIn" } }}
          >
            <Link
              to="/"
              activeClassName="active-link"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.1, ease: "easeIn" } }}
          >
            <Link
              to="/about"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2, ease: "easeIn" } }}
          >
            <Link
              to="/services"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.3, ease: "easeIn" } }}
          >
            <Link
              to="/contact"
              className="nav-item link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.li>
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
