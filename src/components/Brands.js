import React from "react";
import brand1 from "../assets/brands.png";

function Brands() {
  return (
    <section className="bg-e3e flex flex-col flex-wrap items-center sm:justify-center gap-5 lg:gap-60 py-10 sm:py-16 mt-5 sm:flex-row">
      <img className="w-44" src={brand1} alt="" />
      <img className="w-44" src={brand1} alt="" />
      <img className="w-44" src={brand1} alt="" />
      <img className="w-44" src={brand1} alt="" />
    </section>
  );
}

export default Brands;
