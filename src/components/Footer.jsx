import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="">
        <div className="relative font-poppins">
          <div
            className="absolute z-20 bg-btnColor md:w-[97%] mx-2 md:mx-4 px-[2rem]
         pt-[4rem] pb-[4rem] items-center text-center rounded-md"
          >
            <div className="md:w-[40rem] mx-auto">
              <h1 className="font-bold text-xl md:text-[2.5rem] text-gray-100">
                Let's drive Elite Wheels today!
              </h1>
              <p className="text-gray-200 my-[3rem] md:text-[1rem]">
                Get the app to explore the world of premium cars, get fast, and
                safe transactions to help you find your dream rental. With our
                user-friendly interface, you'll have access to an extensive
                collection of luxurious vehicles, ranging from sleek sports cars
                to elegant sedans. Take your pick and experience the thrill of
                driving in style.
              </p>
              <div className="flex justify-around gap-2">
                <button className="p-3 md:p-4 bg-black text-gray-200 rounded-md md:text-md text-sm w-[8rem]">
                  Download on the iOS store
                </button>
                <button className="p-3 md:p-4 bg-black text-gray-200 rounded-md md:text-md text-sm w-[8rem]">
                  Download on Play Store
                </button>
              </div>
            </div>
          </div>

          <div
            className="block h-auto w-full text-center md:text-start absolute z-10 bg-black md:w-full mt-72 pt-[21rem] 
            md:mt-[10rem] md:pt-[20rem] 
         md:flex items-center justify-between px-4 md:px-[4rem] pb-[3rem] text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white w-full">
              <div>
                <h3 className="text-lg font-bold mb-2">Company</h3>
                <ul>
                  <li className="mb-1">
                    <Link to="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/careers" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/resources" className="hover:underline">
                      Resources
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/join-us" className="hover:underline">
                      Join Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Customer Service</h3>
                <ul>
                  <li className="mb-1">
                    <Link to="/contact-us" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/faq" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/support" className="hover:underline">
                      Support
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/cancellation-policy" className="hover:underline">
                      Cancellation Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Legal</h3>
                <ul>
                  <li className="mb-1">
                    <Link to="/terms" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/cookie-policy" className="hover:underline">
                      Cookie Policy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/disclaimer" className="hover:underline">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Connect with Us</h3>
                <ul className="flex space-x-4 md:justify-normal justify-center items-center">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <FaFacebook className="w-6 h-6 text-btnColor" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <FaTwitter className="w-6 h-6 text-btnColor" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <FaInstagram className="w-6 h-6 text-btnColor" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      <FaLinkedin className="w-6 h-6 text-btnColor" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="absolute z-10  mt-[152.9rem] md:mt-0 md:pt-[98rem] lg:pt-[82rem]">
            <span className="text-gray-500">©{" " + date}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
