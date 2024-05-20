import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MakeProjectWithUs = () => {
  return (
    <div class="about-review-bottom-row">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        class="about-review-bottom-left-content"
      >
        <h2 class="about-review-bottom-heading">
          Would you like to start a project with us?
        </h2>
        <p class="about-review-bottom-desc">
          Embark on a journey of digital excellence! Ready to turn your ideas
          into reality? Let's collaborate and launch a successful project
          together.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        class="about-review-bottom-right-content"
      >
        <Link to="/contact" class="about-review-bottom-btn">
          START A PROJECT
        </Link>
      </motion.div>
    </div>
  );
};

export default MakeProjectWithUs;
