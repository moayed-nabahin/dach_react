import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import PersonProfile from "./PersonProfile";
function Card() {
  return (
    <div className="flex flex-col justify-between w-80 h-auto p-5 bg-b4 border-b4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <p className="text-sm font-normal	mt-3">
        “Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eius
        mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...”
      </p>
      <div className="flex justify-between mt-5">
        <div className="flex mt-2">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div>- Jack Daniels</div>
      </div>
      <div className="mt-9">
        <PersonProfile />
      </div>
    </div>
  );
}

export default Card;
