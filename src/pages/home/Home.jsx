import "./Home.css";
import Footer from "../../components/footer/Footer";

//components
import ServicesGrid from "./ServicesGrid";
import WebSolutions from "./WebSolutions";
import Hero from "./Hero";
import SplitContent from "./SplitContent";
import Review from "./Review";
import IncrementalCounter from "./IncrementalCounter";
import OurCollaborators from "./OurCollaborators";

function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* <!-- grid section --> */}
      <ServicesGrid />
      {/* <!-- web solutions section --> */}
      <WebSolutions />
      {/* <!-- Split content section --> */}
      <SplitContent />
      {/* <!-- reviews section --> */}
      <Review />
      {/* <!-- Incremental counter section --> */}
      <IncrementalCounter />
      {/* ******our collaborators *******/}
      <OurCollaborators />
      {/* <!-- footer --> */}
      <Footer />
    </>
  );
}

export default Home;
