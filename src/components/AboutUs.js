import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
function AboutUs() {
  
  return (
    <section className="w-full">
      <div className="font-semibold text-3xl text-center">
        Our happy customers say about us
      </div>
      {/* <div className="flex gap-8 justify-center mt-10"></div> */}
      <Swiper
        className="relative w-10/12 mt-5"
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default AboutUs;
