import React, { useState, useEffect } from "react";
import "../range.css";
import image1 from "../assets/bmw-1617168_1920-removebg-preview.png";
import carRentalData from "../data/dummyData";
import { Link } from "react-router-dom";

const CarListing = () => {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState("");
  // const [searchState, setSearchState] = useState(false);

  const handleData = (event) => {
    setData(event.target.value);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const [filteredCars, setFilteredCars] = useState(carRentalData);

  const [availability, setAvailability] = useState(null);
  const [price, setPrice] = useState(null);
  const [passengerCapacity, setPassengerCapacity] = useState(null);
  const [transmission, setTransmission] = useState(null);
  const [fuelType, setFuelType] = useState(null);

  const resetFilters = () => {
    setAvailability(null);
    setPrice(null);
    setPassengerCapacity(null);
    setTransmission(null);
    setFuelType(null);
    setSearch("");
    setData(0);
  };

  const filterByAvailability = (array) => {
    if (availability !== null) {
      return array.filter((car) => car.availability === availability);
    } else {
      return array;
    }
  };

  const filterByPrice = (array) => {
    if (data !== 0) {
      return array.filter((car) => car.pricePerHour <= data);
    } else {
      return array;
    }
  };

  const filterByTransmission = (array) => {
    if (transmission !== null) {
      return array.filter((car) => car.transmission === transmission);
    } else {
      return array;
    }
  };

  const filterByPassengerCapacity = (array) => {
    if (passengerCapacity !== null) {
      return array.filter((car) => car.passengerCapacity === passengerCapacity);
    } else {
      return array;
    }
  };

  const filterByFuelType = (array) => {
    if (fuelType !== null) {
      return array.filter((car) => car.fuelType === fuelType);
    } else {
      return array;
    }
  };

  const filterBySearch = (array) => {
    if (search !== "") {
      return array.filter((car) =>
        car.brandName.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return array;
    }
  };

  useEffect(() => {
    let result = carRentalData;
    result = filterByAvailability(result);
    result = filterByPrice(result);
    result = filterByPassengerCapacity(result);
    result = filterByTransmission(result);
    result = filterByFuelType(result);
    result = filterBySearch(result);

    setFilteredCars(result);
  }, [availability, data, passengerCapacity, transmission, fuelType, search]);

  return (
    <React.Fragment>
      <div
        className="relative w-full md:w-auto h-96 mb-[85rem] pb-32 md:mb-[25rem]
        md:mx-4 md:mt-[2rem] lg:mb-[35rem] lg:mx-[2rem] xl:mb-[55rem] "
      >
        <div className="absolute z-30 w-full md:w-full  lg:w-full  xl:w-auto  2xl:w-full  block  md:flex justify-between">
          <div
            className="md:h-[100vh] overflow-y-scroll scrollbar-hide bg-gradient-to-r from-gray-200
           to-original3 p-4 text-white w-full md:w-full lg:w-auto xl:w-auto rounded-tl-md rounded-bl-md"
          >
            <div>
              <div className="flex justify-between">
                <p className="text-blackText font-bold">Filter by:</p>
                <p className="text-btnColor font-semibold">
                  <button onClick={resetFilters}>Reset all</button>
                </p>
              </div>
              <input
                type="search"
                placeholder="Search"
                className="p-2 w-full rounded-sm my-7 text-blackText font-medium outline-none"
                onChange={handleSearch}
              ></input>
              {/* {searchState && (
                <strong className="text-btnColor">
                  Searching for {search} . . .
                </strong>
              )} */}
              <p className="text-black font-semibold">Rental Type</p>

              <div className="flex justify-between">
                <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                  <button>Any</button>
                </p>
                <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                  <button>Per Day</button>
                </p>
                <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                  <button>Per Hour</button>
                </p>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[18rem] mb-3"></div>
              <div className="flex justify-between">
                <p className="text-black font-semibold">Available now Only</p>
                <p className="text-black font-semibold">
                  <button>on/off</button>
                </p>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[18rem] mb-4 mt-4"></div>
              <div>
                <p className="text-black font-semibold">Price Range/Day</p>
                <div className="flex justify-center my-[1rem]">
                  <p className="text-blackText font-bold text-[1.8rem]">
                    ${data}
                  </p>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={data}
                  onChange={handleData}
                  className="w-[18rem] bg-btnColor"
                ></input>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[18rem] mb-4 mt-4"></div>
              <div>
                <p className="text-black font-semibold">Passenger Capacity</p>
                <div className="flex justify-between">
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setPassengerCapacity("2-Seater")}>
                      2-seater
                    </button>
                  </p>
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setPassengerCapacity("5-Seater")}>
                      5-seater
                    </button>
                  </p>
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setPassengerCapacity("7-Seater")}>
                      7-seater
                    </button>
                  </p>
                </div>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[18rem] mb-4 mt-4"></div>
              <div>
                <p className="text-black font-semibold">Transmission</p>
                <div className="flex justify-between">
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setTransmission("Automatic")}>
                      Automatic
                    </button>
                  </p>
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setTransmission("Manual")}>
                      Manual
                    </button>
                  </p>
                </div>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[18rem] mb-4 mt-4"></div>
              <div>
                <p className="text-black font-semibold">Fuel Type</p>
                <div className="flex justify-between">
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setFuelType("Petrol")}>
                      Petrol
                    </button>
                  </p>
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setFuelType("Diesel")}>
                      Diesel
                    </button>
                  </p>
                  <p className="text-black font-semibold p-2 border-[2px] border-gray-500 hover:bg-btnColor hover:border-btnColor transition duration-300 ease-in-out rounded-md my-4">
                    <button onClick={() => setFuelType("Electric")}>
                      Electric
                    </button>
                  </p>
                </div>
              </div>
              <div className="h-[1.5px] bg-slate-300 w-[18rem] mb-4 mt-4"></div>
            </div>
          </div>
          <div
            className={`
            relative
               md:h-[100vh] 
                bg-gradient-to-r 
               from-gray-200 
               to-original3 
               p-2 
               md:p-2 
               overflow-y-scroll 
               md:scrollbar-hide 
                
               w-full 
               md:w-full
               rounded-tr-md 
               rounded-br-md
               lg:w-full
               lg:p-2
               xl:w-full
               xl:p-2
               2xl:w-full
               overflow-hidden
              
`}
            // ${
            //                  filteredCars && filteredCars.length <= 0
            //                    ? "h-[50rem]"
            //                    : "h-[50rem]"
            //                }
          >
            <div
              className="grid grid-cols-1 md:grid-cols-1 md:gap-4 md:m-0 xl:grid-cols-3 lg:gap-10 lg:p-1
               xl:gap-5 xl:p-1 2xl:grid-cols-3 "
            >
              {filteredCars && filteredCars.length > 0 ? (
                filteredCars.map((car) => {
                  return (
                    <div key={car.id}>
                      <div className="md:w-full lg:w-auto  xl:w-auto bg-slate-50  p-6 xl:p-4 rounded-md mb-[2rem]">
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
                        <img
                          src={image1}
                          alt="image1"
                          className="w-[12rem] my-[1.5rem]"
                        />
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
                        <div className="h-[1.5px] bg-slate-300 w-[19rem] md:w-full mb-4 mt-4"></div>
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
                            <button className="p-3 cursor-pointer w-[8rem] bg-btnColor text-black font-bold rounded-md">
                              <Link to={`/cars/booking/${car.id}`}>
                                Book Now
                              </Link>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-center items-center h-[50rem] md:h-[100vh] bg-black">
                  <div className="text-center">
                    <p className="text-xl text-whiteText">Oops!</p>
                    <p className="text-2xl text-whiteText">
                      No Car matches your search
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarListing;
