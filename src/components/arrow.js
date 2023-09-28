import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const CustomNextArrow = (props) => (
  <div className="slick-arrow custom-next-arrow" onClick={props.onClick}>
    <AiOutlineRight size="2.5rem" color="black" />
  </div>
);

const CustomPrevArrow = (props) => (
  <div className="slick-arrow custom-prev-arrow" onClick={props.onClick}>
    <AiOutlineLeft size="2.5rem" color="black" />
  </div>
);

export { CustomNextArrow, CustomPrevArrow };
