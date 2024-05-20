import React from "react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  return (
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
                  your business processes and engage your audience effectively.
                </p>
              </li>
            </ul>

            <Link to="/technology" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  In addition to app development, we offer integration services
                  to connect your app with third-party APIs, services, and
                  databases. We also provide ongoing maintenance and support to
                  ensure your app remains secure, up-to-date, and compatible
                  with new technologies.
                </p>
              </li>
            </ul>
            <Link to="/technology" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  improvement. This includes optimizing on-page elements such as
                  meta tags, headings, and content structure to ensure search
                  engines can crawl and index your site effectively.
                </p>
              </li>
              <li className="grid-list-item">
                <h2 className="grid-box-service-title">
                  Keyword Research and Strategy
                </h2>
                <p className="grid-box-service-desc">
                  We perform extensive keyword research to identify relevant
                  search terms and phrases that potential customers are using.
                  This forms the basis of our SEO strategy to target high-value
                  keywords and optimize your content accordingly.
                </p>
              </li>
            </ul>
            <Link to="/marketing" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  We leverage artificial intelligence (AI) and machine learning
                  (ML) technologies to automate repetitive tasks, optimize
                  workflows, and increase productivity. This includes automating
                  data entry, report generation, customer support tasks, and
                  more.
                </p>
              </li>
              <li className="grid-list-item">
                <h2 className="grid-box-service-title">Chatbot Development</h2>
                <p className="grid-box-service-desc">
                  We develop intelligent chatbots powered by natural language
                  processing (NLP) to provide instant and personalized customer
                  support, answer FAQs, and assist users in real-time. Our
                  chatbots can be integrated into websites, mobile apps, and
                  messaging platforms.
                </p>
              </li>
            </ul>
            <Link to="/other" className="grid-read-more-btn">
              READ MORE
            </Link>
          </div>
          <div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.9, ease: "easeIn" },
            }}
            className="grid-box"
          >
            <h4 className="grid-title">Social Media & Performance Marketing</h4>
            <span className="grid-box-num">05</span>
            <ul className="grid-list">
              <li className="grid-list-item">
                <h2 className="grid-box-service-title">
                  Social Media Management
                </h2>
                <p className="grid-box-service-desc">
                  We offer strategic social media management services to build
                  and maintain a strong online presence across platforms like
                  Facebook, Instagram, Twitter, LinkedIn, and more. Our services
                  include content creation, scheduling, community engagement,
                  and analytics to optimize performance and increase audience
                  engagement.
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
            <Link to="/marketing" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  social media platforms (Facebook Ads, Instagram Ads), display
                  networks, and more. Our campaigns are meticulously optimized
                  to reach specific audience segments and drive high-quality
                  traffic that converts into actionable outcomes.
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
            <Link to="/marketing" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  newspaper ads, magazine placements, direct mailers, brochures,
                  flyers, and posters. Our creative team designs compelling
                  visuals and messaging to capture attention and convey your
                  brand message effectively to offline audiences.
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
            <Link to="/marketing" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  crafting unique visual representations that resonate with your
                  brand values and target audience. Our designers work closely
                  with you to create logos that are memorable, versatile, and
                  aligned with your brand's personality.
                </p>
              </li>
              <li className="grid-list-item">
                <h2 className="grid-box-service-title">
                  Marketing Collateral Creation
                </h2>
                <p className="grid-box-service-desc">
                  We design a wide range of marketing collateral, including
                  brochures, flyers, posters, business cards, presentations, and
                  infographics. Our creative team ensures consistency in design
                  elements and messaging across all collateral, maintaining
                  brand integrity and enhancing brand recognition.
                </p>
              </li>
            </ul>
            <Link to="/technology" className="grid-read-more-btn">
              READ MORE
            </Link>
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
                  NFC-enabled devices, such as smartphones and smartwatches. Our
                  contactless payment systems enhance convenience, speed up
                  transactions, and improve customer satisfaction at checkout.
                </p>
              </li>
            </ul>
            <Link to="/other" className="grid-read-more-btn">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
