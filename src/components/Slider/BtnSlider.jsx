import "./Slider.css";
import leftArrow from "./icons/leftarrow.svg";
import rightArrow from "./icons/rightarrow.svg";
function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

export default BtnSlider;
