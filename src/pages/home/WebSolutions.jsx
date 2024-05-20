import React from "react";
import { motion } from "framer-motion";

const WebSolutions = () => {
  const topRowSolutions = [
    {
      title: "Search Engine Optimization",
      src: "/assets/seo.gif",
      description:
        "With effective SEO practices, we increase the ranking of your website and increase site traffic and visibility.",
    },
    {
      title: "E-Commerce Solutions",
      src: "/assets/ecomm.gif",
      description:
        " As Shopify experts, we enhance your e-commerce store with tailored solutions and seamless transitions.",
    },
    {
      title: "Digital Media Planning",
      src: "/assets/digMark.gif",
      description:
        "We create the media strategy for your brand on digital channels with advertising technologies suitable for your marketing strategy and target audience.",
    },
  ];
  const downRowSolutions = [
    {
      title: "Content Marketing",
      src: "/assets/content.gif",
      description:
        "We deliver your products and services to your potential customers both domestically and abroad with content marketing, which is a new generation digital communication tool.",
    },
    {
      title: "Web Development",
      src: "/assets/web.gif",
      description:
        "We develop software solutions tailored to the specific needs of your business, making your processes more efficient.",
    },
    {
      title: "Performance Marketing",
      src: "/assets/perf.gif",
      description:
        "With performance marketing solutions that suit your marketing strategy, we increase your online presence in the digital world and achieve real results for your business.",
    },
    {
      title: "Influencer Marketing",
      src: "/assets/influencer.gif",
      description:
        "Utilize influencer marketing to amplify your brand's reach. Connect with authentic creators to engage your audience and drive conversions, maximizing your marketing impact.",
    },
  ];

  return (
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
        {topRowSolutions.map((topRowSolution) => (
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
            <img src={topRowSolution.src} alt="" className="web-solution-gif" />
            <h3 className="web-solution-box-title">{topRowSolution.title}</h3>
            <p className="web-solution-box-description">
              {topRowSolution.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="web-solutions-row">
        {downRowSolutions.map((downRowSolution) => (
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
            <img
              src={downRowSolution.src}
              alt={downRowSolution.title}
              className="web-solution-gif"
            />
            <h3 className="web-solution-box-title">{downRowSolution.title} </h3>
            <p className="web-solution-box-description">
              {downRowSolution.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebSolutions;
