import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/contact/Contact.jsx";
// import { Routes, Route } from "react-router-dom";

import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Mainlayout from "./layouts/Mainlayout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

// const App = () => {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Mainlayout />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// };

export default App;
