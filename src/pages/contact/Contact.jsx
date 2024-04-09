import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-hero-section">
        <Navbar />
        <div className="contact-central-content">
          <span className="contact-hero-title">Contact</span>
          <h1 className="contact-mini-title">
            Contact for Premium Business <br /> Services
          </h1>
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
