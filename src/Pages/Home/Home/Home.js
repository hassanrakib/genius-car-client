import React from "react";
import About from "../About/About";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <About />
      <Services />
    </div>
  );
};

export default Home;
