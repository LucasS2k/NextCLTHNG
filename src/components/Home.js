import React from "react";
import Hero from "./Hero";
import HelpSection from "./HelpSection";
import Benefits from "./Benefits";
import Catalogue from "./Catalogue";
import Cart from "./Cart";

const Home = () => {
  return (
    <>
      <Hero />
      <Cart />
      <Catalogue />
      <Benefits />
      <HelpSection />
    </>
  );
};

export default Home;
