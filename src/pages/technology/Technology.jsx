import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

//components
import TechnologyHero from "./TechnologyHero";
import WhatWeOffer from "./WhatWeOffer";

const Marketing = () => {
  return (
    <>
      <Navbar />
      <TechnologyHero />
      <WhatWeOffer />
      <Footer />
    </>
  );
};

export default Marketing;
