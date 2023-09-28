import React from "react";
import caseStudyBefore from "../assets/caseStudyBefore.png";
import caseStudyAfter from "../assets/caseStudyAfter.png";
import PersonProfile from "./PersonProfile";
function BokaTransformation() {
  return (
    <section className=" flex flex-col justify-center bg-amber h-auto w-5/5 p-10 xl:p-40 md:p-24">
      <div className="flex flex-col sm:flex-row justify-between mb-3">
        <h2 className="text-3xl font-bold mb-3">Boka Transformation</h2>
        <a
          href=".//"
          className="px-6 text-center py-2 border border-transparent rounded-lg shadow-sm text-orange font-medium hover:bg-orange hover:text-white1 md:inline-flex"
        >
          Book Now
        </a>
      </div>
      {/* ccccccc */}
      <div className="flex flex-col xl:flex-row justify-between mt-9">
        <div className="flex flex-none flex-col sm:flex-row">
          <div className="relative mb-2 sm:mr-1">
            <h2 className="text-3xl font-bold absolute bottom-5 left-7   sm:bottom-9 sm:left-14 text-white1 ">
              Before
            </h2>
            <img src={caseStudyBefore} alt="" />
          </div>
          <div className="relative">
            <h2 className="absolute text-3xl font-bold bottom-5 left-7   sm:bottom-9 sm:left-14 text-white1">
              After
            </h2>
            <img src={caseStudyAfter} alt="" />
          </div>
        </div>
        {/* eeee */}
        <div className="flex flex-col p-12 sm:p-20 gap-6 justify-center">
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do
            eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam...”
          </p>
          <PersonProfile />
          <div>
            <h3 className="font-semibold text-base text-orange">
              Book Shoukri for $49
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BokaTransformation;
