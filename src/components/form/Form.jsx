import React, { useState, useEffect } from "react";
import "./form.css";
import { motion } from "framer-motion";

function Form() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, such as sending form data to a server
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, ease: "easeIn" },
        }}
        className="contact-form-heading"
      >
        Let’s build amazing <br /> things together
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-form-names">
          <div className="first-name-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeHolder="Enter your first name here..."
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="last-name-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeHolder="Enter your last name here..."
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="contact-form-subject">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeHolder="Enter your subject here..."
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="contact-form-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeHolder="Enter your email here..."
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="contact-form-message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeHolder="Enter your message here..."
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="contact-form-submit-btn" type="submit">
          Submit
        </button>
      </form>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="get-touch-container"
      >
        <h2 className="get-touch-title">Get In Touch</h2>
        <div className="get-touch-mini-title">Reach Us</div>
        <ul className="get-touch-list">
          <li className="get-in-touch-items">Bangalore, India</li>
          <li className="get-in-touch-items">Kv@gmail.com</li>
          <li className="get-in-touch-items">+91 94276 73035 (Neer Shah)</li>
          <li className="get-in-touch-items">
            +91 93273 67979 (Kaivaniya Bhandari)
          </li>
        </ul>
        <span className="call-reach-title">Call/Whatsapp</span>
        <br />
        <br />
        <span className="phone-number">
          +91 94276 73035
          <br />
          (Neer Shah)
        </span>
        <br />
        <span className="phone-number">
          +91 93273 67979 <br /> (Kaivaniya Bhandari)
        </span>
        <div className="would-you-like-section">
          <div className="would-you-like-section-left-content">
            <span className="would-you-like-section-title">
              Would you like to start a project <br /> with us?
            </span>
            <p className="would-you-like-section-desc">
              Embark on a journey of digital excellence! Ready to kickstart your
              project? Let’s <br />
              create something extraordinary together. Contact us now!
            </p>
          </div>
          <div className="would-you-like-right-content">
            <a href="" className="call-now-btn">
              CALL NOW
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Form;
