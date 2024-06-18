import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/lambo-removebg-preview.png";
import { CarContext } from "../contexts/CarContext";

function MyPosts() {
  const { cars } = useContext(CarContext);

  return (
    <div
      className="relative md:container mx-auto p-6 flex flex-col items-center mt-10 
    w-full mb-14 bg-gradient-to-r from-gray-300 to-original2"
    >
      <h2 className="text-3xl font-bold  text-btnColor mb-6">My Posts</h2>
      {/* <div className="absolute mt-10 h-[2rem] bg-btnColor opacity-50 blur-sm w-full max-w-5xl mx-auto"></div> */}

      <div
        className="block md:grid grid-cols-3 items-center justify-center gap-6
       overflow-y-auto scrollbar-hide border-[2px] border-blackText rounded-md p-4 "
      >
        {cars.length > 0 ? (
          cars.map((car) => (
            <div
              key={car.id}
              className="w-[22rem] bg-slate-50 p-4 rounded-md mb-6"
            >
              <div className="flex justify-between gap-4 text-[0.7rem]">
                <p>
                  <button className="p-2 border-[1.5px] font-medium border-blackText rounded-md">
                    ⭐ <strong>{car.rating}</strong> (109)
                  </button>
                </p>
                <p>
                  <button
                    className={`${
                      car.availability === "Available"
                        ? "text-lightgreen"
                        : "text-softRed"
                    } bg-gradient-to-r from-gray-100 to-original3 p-2 w-[8rem] font-medium border-[1.5px] border-blackText rounded-md`}
                  >
                    {car.availability}
                  </button>
                </p>
                <p>
                  <button className="p-2 text-gray-700 font-medium">
                    {car.walkingDistance}
                  </button>
                </p>
              </div>
              <img src={image1} alt="car" className="w-[12rem] my-[1.5rem]" />
              <p className="text-[0.7rem] text-gray-700 font-semibold">
                {car.brandName}
              </p>
              <div className="flex justify-between">
                <p className="text-[0.8rem] font-bold text-black">
                  {car.modelName}
                </p>
                <p className="text-[0.8rem]">
                  <strong>${car.pricePerHour}</strong>/hour
                </p>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[19rem] mb-4 mt-4"></div>
              <div className="flex justify-between text-[0.8rem] font-semibold text-gray-700">
                <p className="mt-[2%]">
                  <button>{car.transmission}</button>
                </p>
                <p className="mt-[2%]">
                  <button>{car.fuelType}</button>
                </p>
                <p className="mt-[2%]">
                  <button>{car.passengerCapacity}</button>
                </p>
                <p>
                  {/* <button className="p-3 cursor-pointer w-[8rem] bg-btnColor text-black font-bold rounded-md">
                    <Link to={`/cars/booking/${car.id}`}>Book Now</Link>
                  </button> */}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No cars added for lease.</p>
        )}
      </div>
    </div>
  );
}

export default MyPosts;
