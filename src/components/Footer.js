import React from "react";
import Logo from "../assets/Logo.png";
// import image10 from "../assets/image10.png";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
function Footer() {
  return (
    <footer
      className="text-b1 leading-7 bg-b4 grid gap-1 sm:gap-10 py-10 px-5
     sm:px-32 grid-cols-2 sm:grid-cols-7 justify-center "
    >
      <div className="col-span-2">
        <img src={Logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, sed do eius
          mod tempor incididunt.
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg text-black1 leading-9">
          Discover
        </h3>
        <a href="./">Dining Rewards</a>
        <a href="./">Private Dining</a>
        <a href="./">Reserve for Others</a>
        <a href="./">Cuisines Near Me</a>
        <a href="./">Restaurants Near Me</a>
        <a href="./">Delivery Near Me</a>
        <a href="./">Cuisines</a>
        <a href="./">Restaurants Open Now</a>
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg text-black1 leading-9">
          Openable
        </h3>
        <a href="./">About Us</a>
        <a href="./">Blog</a>
        <a href="./">Careers</a>
        <a href="./">Press</a>
        <h3 className="font-semibold text-lg text-black1 leading-9">More</h3>
        <a href="./">OpenTable for iOS</a>
        <a href="./">OpenTable for Android</a>
        <a href="./">Affiliate Program</a>
        <a href="./">Contact Us</a>
      </div>
      <div className="flex flex-col ">
        <h3 className="font-semibold text-lg text-black1 leading-9">
          Our Sites
        </h3>
        <a href="./">OpenTable.jp</a>
        <a href="./">OpenTable.de</a>
        <a href="./">OpenTable.es</a>
        <a href="./">OpenTable.ca</a>
        <a href="./">OpenTable.hk</a>
        <a href="./">OpenTable.ie</a>
        <a href="./">OpenTable.sg</a>
        <a href="./">OpenTable.nl</a>
        <a href="./">OpenTable.com.mx</a>
        <a href="./">OpenTable.co.uk</a>
      </div>
      <div className="sm:col-span-2 sm:ml-5 flex flex-col">
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-black1 leading-9">
            Businesses
          </h3>
          <a href="./">Delight more diners</a>
          <a href="./">Open for Business Blog</a>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-black1 leading-9">
            Join Us On
          </h3>
          <div className="flex gap-7">
            <a href="./2">
              <BsInstagram size="1.4rem" className="hover:text-orange" />
            </a>
            <a href="./ee">
              <FiFacebook size="1.4rem" className="hover:text-orange" />
            </a>
            <a href="./ee">
              <FiYoutube size="1.4rem" className="hover:text-orange" />
            </a>
            <a href="./ee">
              <FiYoutube size="1.4rem" className="hover:text-orange" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// eslint-disable-next-line no-lone-blocks
{
  /* <div className="col-span-2sm:col-span-6 flex flex-row justify-between">
        <dir className=" flex flex-col gap-3 sm:gap-10">
          <a href="./w">Privacy Policy</a>
          <a href="./w">Terms of Use</a>
          <a href="./w">Cookies and Interest-Based Ads</a>
          <a href="./w">Do Not Sell</a>
          <a href="./w">Cookies Settings</a>
        </dir>
        <p className="mt-3">Copyright © 2022 Boka, Inc. All rights reserved.</p>
      </div>
      <div className="col-span-6 flex flex-row justify-between">
        <dir>
          OpenTable is part of Booking Holdings, the world leader in online
          travel and related services.
        </dir>
        <img  src={image10} alt="" />
      </div> */
}
