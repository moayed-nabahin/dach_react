import React from "react";
import Ellipse9 from "../assets/Ellipse9.png";
function PersonProfile() {
  return (
    <div>
      <div className="flex gap-1">
        <img className="justify-end" src={Ellipse9} alt="" />
        <div>
          <h3 className="font-bold text-base">Shoukri Kattan</h3>
          <p className="font-normal text-xs text-b1 ">Hair Specialist @boka</p>
        </div>
      </div>
    </div>
  );
}

export default PersonProfile;
