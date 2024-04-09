import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-top-content">
        <div class="footer-top-content-left-content">
          <h4 class="footer-follow-us">FOLLOW US</h4>
          <ul class="footer-social-media-links">
            <li class="footer-social-media-link">Linkedin</li>
            <li class="footer-social-media-link">Facebook</li>
            <li class="footer-social-media-link">Instagram</li>
            <li class="footer-social-media-link">Twitter</li>
          </ul>
        </div>
        <div class="footer-top-content-right-content">
          <h4 class="footer-contact">CONTACT</h4>
          <p class="footer-india">INDIA</p>
          <ul class="contact-list-items">
            <li class="contact-item">Bangalore</li>
            <li class="contact-item">+12345678</li>
            <li class="contact-item">kv@tapover.com</li>
          </ul>
        </div>
      </div>
      <p class="copyright-statement">
        Copyright © 2024 TapOver | Powered by TapOver
      </p>
    </div>
  );
}

export default Footer;
