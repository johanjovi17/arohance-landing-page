import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
