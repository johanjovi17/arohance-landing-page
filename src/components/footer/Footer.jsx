import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-top-content">
        <div class="footer-top-content-left-content">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, ease: "easeIn" },
            }}
            class="footer-follow-us"
          >
            FOLLOW US
          </motion.h4>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="social-media-icon-container"
          >
            <a
              href="https://www.instagram.com/arohance/"
              style={{ color: "#fff" }}
            >
              <FaInstagram className="social-media-icon" />
            </a>
            <FaFacebook className="social-media-icon" />
            <FaTwitter className="social-media-icon" />
            <a
              href="https://www.linkedin.com/company/arohance-india/people/ "
              style={{ color: "#fff" }}
            >
              <FaLinkedin className="social-media-icon" />
            </a>
          </motion.div>
        </div>
        <div class="footer-top-content-right-content">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, ease: "easeIn" },
            }}
            class="footer-contact"
          >
            CONTACT
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, ease: "easeIn" },
            }}
            class="footer-india"
          >
            INDIA
          </motion.p>
          <motion.ul
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            class="contact-list-items"
          >
            <li class="contact-item">
              +91 94276 73035 <br /> (Neer Shah)
            </li>
            <li class="contact-item">
              +91 93273 67979 <br /> (Kaivaniya Bhandari)
            </li>
            <li class="contact-item">info.tapover@gmail.com</li>
          </motion.ul>
        </div>
      </div>
      <p class="copyright-statement">
        Copyright © 2024 Arohance | Powered by Arohance
      </p>
    </div>
  );
}

export default Footer;
