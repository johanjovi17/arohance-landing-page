import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="about-hero-section">
      <Navbar />
      <div className="about-hero-section-content">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.5, ease: "easeIn" },
          }}
          className="about-hero-title"
        >
          About
        </motion.h1>
      </div>
    </div>
  );
};

export default AboutHero;
