import { useState } from "react";
import "../App.css";
import logo from "../assets/Logo.png";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { GiRotaryPhone } from "react-icons/gi";
import { BiSolidChevronDown } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="min-h-screen">
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center h-64 sm:bg-cover sm:bg-center sm:h-32 md:h-48 lg:h-64 xl:h-80 text-center background-image">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="hidden grid-cols-2 mt-2 sm-h sm:grid">
            <div className="flex ml-10">
              <h4 className="pl-5 pr-5">
                <BsInstagram size="1.2rem" color="white" />
              </h4>
              <h4 className="pr-5">
                <FiYoutube size="1.3rem" color="white" />
              </h4>
              <h4 className="pr-5">
                <FiFacebook size="1.3rem" color="white" />
              </h4>
              <h4 className="text-white1 pr-1">
                <GiRotaryPhone size="1.3rem" color="white" />
              </h4>
              <h4 className="text-white1"> +970568909533</h4>
            </div>
            <div className="flex justify-end mr-10 text-white">
              <span>
                <a
                  className="pr-7 border-r text-white1 border-white1"
                  href="./ss"
                >
                  For Business
                </a>
              </span>
              <span>
                <a
                  className="pr-7 pl-7 border-r text-white1 border-white1"
                  href="./ss"
                >
                  Help
                </a>
              </span>
              <div className="text-center pl-7 pr-7">
                <div className="relative inline-block text-center">
                  <button onClick={toggleDropdown}>
                    <div className="inline-flex justify-center w-20 rounded-md px-4 py-1 text-xs sm:text-sm font-medium text-white1 hover:bg-white1 hover:text-black1 focus:outline-none">
                      EN <BiSolidChevronDown className="mt-1" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="absolute mt-2 py-2 w-20 bg-white1 border-   white1 rounded-lg shadow-lg">
                      <a
                        href="./l"
                        className="block px-2 py-1 text-black text-center no-underline hover:bg-gray-200"
                      >
                        1
                      </a>
                      <a
                        href="./;"
                        className="block px-2 py-1 text-black text-center no-underline hover:bg-gray-200"
                      >
                        2
                      </a>
                      <a
                        href="./;"
                        className="block px-2 py-1 text-black text-center no-underline hover:bg-gray-200"
                      >
                        3
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-9 grid-cols-1  sm:ml-12 mt-4 sm:mt-7">
            <div className=" flex justify-center sm:justify-start mb-4 sm:mb-0">
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex justify-end mr-24">
              <button
                type="button"
                className="px-6 py-2 mr-5 border-transparent rounded-lg shadow-sm text-orange font-medium bg-white1 hover:bg-primary/80 hover:text-white md:inline-flex"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-white1 font-medium hover:bg-primary/80 hover:text-white md:inline-flex"
              >
                Sign In
              </button>
            </div>
          </div>
          {/* <div className="flex h-full items-center justify-center"> */}
          <div className="flex flex-col items-center justify-center h-screen">
            <h4 className=" place-items-end text-base tracking-widest font-medium text-white1">
              Your style booking specialist
            </h4>
            <h2 className=" text-5xl text-white1 font-semibold">
              Clothes mean nothing until <br /> someone lives in them.
            </h2>
            {/* new section */}
            <div className="flex justify-center flex-col xl:flex-row mt-7 h-16 gap-5">
              <div className="flex p-2 mt-32 xl:mt-0 bg-white1 rounded-lg">
                <form
                  action=""
                  className="grid grid-cols-1 w-32 border-r border-b3"
                >
                  <label>
                    <input
                      className="mr-2 "
                      type="checkbox"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    At home
                  </label>
                  <label>
                    <input
                      className="mr-2"
                      type="checkbox"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    Business
                  </label>
                </form>
                <div className="flex justify-center pt-3 w-32 border-r border-b3	">
                  <CgCalendarDates size="1.5rem" className="mr-2" />
                  Today
                </div>
                <div className="flex justify-center pt-3 w-32 border-r border-b3	">
                  <AiOutlineClockCircle size="1.5rem" className="mr-2" />
                  Now
                </div>
                <div className="flex justify-center pt-3 mr-10 w-32">
                  <CiLocationOn size="1.5rem" className="mr-2" />
                  Los angeles
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className=" w-96 pl-16 text-lg p-4 bg-white1 rounded-lg"
                  placeholder="Hair Salon"
                />
                <BsSearch
                  size="2rem"
                  className="absolute text-b3 top-4 left-28  xl:top-4 xl:left-4"
                />
              </div>
              <div>
                <button
                  type="button"
                  className=" p-4 pr-12 text-xl  pl-12   rounded-lg shadow-sm text-white1 font-medium bg-orange hover:bg-white1 hover:text-orange md:inline-flex"
                >
                  Search
                </button>
              </div>
            </div>
            {/* end section */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Header;
