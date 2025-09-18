import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewCard from "../ReviewCards/ReviewCard";
import reviewData from "../../Data/ReviewsData";
import "../ReviewsSection/ReviewSection.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <div className="reviewSection">
      <h3 className="sectionTitle">Check out Recent Review</h3>
      <h4 className="subTitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan neque
        pellentesque lorem eu sollicitudin congue ut amet.
      </h4>

      <div className="reviewSlider">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          speed={600}
          breakpoints={{
            1440: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
          }}
        >
          {reviewData.map((user, index) => (
            <SwiperSlide key={index}>
              <ReviewCard user={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
