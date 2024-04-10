import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

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
          <motion.ul
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            class="footer-social-media-links"
          >
            <li class="footer-social-media-link">Linkedin</li>
            <li class="footer-social-media-link">Facebook</li>
            <li class="footer-social-media-link">Instagram</li>
            <li class="footer-social-media-link">Twitter</li>
          </motion.ul>
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
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            class="contact-list-items"
          >
            <li class="contact-item">Bangalore</li>
            <li class="contact-item">+12345678</li>
            <li class="contact-item">kv@tapover.com</li>
          </motion.ul>
        </div>
      </div>
      <p class="copyright-statement">
        Copyright © 2024 TapOver | Powered by TapOver
      </p>
    </div>
  );
}

export default Footer;
