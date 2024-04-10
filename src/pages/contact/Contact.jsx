import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import "./Contact.css";
import { motion } from "framer-motion";
function Contact() {
  return (
    <>
      <div className="contact-hero-section">
        <Navbar />
        <div className="contact-central-content">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.7, ease: "easeIn" },
            }}
            className="contact-hero-title"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.9, ease: "easeIn" },
            }}
            className="contact-mini-title"
          >
            Contact for Premium Business <br /> Services
          </motion.h1>
        </div>
      </div>
      {/* form section */}
      <div className="form-container">
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
