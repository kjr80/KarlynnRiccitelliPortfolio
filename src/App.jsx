import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import MoreWork from "./pages/MoreWork";
import MoreWorkDetail from "./pages/MoreWorkDetail";
import Passport from "./pages/Passport";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/more-work" element={<MoreWork />} />
        <Route path="/more-work/:slug" element={<MoreWorkDetail />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
