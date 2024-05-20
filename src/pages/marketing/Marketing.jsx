import React from "react";
import "./marketing.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

//components
import MarketingHero from "./MarketingHero";
import WhatWeOffer from "./WhatWeOffer";

const Marketing = () => {
  return (
    <>
      <Navbar />
      <MarketingHero />
      <WhatWeOffer />
      <Footer />
    </>
  );
};

export default Marketing;
