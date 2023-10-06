import React, { useState } from "react";
import { SliderData } from "../assets/img/data/SliderData";
import { SliderStyled } from "../styles/SliderStyles";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderStyled>
      <button className="buttonSliderD" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button className="buttonSliderI" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Hero" className="image" />
            )}
          </div>
        );
      })}
    </SliderStyled>
  );
};

export default ImageSlider;
