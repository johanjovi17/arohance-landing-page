import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Marketing from "./pages/marketing/Marketing.jsx";
import Technology from "./pages/technology/Technology.jsx";
import Other from "./pages/other/Other.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/other" element={<Other />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
