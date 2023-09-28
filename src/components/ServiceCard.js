import React from "react";
import Frame20939 from "../assets/Frame20939.png";
import { AiFillStar } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "../App.css";
import "swiper/css/pagination";

function ServiceCard() {
  return (
    <div className="mb-3 flex min-h-116 w-full flex-col w-85 shadow-lg mx-auto  max-w-sm bg-cover cursor-pointer rounded-lg ">
      <Swiper
        className="w-10/12 h-full"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={-26}
        slidesPerView={1.1}
      >
        <SwiperSlide className="absolute">
          <img className=" w-full h-auto" src={Frame20939} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto" src={Frame20939} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto" src={Frame20939} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="mx-10 mt-2 font-medium text-base flex flex-row justify-between">
        <h3>Hair X Pression Un Hair Salons</h3>
        <div className="flex flex-row ">
          <AiFillStar className="mr-1 mt-1" color="orange" size="1.2rem" />
          <p>4.5</p>
        </div>
      </div>
      {/* d */}
      <div className="flex flex-row mt-2 mx-8 font-medium">
        <TiLocationOutline size="1.5rem" className="text-barkSlateGray" />
        <p className="text-barkSlateGray">
          Avalaible in Mutliple address, Pick time
        </p>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="flex justify-between mx-8 mt-2 w-10/12 text-black1 bg-orange2 border border-orange  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Manicure
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="./"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="./"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="./"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="./"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-5 flex">
        <Swiper
          className="w-10/12 p-1 swiper-wrapper1"
          spaceBetween={-10}
          slidesPerView={3.2}
        >
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
          <SwiperSlide className="mt-2">
            <span className="p-2 border border-b1 rounded-xl">8:00 am</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-8 my-2 text-b3 flex flex-row justify-between">
        <p>Booked x today</p>
        <div>
          <del>$31.99</del>
          <span className="flex flex-row">
            <p className="text-lg text-black1 font-bold mr-3 mt-2">$29.92</p>
            <span className="p-2 bg-red rounded-lg text-white1">20%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
