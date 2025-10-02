import React, { useEffect, useRef } from "react";
import ReviewCard from "../reviewCards/ReviewCard";
import reviewData from "../../data/reviewsData";
import "./reviewSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewSection = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="reviewSection">
      <h3 className="sectionTitle">Check out Recent Review</h3>
      <h4 className="subTitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan neque
        pellentesque lorem eu sollicitudin congue ut amet.
      </h4>
      <div className="reviewSlider">
        <Slider ref={sliderRef} {...settings}>
          {reviewData.map((user, index) => (
            <ReviewCard key={index} user={user} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;
