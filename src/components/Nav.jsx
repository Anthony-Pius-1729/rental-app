import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../tailwind.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [clicked, setClick] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setClick(false);
    setToggle(false);
  };

  return (
    <React.Fragment>
      <div
        className="relative z-50 block font-poppins items-center justify-between 
      md:px-[1rem] lg:px-[4rem] lg:pt-4 pb-4 text-gray-800 lg:bg-white lg:flex"
      >
        <h1 className="hidden lg:block text-2xl font-bold text-black">
          EliteWheels
        </h1>

        <div className="lg:hidden  flex items-center justify-between w-full px-4 pt-4 lg:pt-0">
          <h1 className="text-2xl font-bold text-btnColor">EliteWheels</h1>
          <div className="cursor-pointer">
            {toggle ? (
              <FaTimes
                size={38}
                className="cursor-pointer"
                onClick={handleClick}
              />
            ) : (
              <FaBars
                size={38}
                className="cursor-pointer"
                onClick={handleClick}
              />
            )}
          </div>
        </div>

        <div
          className={`absolute z-50 bg-gradient-to-r from-gray-400 to-original2 px-10 w-full 
          transition-all duration-300 ease-in-out ${
            clicked ? "h-screen" : "h-0 overflow-hidden"
          } lg:h-auto lg:w-auto lg:bg-gradient-to-r lg:from-white lg:to-white 
          lg:bg-transparent lg:relative lg:flex lg:items-center lg:space-x-6 lg:text-blackText`}
        >
          <div
            className="flex flex-col items-center justify-center lg:flex-row text-lg
          lg:items-center lg:justify-start lg:space-x-6"
          >
            <p className="mt-8 md:mt-0">
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </p>
            <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4 mt-2"></div>
            <p className="mt-8 md:mt-0">
              <Link to="/my-posts" onClick={handleLinkClick}>
                My Posts
              </Link>
            </p>
            <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4 mt-2"></div>
            <p className="mt-8 md:mt-0">
              <Link to="/about" onClick={handleLinkClick}>
                About Us
              </Link>
            </p>
            <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4 mt-2"></div>
            <p className="mt-8 md:mt-0">
              <Link to="/cars" onClick={handleLinkClick}>
                Fleet
              </Link>
            </p>
            <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4 mt-2"></div>
            <p className="mt-8 md:mt-0">
              <Link to="/lease" onClick={handleLinkClick}>
                Lease a Car
              </Link>
            </p>
            <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4 mt-2"></div>
            <p className="mt-8 md:mt-0">
              <Link to="/team" onClick={handleLinkClick}>
                Our Team
              </Link>
            </p>
            <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4 mt-2"></div>
            <div className="block lg:hidden justify-between items-center">
              <p>
                <Link
                  to="/sign-in"
                  onClick={handleLinkClick}
                  className="mt-8 md:mt-0"
                >
                  <button className="text-whiteText lg:text-blackText mb-4 mt-2 text-xl p-3">
                    Sign In
                  </button>
                </Link>
              </p>
              <div className="lg:hidden h-[1.5px] bg-slate-300 w-full mb-4"></div>
              <p>
                <Link to="/sign-up" onClick={handleLinkClick} className="mt-12">
                  <button className="text-gray-300 bg-black rounded-md p-3 text-xl">
                    Register
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center">
          <p>
            <Link to="/sign-in" className="pr-4">
              <button className="text-whiteText lg:text-blackText">
                Sign In
              </button>
            </Link>
          </p>
          <p>
            <Link to="/sign-up">
              <button className="text-gray-300 bg-black rounded-md p-3">
                Register
              </button>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
