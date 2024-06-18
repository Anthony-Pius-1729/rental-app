import React, { useState } from "react";
import img1 from "../assets/aboutcar.jpg";
import img2 from "../assets/aboutcars.jpg";
import { useParams } from "react-router-dom";
import carRentalData from "../data/dummyData";
import { handler } from "tailwindcss-animate";
import { Link } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const carItem = carRentalData.filter((car) => car.id == id);
  let val1 = Math.floor(Math.random() * (30 - 10 + 1)) + 20;
  let val2 = Math.floor(Math.random() * (30 - 15 + 1)) + 10;
  let val3 = Math.floor(Math.random() * (30 - 20 + 1)) + 30;
  let val4 = Math.floor(Math.random() * (30 - 14 + 1)) + 15;
  const [total, setTotal] = useState(0);

  const handleTotal = (event) => {
    const listener = event.target.id;

    if (listener == "1") {
      setTotal(val1);
    } else if (listener == "2") {
      setTotal(val2);
    } else if (listener == "3") {
      setTotal(val3);
    } else if (listener == "4") {
      setTotal(val4);
    } else {
      setTotal(0);
    }
  };

  let pageContent;
  pageContent = (
    <div className="">
      {/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1554449.5794214257!2d29.50278837502173!3d40.45237703033882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d41.0259594!2d28.855352699999997!4m5!1s0x14d3464754f0c083%3A0x1c3c82b9a65dcf75!2sMiddle%20East%20Technical%20University!3m2!1d39.8898382!2d32.780086!5e0!3m2!1sen!2str!4v1716841638851!5m2!1sen!2str"
  width="600"
  height="450"
  style={{ border: 0, width: "35rem", height: "25rem" }}
  allowfullscreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe> */}
      <div>
        <p>{`Pick Up Date and Time: 07.29.2023, 2:00PM`}</p>
        <p>{`Drop-Off Date and Time: 07.29.2023, 5:00PM`}</p>
      </div>
      <div>
        <p className="block font-semibold my-4">Insurance Details</p>
        <div className="block mb-2 ">
          <input
            type="radio"
            value="No Insurance : $0.00"
            id="0"
            onChange={handleTotal}
            name="insurance"
          ></input>
          <label htmlFor="rad1" className="ml-4">
            <strong>No Insurance </strong> : $0.00
          </label>
        </div>

        <div className="block mb-2">
          <input
            type="radio"
            value="Vehicle Protection : $23.00"
            name="insurance"
            id="1"
            onChange={handleTotal}
          ></input>
          <label htmlFor="rad2" className="ml-4">
            <strong>Vehicle Protection</strong> : ${val1}
          </label>
        </div>
        <div className="block mb-2">
          <input
            type="radio"
            value="3rd Party Liability : $78.00"
            id="2"
            onChange={handleTotal}
            name="insurance"
          ></input>
          <label htmlFor="rad3" className="ml-4">
            <strong>3rd Party Liability</strong> : ${val2}
          </label>
        </div>
        <div className="block mb-2">
          <input
            type="radio"
            value="3rd Party Liability : $78.00"
            id="3"
            onChange={handleTotal}
            name="insurance"
          ></input>
          <label htmlFor="rad3" className="ml-4">
            <strong>Accessories</strong> :$
            {val3}
          </label>
        </div>
        <div className="block mb-2">
          <input
            type="radio"
            value="3rd Party Liability : $78.00"
            id="4"
            onChange={handleTotal}
            name="insurance"
          ></input>
          <label htmlFor="rad3" className="ml-4">
            <strong>Miscelleanous</strong> : ${val4}
          </label>
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-[1.3rem]">
            Total Price: ${carItem.map((car) => car.pricePerHour + total)}
          </p>
        </div>
      </div>
    </div>
  );
  const [page, setPage] = useState(pageContent);
  const handleClick = (event) => {
    const value = event.target.id;

    // CONTINUE AND CHECK HERE... CLICK TO TOGGLE BETWEEN RENT DETS AND INSURANCE INFO
    if (value === "1") {
      setPage(pageContent);
    } else {
      pageContent = (
        <div className="">
          <div>
            <h2 className="text-[1.2rem] ">
              <strong>
                {carItem.map((car) => car.brandName)}{" "}
                {carItem.map((car) => car.modelName)}{" "}
              </strong>
            </h2>
            <p>
              <strong>Price:</strong> ${carItem.map((car) => car.pricePerHour)}
              /hour
            </p>
            <p>
              <strong>Vehicle Type:</strong> Sedan
            </p>
            <p>
              <strong>Engine Type:</strong> {carItem.map((car) => car.fuelType)}
            </p>
            <p>
              <strong>Transmission:</strong>{" "}
              {carItem.map((car) => car.transmission)}
            </p>
            <p>
              <strong>Fuel Economy:</strong>{" "}
              {carItem.map((car) => car.pricePerHour)} MPG city /{" "}
              {carItem.map((car) => Math.floor((car.pricePerHour * 2) / 3))} MPG
              highway
            </p>
            <p>
              <strong>Capacity:</strong>{" "}
              {carItem.map((car) => car.passengerCapacity)}, 2 large suitcases
            </p>
            <div className="flex justify-between">
              <div>
                <p>
                  <strong>Features:</strong>
                </p>
                <ul>
                  <li>Air Conditioning</li>
                  <li>Cruise Control</li>
                  <li>Bluetooth Connectivity</li>
                </ul>
              </div>
              <div>
                <p>
                  <strong>Safety Features:</strong>
                </p>
                <ul>
                  <li>Airbags</li>
                  <li>ABS</li>
                  <li>Traction Control</li>
                </ul>
              </div>
            </div>
            <div>
              <p>
                <strong>Availability:</strong>{" "}
                {carItem.map((car) => car.availability)}
              </p>

              <ul>
                <li>
                  <strong>Rating:</strong> ⭐ {carItem.map((car) => car.rating)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
      setPage(pageContent);
    }
  };
  return (
    <React.Fragment>
      <div className="relative w-full md:w-auto mb-[65rem] md:mb-[55rem] md:mx-[4rem] mt-[2rem] font-poppins">
        <div className="absolute z-30  bg-gradient-to-r from-gray-300 to-original2 p-[2rem] w-full text-black  rounded-md">
          <h1 className="text-[1.5rem] mb-[1.5rem] ">
            {" "}
            <strong>Rent - {carItem.map((car) => car.brandName)}</strong>
          </h1>

          <div className="block md:flex  gap-[2rem]">
            <div>
              <img
                src={img2}
                alt="lambo"
                className="md:w-[40rem] md:h-[25rem] rounded-md"
              ></img>
              <div className="mt-[1.5rem]">
                <p className="text-[0.8rem] text-gray-600">
                  {carItem.map((car) => car.brandName)}
                </p>
                <p className="text-black font-bold text-[1.2rem]">
                  {carItem.map((car) => car.modelName)}
                </p>
              </div>
            </div>
            {/* CHECK THIS LATER */}
            <div className="h-[25rem]">
              <div className="flex justify-between gap-5 mb-1 ">
                <button
                  id="1"
                  className="bg-gray-800 p-3 text-gray-100 rounded-md "
                  onClick={handleClick}
                >
                  Rent Details
                </button>
                <button
                  id="2"
                  className="bg-gray-800 p-3 text-gray-100 rounded-md"
                  onClick={handleClick}
                >
                  Vehicle Info
                </button>
              </div>
              <div className="h-[1.5px] bg-slate-400 w-[25rem] mb-3"></div>
              {page}
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <Link to={`/cars/booking/${carItem.map((car) => car.id)}/checkout`}>
              {" "}
              <button className="w-[20rem] bg-btnColor p-4 rounded-md mt-[6.5rem] md:mt-[1.5rem] ">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Booking;
