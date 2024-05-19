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
          style={{ backgroundColor: "#0191C5" }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            className="marketing-hero-top-header"
          >
            Other Services
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
          <img src="/assets/other-pic.jpg" className="marketing-pic" />
        </motion.div>
      </div>

      {/* what we offer section */}

      <div className="marketing-grid-container">
        <div className="marketing-grid-content">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            className="marketing-what-we-offer-title"
            style={{ color: "#0191C5" }}
          >
            What We Offer
          </motion.h2>
          <div className="marketing-grid-section-row-1">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="marketing-grid-box"
              style={{ backgroundColor: "#0191C5" }}
            >
              <h4 className="marketing-grid-title">Chat bots</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    creating and managing chatbot
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    whatsapp chat bot
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    AI chat bot
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Insta chat bot
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    and many more
                  </h2>
                </li>
              </ul>
            </motion.div>
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
              className="marketing-grid-box"
              style={{ backgroundColor: "#0191C5" }}
            >
              <h4 className="marketing-grid-title">Algorithm designing</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Crypto grid bots
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    other crypto bots
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Stock market analysing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    and many more
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
