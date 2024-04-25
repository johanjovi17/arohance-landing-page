import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="about-hero-section">
        <Navbar />
        <div className="about-hero-section-content">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, ease: "easeIn" },
            }}
            className="about-hero-title"
          >
            About
          </motion.h1>
        </div>
      </div>
      {/* second section */}
      <div className="about-second-section">
        <div className="about-row-1">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="about-row-box"
          >
            <span className="about-row-1-title">
              WELCOME TO THE DIGITAL AGENCY
            </span>
            <p className="about-row-1-big-title">
              Get a tailored solution for your business & increase online
              visibility.
            </p>
          </motion.div>
        </div>
        <div className="about-row-2">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="about-row-box"
          >
            <span className="about-row-2-title">We think different…</span>
            <p className="about-row-2-desc">
              Our mission is to empower businesses with cutting-edge web
              development, fostering digital growth through innovative
              solutions. We strive to exceed expectations, delivering excellence
              in every project and driving success for our clients in the
              ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
      {/* why choose us section */}
      <div className="why-choose-us-section">
        <div className="why-choose-us-central-container">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="why-choose-use-title"
          >
            Why Choose Us?
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="why-choose-us-mini-title"
          >
            Exceptional expertise, innovative solutions, and client-focused
            approach—choose us for unparalleled web development that transforms
            your vision into digital reality.
          </motion.p>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, ease: "easeIn" },
            }}
            src="/assets/about-pic.jpg"
            alt="about-img"
            className="about-img"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, ease: "easeIn" },
            }}
            className="what-we-do-box"
          >
            <p className="what-we-do-title-box">What We Do</p>
            <ul className="what-we-do-list-items">
              <li className="what-we-do-list-item">UI UX Design</li>
              <li className="what-we-do-list-item">Website Development</li>
              <li className="what-we-do-list-item">Marketing</li>
              <li className="what-we-do-list-item">Social Media</li>
              <li className="what-we-do-list-item">eCommerce Store</li>
              <li className="what-we-do-list-item">Tech Support</li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* make a project w us section */}

      <div class="about-review-bottom-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          class="about-review-bottom-left-content"
        >
          <h2 class="about-review-bottom-heading">
            Would you like to start a project with us?
          </h2>
          <p class="about-review-bottom-desc">
            Embark on a journey of digital excellence! Ready to turn your ideas
            into reality? Let's collaborate and launch a successful project
            together.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          class="about-review-bottom-right-content"
        >
          <a href="#" class="about-review-bottom-btn">
            START A PROJECT
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default About;
