import React from "react";
import Star1 from "../assets/Star1.png";

function ManicureMonday() {
  return (
    <section className=" flex justify-center bg-amber h-auto w-5/5">
      <div className="flex sm:flex-row flex-col justify-between m-10 p-10  bg-mWite rounded-3xl w-4/5  ">
        <div className="flex mb-10 sm:mb-0 place-  justify-center align-middle  flex-col gap-5">
          <h1 className="text-5xl font-bold">Manicure Monday 💅 </h1>
          <p className="text-2xl font-normal	">On select providers</p>
        </div>
        <div>
          <img src={Star1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ManicureMonday;
