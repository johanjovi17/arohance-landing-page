import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

const Marketing = () => {
  return (
    <>
      <Navbar />
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
          <img src="/assets/web-dev-pic.jpg" className="marketing-pic" />
        </motion.div>
      </div>

      {/* what we offer section */}

      <div className="marketing-grid-container">
        <div className="marketing-grid-content">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            className="marketing-what-we-offer-title"
            style={{ color: "#ff7300" }}
          >
            What We Offer
          </motion.h2>
          <div className="marketing-grid-section-row-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, ease: "easeIn" },
              }}
              className="marketing-grid-box"
              style={{ backgroundColor: "#ff7300" }}
            >
              <h4 className="marketing-grid-title">Web Development</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Static and Dynamic
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Ecommerce
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Informative
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Service Based
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Starting from ₹7000*
                  </h2>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.7, ease: "easeIn" },
              }}
              className="marketing-grid-box"
              style={{ backgroundColor: "#ff7300" }}
            >
              <h4 className="marketing-grid-title">SEO</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Increase your website Ranking
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Updating your website
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    accumulating keywords
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    we make sure that your <br /> website ranks on top
                  </h2>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.9, ease: "easeIn" },
              }}
              className="marketing-grid-box"
              style={{ backgroundColor: "#ff7300" }}
            >
              <h4 className="marketing-grid-title">App Development</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Ecommerce
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Service Based
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Management apps
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    And many more
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Starting at ₹12000
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Playstore and Appstore listing
                  </h2>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Marketing;
