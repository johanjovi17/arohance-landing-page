import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
// gif files
import seo from "./seo.gif";
import ecomm from "./ecomm.gif";
import content from "./content.gif";
import digMark from "./digMark.gif";
import perf from "./perf.gif";
import web from "./web.gif";
import influencer from "./influencer.gif";

// animation
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    // incremental counter function
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      // Clean up the interval on component unmount
      return () => clearInterval(counter);
    }, []);

    // Empty dependency array ensures this effect runs only once on component mount
  }, []);

  return (
    <>
      <div className="hero-container">
        <Navbar />

        {/* hero content  */}
        <div className="hero-content">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="small-title"
          >
            <span className="word-color"> WEB DEVELOPMENT</span>, ADVERTISING &
            MARKETING AGENCY
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="title-big"
          >
            We help <br />
            brands Grow <span className="word-color">Beautifully</span>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.3 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <a href="" className="hero-btn">
              GET STARTED NOW
            </a>
          </motion.div>
        </div>
      </div>

      {/* <!-- grid section --> */}
      <div className="grid-container">
        <div className="grid-content">
          <div className="grid-box-section row1">
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.5, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">Web Development</h4>
              <span className="grid-box-num">01</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Web Hosting and Domain Setup
                  </h2>
                  <p className="grid-box-service-desc">
                    At our service, we offer reliable web hosting solutions and
                    help you set up your custom domain name. Web hosting is like
                    renting space on the internet where your website files and
                    data reside.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Web Application SEO Integration
                  </h2>
                  <p className="grid-box-service-desc">
                    Looking to enhance your online presence? We specialize in
                    developing and integrating web applications that streamline
                    your business processes and engage your audience
                    effectively.
                  </p>
                </li>
              </ul>

              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.6, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">App Development</h4>
              <span className="grid-box-num">02</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Custom App Development Services
                  </h2>
                  <p className="grid-box-service-desc">
                    At our company, we specialize in custom app development
                    tailored to meet your unique business needs. Whether you're
                    looking to build a mobile app, a web-based application, or a
                    cross-platform solution, we have the expertise to bring your
                    ideas to life.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Integration and Maintenance
                  </h2>
                  <p className="grid-box-service-desc">
                    In addition to app development, we offer integration
                    services to connect your app with third-party APIs,
                    services, and databases. We also provide ongoing maintenance
                    and support to ensure your app remains secure, up-to-date,
                    and compatible with new technologies.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.7, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">Marketing</h4>
              <span className="grid-box-num">03</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Website Audit and Optimization
                  </h2>
                  <p className="grid-box-service-desc">
                    We conduct a thorough website audit to identify areas for
                    improvement. This includes optimizing on-page elements such
                    as meta tags, headings, and content structure to ensure
                    search engines can crawl and index your site effectively.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Keyword Research and Strategy
                  </h2>
                  <p className="grid-box-service-desc">
                    We perform extensive keyword research to identify relevant
                    search terms and phrases that potential customers are using.
                    This forms the basis of our SEO strategy to target
                    high-value keywords and optimize your content accordingly.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>

            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.8, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">Ai Automation and Chatbots</h4>
              <span className="grid-box-num">04</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    AI Automation Solutions
                  </h2>
                  <p className="grid-box-service-desc">
                    We leverage artificial intelligence (AI) and machine
                    learning (ML) technologies to automate repetitive tasks,
                    optimize workflows, and increase productivity. This includes
                    automating data entry, report generation, customer support
                    tasks, and more.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Chatbot Development
                  </h2>
                  <p className="grid-box-service-desc">
                    We develop intelligent chatbots powered by natural language
                    processing (NLP) to provide instant and personalized
                    customer support, answer FAQs, and assist users in
                    real-time. Our chatbots can be integrated into websites,
                    mobile apps, and messaging platforms.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.9, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">
                Social Media & Performance Marketing
              </h4>
              <span className="grid-box-num">05</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Social Media Management
                  </h2>
                  <p className="grid-box-service-desc">
                    We offer strategic social media management services to build
                    and maintain a strong online presence across platforms like
                    Facebook, Instagram, Twitter, LinkedIn, and more. Our
                    services include content creation, scheduling, community
                    engagement, and analytics to optimize performance and
                    increase audience engagement.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Paid Advertising Campaigns
                  </h2>
                  <p className="grid-box-service-desc">
                    We design and execute performance-driven paid advertising
                    campaigns across various channels, including Google Ads,
                    Facebook Ads, LinkedIn Ads, and more. Our campaigns are
                    optimized for maximum ROI, targeting specific demographics,
                    interests, and behaviors to drive quality traffic and
                    conversions.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">Performance Marketing</h4>
              <span className="grid-box-num">06</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Targeted Advertising Campaigns
                  </h2>
                  <p className="grid-box-service-desc">
                    We design and execute targeted advertising campaigns across
                    digital channels, including search engines (Google Ads),
                    social media platforms (Facebook Ads, Instagram Ads),
                    display networks, and more. Our campaigns are meticulously
                    optimized to reach specific audience segments and drive
                    high-quality traffic that converts into actionable outcomes.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Conversion Rate Optimization (CRO)
                  </h2>
                  <p className="grid-box-service-desc">
                    We focus on optimizing conversion rates by refining landing
                    pages, ad creatives, and call-to-action elements to maximize
                    the likelihood of user engagement and conversion.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">Physical Marketing</h4>
              <span className="grid-box-num">07</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">Print Advertising</h2>
                  <p className="grid-box-service-desc">
                    We specialize in print advertising campaigns, including
                    newspaper ads, magazine placements, direct mailers,
                    brochures, flyers, and posters. Our creative team designs
                    compelling visuals and messaging to capture attention and
                    convey your brand message effectively to offline audiences.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Event Marketing and Sponsorship
                  </h2>
                  <p className="grid-box-service-desc">
                    We plan and execute strategic event marketing initiatives,
                    such as trade shows, conferences, product launches, and
                    community events. Through event sponsorships, booths,
                    presentations, and activations, we create memorable brand
                    experiences that resonate with event attendees and drive
                    engagement.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">Graphic Designing</h4>
              <span className="grid-box-num">08</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Logo and Brand Identity Design
                  </h2>
                  <p className="grid-box-service-desc">
                    We specialize in logo design and brand identity development,
                    crafting unique visual representations that resonate with
                    your brand values and target audience. Our designers work
                    closely with you to create logos that are memorable,
                    versatile, and aligned with your brand's personality.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Marketing Collateral Creation
                  </h2>
                  <p className="grid-box-service-desc">
                    We design a wide range of marketing collateral, including
                    brochures, flyers, posters, business cards, presentations,
                    and infographics. Our creative team ensures consistency in
                    design elements and messaging across all collateral,
                    maintaining brand integrity and enhancing brand recognition.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
            <div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 1, ease: "easeIn" },
              }}
              className="grid-box"
            >
              <h4 className="grid-title">NFC BUSINESS CARDS</h4>
              <span className="grid-box-num">09</span>
              <ul className="grid-list">
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">NFC Business Cards</h2>
                  <p className="grid-box-service-desc">
                    We design and produce NFC-enabled business cards that allow
                    recipients to access your contact information, portfolio, or
                    website with a simple tap of their smartphone. NFC business
                    cards create memorable interactions and make it easy for
                    prospects to connect with you digitally, ensuring your
                    information is always accessible.
                  </p>
                </li>
                <li className="grid-list-item">
                  <h2 className="grid-box-service-title">
                    Contactless Payment Systems
                  </h2>
                  <p className="grid-box-service-desc">
                    We implement NFC-based contactless payment solutions for
                    businesses, enabling customers to make secure payments with
                    NFC-enabled devices, such as smartphones and smartwatches.
                    Our contactless payment systems enhance convenience, speed
                    up transactions, and improve customer satisfaction at
                    checkout.
                  </p>
                </li>
              </ul>
              <a href="" className="grid-read-more-btn">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- web solutions section --> */}
      <div className="web-solutions-container">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="web-solutions-heading"
        >
          Web Solutions
        </motion.h2>
        <motion.h4
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="web-solutions-mini-title"
        >
          We create your digital presence and increase your visibility with our
          <span className="word-color"> web development</span> solutions.
        </motion.h4>
        <div className="web-solutions-row">
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
            className="web-solutions-box"
          >
            {/* <Lottie animationData={seo} style={{ width: "230px" }} /> */}
            <img src={seo} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">
              Search Engine Optimization
            </h3>
            <p className="web-solution-box-description">
              With effective SEO practices, we increase the ranking of your
              website and increase site traffic and visibility.
            </p>
          </motion.div>
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
            className="web-solutions-box"
          >
            {/* <Lottie animationData={ecomm} style={{ width: "230px" }} /> */}
            <img src={ecomm} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">E-Commerce Solutions</h3>
            <p className="web-solution-box-description">
              As Shopify experts, we enhance your e-commerce store with tailored
              solutions and seamless transitions.
            </p>
          </motion.div>
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
            className="web-solutions-box"
          >
            <img src={digMark} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">Digital Media Planning</h3>
            <p className="web-solution-box-description">
              We create the media strategy for your brand on digital channels
              with advertising technologies suitable for your marketing strategy
              and target audience.
            </p>
          </motion.div>
        </div>
        <div className="web-solutions-row">
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
            className="web-solutions-box"
          >
            <img src={content} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">Content Marketing</h3>
            <p className="web-solution-box-description">
              We deliver your products and services to your potential customers
              both domestically and abroad with content marketing, which is a
              new generation digital communication tool.
            </p>
          </motion.div>
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
            className="web-solutions-box"
          >
            {/* <Lottie animationData={web} style={{ width: "230px" }} /> */}
            <img src={web} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">Web Development</h3>
            <p className="web-solution-box-description">
              We develop software solutions tailored to the specific needs of
              your business, making your processes more efficient.
            </p>
          </motion.div>
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
            className="web-solutions-box"
          >
            {/* <Lottie animationData={perf} style={{ width: "230px" }} /> */}
            <img src={perf} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">Performance Marketing</h3>
            <p className="web-solution-box-description">
              With performance marketing solutions that suit your marketing
              strategy, we increase your online presence in the digital world
              and achieve real results for your business.
            </p>
          </motion.div>
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
            className="web-solutions-box"
          >
            {/* <Lottie animationData={influencer} style={{ width: "230px" }} /> */}
            <img src={influencer} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">Influencer Marketing</h3>
            <p className="web-solution-box-description">
              Utilize influencer marketing to amplify your brand's reach.
              Connect with authentic creators to engage your audience and drive
              conversions, maximizing your marketing impact.
            </p>
          </motion.div>
        </div>
      </div>
      {/* <!-- Split content section --> */}
      <div className="split-content-container">
        <div className="split-content-central-content">
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
            className="split-content-left-content"
          >
            <h1 className="split-content-heading">
              We are a Website Development{" "}
              <span className="word-color">Advertising</span> &{" "}
              <span className="word-color"> Marketing firm</span> .
            </h1>
            <p className="split-content-text">
              From crafting strategic plans to managing your online buzz,
              Digital Marker empowers businesses to thrive in the digital age.
              We’ll optimize your content, SEO, and social media, propelling
              your brand to success with data-driven campaigns and creative
              flair. Join us and watch your digital presence soar!
            </p>
            <br />
            <br />
            <p className="split-content-text">
              We’re your one-stop Solutions for comprehensive marketing, from
              crafting data-driven strategies to managing engaging social media
              campaigns. Our SEO expertise bolsters your online presence, while
              creative content grabs attention and converts leads. Partner with
              Us and unlock the privilege of a thriving digital future.
            </p>
          </motion.div>
          <div className="split-content-right-content">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src="/assets/split-screen-pic.jpg"
              alt="split-screen-pic"
              className="split-screen-pic"
            />
          </div>
        </div>
      </div>
      {/* <!-- reviews section --> */}
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
                Exceptional service! This company goes above and beyond to meet
                their customers’ needs. I couldn’t be happier with the results.
              </p>
              <div className="review-person-info">
                <img
                  src="/assets/review-pic-1.jpg"
                  alt=""
                  className="review-person-pic"
                />
                <span className="review-person-name">Kamlesh</span>
              </div>
            </div>
            <div className="review-box">
              <p className="review-text">
                Outstanding quality and professionalism. I’ve been a loyal
                customer for 3 months and have never been disappointed.
              </p>
              <div className="review-person-info">
                <img
                  src="/assets/review-pic-2.jpg"
                  alt=""
                  className="review-person-pic"
                />
                <span className="review-person-name">Sourav</span>
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
                Impressive attention to detail and excellent communication.
                Working with this team has been a pleasure.
              </p>
              <div className="review-person-info">
                <img
                  src="/assets/review-pic-3.jpg"
                  alt=""
                  className="review-person-pic"
                />
                <span className="review-person-name">Tahir</span>
              </div>
            </div>
            <div className="review-box">
              <p className="review-text">
                Reliable and trustworthy. I highly recommend this business to
                anyone looking for top-notch marketing services.
              </p>
              <div className="review-person-info">
                <img
                  src="/assets/review-pic-4.jpg"
                  alt=""
                  className="review-person-pic"
                />
                <span className="review-person-name">Rajiv</span>
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
              Embark on a journey of digital excellence! Ready to turn your
              ideas into reality? Let's collaborate and launch a successful
              project together.
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
              <a href="#" className="review-bottom-btn">
                START A PROJECT
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* <!-- Incremental counter section --> */}
      <div className="incremental-counter-container">
        <div className="incremental-counter-central-content">
          <div className="incremental-counter-box">
            <span className="num" data-val="150">
              000
            </span>
            <p className="incremental-counter-title">PROJECTS</p>
          </div>
          <div className="incremental-counter-box">
            <span className="num" data-val="130">
              000
            </span>
            <p className="incremental-counter-title">HAPPY CLIENTS</p>
          </div>
          <div className="incremental-counter-box">
            <span className="num" data-val="15">
              000
            </span>
            <p className="incremental-counter-title">TEAM MEMBERS</p>
          </div>
        </div>
      </div>
      {/* ******our collaborators *******/}
      <div className="our-collorators-container">
        <h2 className="our-collaborators-title">Our Collaborators</h2>
        <div className="our-collaborators-slider-container">
          <div className="our-collaborators-slide-track">
            <div className="our-collaborators-slide">
              <img
                src="/assets/adrover.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/atmajyoti.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/bingewatch.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/daadis.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/mv.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/navarithi.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/parshwa.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/smart.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/tapover.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/vrf.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
            <div className="our-collaborators-slide">
              <img
                src="/assets/ysj.jpg"
                alt=""
                className="our-collaborators-slide-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- index page footer --> */}
      <Footer />
    </>
  );
}

export default Home;
