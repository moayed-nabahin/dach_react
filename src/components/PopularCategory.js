import React, { useState } from "react";
import Rectangle14 from "../assets/Rectangle14.png";
import Rectangle15 from "../assets/Rectangle15.png";

function PopularCategory() {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <section className=" flex flex-col justify-center bg-white1 h-auto w-5/5 p-10 xl:p-36 md:p-24 mb-14 sm:mb-0">
      <div className="flex flex-col sm:flex-row justify-between mb-3">
        <h2 className="text-3xl font-bold mb-3">Popular Category</h2>
        <a
          href=".//"
          className="px-6 align-middle shadow-sm text-orange font-medium text-center hover:animate-bounce mb-2 md:inline-flex"
        >
          View all Category
        </a>
      </div>
      {/* d */}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 sm:grid-rows-7 w-full h-auto gap-3 lg:gap-1  popular-categories-container  !md:h-[400px]">
        <div
          onMouseEnter={() => setShowBtn(true)}
          onMouseLeave={() => setShowBtn(false)}
          className="p-10 min-h-116 max-w-3xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer row-span-2 col-span-2"
        >
          <img className="" src={Rectangle14} alt="" />
          {showBtn && (
            <button className="text-4xl font-black px-3 pb-2 py-1 bg-orange rounded-full absolute bottom-16 right-16 sm:bottom-20 sm:right-20 text-white1 ">
              &rarr;
            </button>
          )}
          <h2 className=" sm:text-3xl text-2xl font-bold absolute bottom-20 left-16 sm:bottom-24 sm:left-24 text-white1 ">
            Manicure
          </h2>
          <h2 className="text-sm font-normal absolute bottom-16 left-16 sm:bottom-16 sm:left-24 text-white1 ">
            243+ Business
          </h2>
        </div>
        {/* dd */}
        <div className="relative mt-10 grid justify-self-center items-end transform duration-500 hover:-translate-y-1 cursor-pointer">
          {/* <button className=" sm:text-3xl  font-black px-3 pb-2 py-1 bg-orange rounded-full absolute bottom-3 left-24 sm:bottom-5 sm:right-3 text-white1 ">
            &rarr;
          </button> */}

          <h2 className="sm:text-2xl text-base font-bold absolute bottom-5 left-2 sm:bottom-7 sm:left-8 text-white1 ">
            Manicure
          </h2>
          <img src={Rectangle15} alt="" />
        </div>
        <div className="relative mt-10 grid items-end transform duration-500 hover:-translate-y-1 cursor-pointer">
          {/* <button className="font-black px-3 pb-2 py-1 bg-orange rounded-full absolute text-base sm:text-2xl bottom-3 left-24 sm:bottom-5 sm:right-20 text-white1 ">
              &rarr;
            </button> */}

          <h2 className="sm:text-2xl text-base font-bold absolute bottom-5 left-2 sm:bottom-7 sm:left-8 text-white1 ">
            Manicure
          </h2>
          <img src={Rectangle15} alt="" />
        </div>
        <div
          className="relative mt-10 grid justify-self-center items-start transform duration-500 hover:-translate-y-1 cursor-pointer"
        >
          {/* <button className="font-black px-3 pb-2 py-1 bg-orange rounded-full absolute text-base sm:text-2xl bottom-3 left-24 sm:bottom-5 sm:right-20 text-white1 ">
              &rarr;
            </button> */}

          <h2 className="sm:text-2xl text-base font-bold absolute bottom-5 left-2 sm:bottom-7 sm:left-8 text-white1 ">
            Manicure
          </h2>
          <img src={Rectangle15} alt="" />
        </div>
        <div className="relative mt-10 grid items-start transform duration-500 hover:-translate-y-1 cursor-pointer">
          {/* <button className="font-black px-3 pb-2 py-1 bg-orange rounded-full absolute text-base sm:text-2xl bottom-3 left-24 sm:bottom-5 sm:right-20 text-white1 ">
            &rarr;
          </button> */}

          <h2 className="sm:text-2xl text-base font-bold absolute bottom-5 left-2 sm:bottom-7 sm:left-8 text-white1 ">
            Manicure
          </h2>
          <img src={Rectangle15} alt="" />
        </div>
      </div>
    </section>
  );
}

export default PopularCategory;
