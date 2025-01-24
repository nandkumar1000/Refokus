import React from "react";
import Navbar from "./components/Navbar.jsx"
import Nand from "./components/Nand.jsx";
import Stripes from "./components/Stripes.jsx";
import Products from "./components/Products.jsx";
import Marquees from "./components/Marquees.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Nand />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}
export default App;