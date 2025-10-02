import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";
import FrontSection from "../frontSection/FrontSection";
import SecondBanner from "../frontSection/second-slider-img/SecondSliderBanner";
import ThirdSliderBanner from "../frontSection/third-slider-img/ThirdSliderBanner";
const SliderSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };
  return (
    <div className="sliderBox">
      <Slider
        {...settings}
        appendDots={(dots) => (
          <div className="flex-center dot">
            <ul>{dots}</ul>
          </div>
        )}
      >
        <FrontSection />
        <SecondBanner />
        <ThirdSliderBanner />
      </Slider>
    </div>
  );
};

export default SliderSection;
