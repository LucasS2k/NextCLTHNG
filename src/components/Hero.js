import React from "react";
import { StyledHero } from "../styles/HeroStyles";
import HeroImage from "../assets/img/hero6.png";
import ImageSlider from "./SliderController";
import { SliderData } from "../assets/img/data/SliderData";
const Hero = () => {
  return (
    <StyledHero>
      <div className="hero">
        <h1 className="titulo">WINTER 23 IN NEXT</h1>
        <ImageSlider slides={SliderData} />
        <a href="#catalogo" className="herolink">
          Shop Now
        </a>
      </div>
    </StyledHero>
  );
};

export default Hero;
