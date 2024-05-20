import React from "react";
import { motion } from "framer-motion";

const MiddleSection = () => {
  return (
    <div className="about-second-section">
      <div className="about-row-1">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="about-row-box"
        >
          <span className="about-row-1-title">
            WELCOME TO THE DIGITAL AGENCY
          </span>
          <p className="about-row-1-big-title">
            Get a tailored solution for your business & increase online
            visibility.
          </p>
        </motion.div>
      </div>
      <div className="about-row-2">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="about-row-box"
        >
          <span className="about-row-2-title">We think different…</span>
          <p className="about-row-2-desc">
            Our mission is to empower businesses with cutting-edge web
            development, fostering digital growth through innovative solutions.
            We strive to exceed expectations, delivering excellence in every
            project and driving success for our clients in the ever-evolving
            digital landscape.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MiddleSection;
