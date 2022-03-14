import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import Footer from "./components/pages/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
