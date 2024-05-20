import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

//components
import OtherHero from "./OtherHero";
import WhatWeOffer from "./WhatWeOffer";

const Marketing = () => {
  return (
    <>
      <Navbar />
      <OtherHero />
      <WhatWeOffer />
      <Footer />
    </>
  );
};

export default Marketing;
