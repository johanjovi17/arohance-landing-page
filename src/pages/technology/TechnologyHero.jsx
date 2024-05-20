import React from "react";
import { motion } from "framer-motion";

const TechnologyHero = () => {
  return (
    <div className="marketing-hero-container">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="marketing-hero-left-content"
        style={{ backgroundColor: "#ff7300" }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1 } }}
          className="marketing-hero-top-header"
        >
          Web and App <br /> Development
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1 } }}
          className="marketing-hero-bottom-header"
        >
          Agency
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="marketing-hero-right-content"
      >
        <img
          src="/assets/web-dev-pic.jpg"
          alt="heroImage"
          className="marketing-pic"
        />
      </motion.div>
    </div>
  );
};

export default TechnologyHero;
