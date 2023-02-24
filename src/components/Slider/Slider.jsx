import React, { useState } from "react";
import "../Slider/Slider.css";
import BtnSlider from "../Slider/BtnSlider";
function Slider({ images }) {
  const [slideIndex, setSlideIndex] = useState(1);

  if (!images || images.length === 0) {
    return;
  }

  let imgNodes = images.map((image, index) => {
    return (
      <div
        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
        key={image.id}>
        <img className="slide-img" src={image.src} alt={image.alt} />
      </div>
    );
  });

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="container-slider">
      {imgNodes}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 6 }).map((image, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
