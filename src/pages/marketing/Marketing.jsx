import React from "react";
import "./marketing.css";
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
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            className="marketing-hero-top-header"
          >
            Digital Marketing
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
          <img src="/assets/marketing-pic.jpg" className="marketing-pic" />
        </motion.div>
      </div>

      {/* what we offer section */}

      <div className="marketing-grid-container">
        <div className="marketing-grid-content">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1 } }}
            className="marketing-what-we-offer-title"
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
            >
              <h4 className="marketing-grid-title">Marketing</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Social Media Marketing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Digital marketing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Peformance Marketing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Facebook/ Amazon/ Google ads
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Influencer Marketing
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
            >
              <h4 className="marketing-grid-title">Branding</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Graphic Designing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Catalogue Designing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Company Naming
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Logo Designing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Colour Combination
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
            >
              <h4 className="marketing-grid-title">
                PhotoShoots and Videoshoots
              </h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Photography and Videography
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Video Editing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Photo Editing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Product Shoots
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Model Shoots
                  </h2>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1.1, ease: "easeIn" },
              }}
              className="marketing-grid-box"
            >
              <h4 className="marketing-grid-title">Listing</h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Amazon/Flipkart Listing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Myntra/Ajio Listing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Blinkit/Zepto/etc Listing
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    Listing on any other platform
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
