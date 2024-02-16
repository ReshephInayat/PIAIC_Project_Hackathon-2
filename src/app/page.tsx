import Hero from "@/Views/Hero";
import Navbar from "@/Components/Navbar";
import NavbarHome from "@/Components/NavbarHome";
import React from "react";
import Events from "@/Views/Events";
import Products from "@/Views/Products";
import About from "@/Views/About";
import Newsletter from "@/Views/Newsletter";
import Footer from "@/Views/Footer";

function page() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="relative z-[30]">{/* <Events/> */}</div>
      <div className="relative z-[30]">
        <Products />
      </div>
      <div className="relative z-[30]">
        <About />
      </div>
      <div className="relative z-[30]">
        <Newsletter />
      </div>
    </div>
  );
}

export default page;
