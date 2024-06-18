import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Team = () => {
  return (
    <div
      className="md:container font-poppins mx-auto p-6 flex flex-col items-center md:mt-10 
    w-full mb-14 bg-gradient-to-r from-gray-300 to-original2"
    >
      <h1 className="text-3xl font-bold mb-6 text-btnColor">Meet Our Team</h1>
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
        <p className="text-gray-700 mb-6">
          At EliteWheels, we are proud to have a team of dedicated professionals
          who are passionate about providing exceptional car rental services.
          Our leadership team brings a wealth of experience and expertise to
          ensure that our customers have the best experience possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-black transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600
           hover:scale-105 text-gray-200 border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor"
          >
            <h3 className="text-xl font-semibold mb-2 text-btnColor">
              Jane Doe
            </h3>
            <p className="text-gray-300">CEO</p>
            <p className="text-gray-400 mb-4">
              Jane has over 20 years of experience in the car rental industry
              and is committed to leading our company to new heights.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:jane.doe@example.com" className="text-gray-600">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="bg-black transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 text-gray-200 border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor">
            <h3 className="text-xl font-semibold mb-2 text-btnColor">
              John Smith
            </h3>
            <p className="text-gray-300">COO</p>
            <p className="text-gray-400 mb-4">
              John oversees our operations, ensuring that everything runs
              smoothly and efficiently. He is an exceptional leader.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:john.smith@example.com" className="text-gray-600">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="bg-black transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 text-gray-200 border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor">
            <h3 className="text-xl font-semibold mb-2 text-btnColor">
              Emily Johnson
            </h3>
            <p className="text-gray-300">CFO</p>
            <p className="text-gray-400 mb-4">
              Emily is responsible for managing our finances and ensuring our
              company's financial health.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:emily.johnson@example.com"
                className="text-gray-600"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Team Members</h2>
        <p className="text-gray-700 mb-6">
          Our team members are the backbone of our company. Each member is
          dedicated to providing the best service and support to our customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 text-gray-200 border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor">
            <h3 className="text-xl font-semibold mb-2 text-btnColor">
              Mark Wilson
            </h3>
            <p className="text-gray-300">Customer Service Manager</p>
            <p className="text-gray-400 mb-4">
              Mark leads our customer service team, ensuring that all customer
              inquiries are handled promptly and effectively.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:mark.wilson@example.com"
                className="text-gray-600"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="bg-black transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105 text-gray-200 border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor hover:bg-black hover: text-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-btnColor">
              Linda Taylor
            </h3>
            <p className="text-gray-300">Marketing Specialist</p>
            <p className="text-gray-400 mb-4">
              Linda is responsible for our marketing strategies, helping us
              reach new customers and grow our brand.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:linda.taylor@example.com"
                className="text-gray-600"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div
            className="bg-black transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105
            text-gray-200 border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor hover:bg-black 
           "
          >
            <h3 className="text-xl font-semibold mb-2 text-btnColor ">
              James Kanon
            </h3>
            <p className="text-gray-300">Fleet Manager</p>
            <p className="text-gray-400 mb-4">
              James manages our vehicle fleet, ensuring all cars are in top
              condition and ready for our customers.
            </p>
            <div className="flex space-x-4 justify-center items-center">
              <a href="#" className="text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:james.brown@example.com"
                className="text-gray-600"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
