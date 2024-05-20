import React from "react";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  const whatWeOfferItems = [
    {
      title: "Marketing",
      services: [
        "Social Media Marketing",
        "Digital marketing",
        "Peformance Marketing",
        "Facebook/ Amazon/ Google ads",
        "Influencer Marketing",
      ],
    },
    {
      title: "Branding",
      services: [
        "Social Media Marketing",
        "Digital marketing",
        "Peformance Marketing",
        "Facebook/ Amazon/ Google ads",
        "Influencer Marketing",
      ],
    },
    {
      title: "Graphic Marketing",
      services: [
        "Graphic Designing",
        "Catalogue Designing",
        "Company Naming",
        "Logo Designing",
        "Colour Combination",
      ],
    },
    {
      title: "PhotoShoots and Videoshoots",
      services: [
        "Photography and Videography",
        "Video Editing",
        "Photo Editing",
        "Product Shoots",
        "Model Shoots",
      ],
    },
  ];

  return (
    <div className="marketing-grid-container">
      <div className="marketing-grid-content">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1 } }}
          className="marketing-what-we-offer-title"
        >
          What We Offer
        </motion.h2>
        <div className="marketing-grid-section-row-1">
          {whatWeOfferItems.map((whatWeOfferItem) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, ease: "easeIn" },
              }}
              className="marketing-grid-box"
            >
              <h4 className="marketing-grid-title">{whatWeOfferItem.title} </h4>
              <ul className="marketing-grid-list">
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    {whatWeOfferItem.services[0]}
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    {whatWeOfferItem.services[1]}
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    {whatWeOfferItem.services[2]}
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    {whatWeOfferItem.services[3]}
                  </h2>
                </li>
                <li className="marketing-grid-list-item">
                  <h2 className="marketing-grid-box-service-title">
                    {whatWeOfferItem.services[4]}
                  </h2>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
