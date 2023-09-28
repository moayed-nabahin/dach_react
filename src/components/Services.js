import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame21 from "../assets/Frame21.png";
import { CustomNextArrow, CustomPrevArrow } from "./arrow";

function Services() {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white1 flex flex-col justify-center h-auto w-5/5 p-10 xl:p-28 md:p-24">
      <Slider  {...settings}>
        <div className="m-0">
          <img src={Frame21} className="w-28 m-0" alt="1" />
        </div>
        <div>
          <img src={Frame21} className="w-28 mr-0" alt="2" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} alt="3" className="w-28 m-0" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
        <div>
          <img src={Frame21} className="w-28 m-0" alt="3" />
        </div>
      </Slider>
    </section>
  );
}

export default Services;
