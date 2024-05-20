import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />

      {/* hero content  */}
      <div className="hero-content">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="small-title"
        >
          <span className="word-color"> WEB DEVELOPMENT</span>, ADVERTISING &
          MARKETING AGENCY
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="title-big"
        >
          We help <br />
          brands Grow <span className="word-color">Beautifully</span>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.3 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Link to="/contact" className="hero-btn">
            GET STARTED NOW
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
