import React from "react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  return (
    <div className="why-choose-us-section">
      <div className="why-choose-us-central-container">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="why-choose-use-title"
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="why-choose-us-mini-title"
        >
          Exceptional expertise, innovative solutions, and client-focused
          approach—choose us for unparalleled web development that transforms
          your vision into digital reality.
        </motion.p>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.5, ease: "easeIn" },
          }}
          src="/assets/about-pic.jpg"
          alt="about-img"
          className="about-img"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.5, ease: "easeIn" },
          }}
          className="what-we-do-box"
        >
          <p className="what-we-do-title-box">What We Do</p>
          <ul className="what-we-do-list-items">
            <li className="what-we-do-list-item">UI UX Design</li>
            <li className="what-we-do-list-item">Website Development</li>
            <li className="what-we-do-list-item">Marketing</li>
            <li className="what-we-do-list-item">Social Media</li>
            <li className="what-we-do-list-item">eCommerce Store</li>
            <li className="what-we-do-list-item">Tech Support</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
