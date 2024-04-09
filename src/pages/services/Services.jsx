import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Service.css";

function Services() {
  return (
    <>
      <div className="services-hero-container">
        <Navbar />
        <div className="services-hero-container-content">
          <h1 className="services-hero-title">Services</h1>
          <h2 className="services-hero-mini-title">
            We provide a wide range of Services
          </h2>
        </div>
      </div>
      {/* what we do section */}
      <div className="what-we-do-section">
        <div className="what-we-do-top-content">
          <span className="what-we-do-title">WHAT WE DO</span>
          <h1 className="what-we-do-desc">
            Arohance offers cutting-edge web development, tailored digital
            marketing, and expert paid social media, Services for unparalleled
            Online performance and growth.
          </h1>
        </div>
        <div className="what-we-do-down-content">
          <h3 className="what-we-do-down-content-title">Digital Experiences</h3>
          <span className="what-we-do-down-content-desc">
            From web development to marketing, we’re here to elevate your online
            success.
          </span>
          <ul className="what-we-do-list-items">
            <li className="what-we-do-list-item">GREAT DESIGN</li>
            <li className="what-we-do-list-item">EXPERIENCE</li>
            <li className="what-we-do-list-item">VALUE</li>
          </ul>
        </div>
      </div>
      {/* services grid section */}
      <div className="services-grid-section">
        <div className="services-grid-row">
          <div className="services-grid-box-1">
            <h1 className="services-grid-box-title">Marketing Strategy</h1>
            <span className="services-grid-box-num">01</span>
            <p className="services-grid-box-desc">
              Develop a comprehensive marketing strategy to reach your target
              audience effectively. Utilize a mix of digital channels, engaging
              content, and data-driven insights to maximize ROI and drive brand
              growth.
            </p>
          </div>
          <div className="services-grid-box-2">
            <h1 className="services-grid-box-title">Research And Planning</h1>
            <span className="services-grid-box-num">02</span>
            <p className="services-grid-box-desc">
              Research & Planning offers comprehensive research services for
              businesses, aiding in strategic decision-making. Our expert team
              conducts thorough analyses and provides actionable insights for
              informed business growth strategies.
            </p>
          </div>
        </div>
        <div className="services-grid-row">
          <div className="services-grid-box-2">
            <h1 className="services-grid-box-title">Full Funnel Build</h1>
            <span className="services-grid-box-num">03</span>
            <p className="services-grid-box-desc">
              From awareness to conversion, our Full Funnel Build service guides
              customers through every stage, optimizing campaigns for maximum
              engagement and ROI. Elevate your marketing with us today!
            </p>
          </div>
          <div className="services-grid-box-1">
            <h1 className="services-grid-box-title">Digital Advertising</h1>
            <span className="services-grid-box-num">04</span>
            <p className="services-grid-box-desc">
              Harness the power of digital advertising to propel your brand
              forward. Reach your target audience effectively and efficiently
              with our tailored strategies and compelling creatives. Boost your
              brand today!
            </p>
          </div>
        </div>
        <div className="services-grid-row">
          <div className="services-grid-box-1">
            <h1 className="services-grid-box-title">Brand Building</h1>
            <span className="services-grid-box-num">05</span>
            <p className="services-grid-box-desc">
              Brand building is the strategic process of creating and enhancing
              a brand’s reputation, visibility, and identity. It involves
              crafting a unique brand image to connect with target audiences and
              drive loyalty.
            </p>
          </div>
          <div className="services-grid-box-2">
            <h1 className="services-grid-box-title">Media Strategy</h1>
            <span className="services-grid-box-num">06</span>
            <p className="services-grid-box-desc">
              Develop a media strategy to maximize brand visibility, engagement,
              and ROI. Tailored plans for diverse platforms, ensuring compelling
              content reaches the right audience, enhancing brand presence and
              driving growth.
            </p>
          </div>
        </div>
        <div className="services-grid-bottom-container">
          <div className="services-grid-bottom-container-content">
            <p className="services-grid-bottom-container-mini-title">
              VISION & INNOVATION
            </p>
            <h2 className="services-grid-bottom-container-title">
              We merge Advertising and <br /> Marketing
            </h2>
            <p className="services-grid-bottom-container-desc">
              We fuse cutting-edge web development with results-driven digital
              marketing. Elevate <br /> your online presence with us!
            </p>
            <a href="#" className="services-grid-bottom-container-btn">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
