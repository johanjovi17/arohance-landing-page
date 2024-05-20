import React from "react";
import Footer from "../../components/footer/Footer";
import "./About.css";

//components
import AboutHero from "./AboutHero";
import MiddleSection from "./MiddleSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import MakeProjectWithUs from "./MakeProjectWithUs";

function About() {
  return (
    <>
      {/* hero section */}
      <AboutHero />
      {/* second section */}
      <MiddleSection />
      {/* why choose us section */}
      <WhyChooseUsSection />
      {/* make a project w us section */}
      <MakeProjectWithUs />
      {/* footer */}
      <Footer />
    </>
  );
}

export default About;
