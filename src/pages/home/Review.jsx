import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="review-container">
      <div className="review-container-central-content">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          className="review-title"
        >
          Our Clients Review
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          className="review-mini-title"
        >
          Don’t settle for mediocrity. Choose Arohance and watch your brand
          soar!
        </motion.span>
        <span className="review-section-line"></span>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="review-row"
        >
          <div className="review-box">
            <p className="review-text">
              Guys the website ka first look is damn crazy and amazing ❤Your
              work is much appreciated and very well executed 💯Must say very
              professional
            </p>
            <div className="review-person-info">
              <img
                src="/assets/parshwa.jpg"
                alt=""
                className="review-person-pic"
              />
              <span className="review-person-name">Shreyansh Jain, CFO</span>
            </div>
          </div>
          <div className="review-box">
            <p className="review-text">
              Really very professional and flexible, website was upto the mark
              and the graphics done in the website were really good.
            </p>
            <div className="review-person-info">
              <img src="/assets/vrf.jpg" alt="" className="review-person-pic" />
              <span className="review-person-name">
                Ravindra Bhandari, Founder & CEO
              </span>
            </div>
          </div>
        </motion.div>
        <span className="review-section-line"></span>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="review-row"
        >
          <div className="review-box">
            <p className="review-text">
              It’s very well done. Good stuff @Neer @Kaivaniya (Me) amazing
              content and designing
            </p>
            <div className="review-person-info">
              <img
                src="/assets/daadis.jpg"
                alt=""
                className="review-person-pic"
              />
              <span className="review-person-name">
                Lucky Jain, Founder & CEO
              </span>
            </div>
          </div>
          <div className="review-box">
            <p className="review-text">
              Work was really good, NFC card works seamlessly and helped me to
              give a better impression while making connections in seminar.
            </p>
            <div className="review-person-info">
              <img
                src="/assets/smart.jpg"
                alt=""
                className="review-person-pic"
              />
              <span className="review-person-name">
                Mukesh Oswal Founder & CEO
              </span>
            </div>
          </div>
        </motion.div>
        <span className="review-section-line"></span>
      </div>
      <div className="review-bottom-row">
        <div className="review-bottom-left-content">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="review-bottom-heading"
          >
            Would you like to start a project with us?
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="review-bottom-desc"
          >
            Embark on a journey of digital excellence! Ready to turn your ideas
            into reality? Let's collaborate and launch a successful project
            together.
          </motion.p>
        </div>
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
          className="review-bottom-right-content"
        >
          <Link to="/contact" className="review-bottom-btn-link">
            START A PROJECT
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
