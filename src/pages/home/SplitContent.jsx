import React from "react";
import { motion } from "framer-motion";

const SplitContent = () => {
  return (
    <div className="split-content-container">
      <div className="split-content-central-content">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="split-content-left-content"
        >
          <h1 className="split-content-heading">
            We are a Website Development{" "}
            <span className="word-color">Advertising</span> &{" "}
            <span className="word-color"> Marketing firm</span> .
          </h1>
          <p className="split-content-text">
            From crafting strategic plans to managing your online buzz, Digital
            Marker empowers businesses to thrive in the digital age. We’ll
            optimize your content, SEO, and social media, propelling your brand
            to success with data-driven campaigns and creative flair. Join us
            and watch your digital presence soar!
          </p>
          <br />
          <br />
          <p className="split-content-text">
            We’re your one-stop Solutions for comprehensive marketing, from
            crafting data-driven strategies to managing engaging social media
            campaigns. Our SEO expertise bolsters your online presence, while
            creative content grabs attention and converts leads. Partner with Us
            and unlock the privilege of a thriving digital future.
          </p>
        </motion.div>
        <div className="split-content-right-content">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src="/assets/split-screen-pic.jpg"
            alt="split-screen-pic"
            className="split-screen-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitContent;
