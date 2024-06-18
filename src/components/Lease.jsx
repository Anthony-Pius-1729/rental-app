import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/auto1.jpg";
import { v4 as uuidv4 } from "uuid";
import { CarContext } from "../contexts/CarContext";

const Lease = () => {
  const InitialState = {
    id: uuidv4(),
    brandName: "",
    modelName: "",
    price: "",
    rating: "",
    transmission: "",
    fuelType: "",
    capacity: "",
    availability: "",
    image: null,
  };
  const [newCar, setNewCar] = useState([InitialState]);
  const { cars, setCars } = useContext(CarContext);
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCar((prevCars) => {
      return { ...prevCars, [name]: value };
    });
  };
  const handleImage = (event) => {
    const { name, files } = event.target;
    setNewCar((prevCars) => {
      return { ...prevCars, [name]: files[0] };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);

    setCars((prevCars) => [...prevCars, newCar]);
    setNewCar(InitialState);

    console.log(newCar);
    event.target.reset();
  };

  const handleDelete = (carId) => {
    setCars(cars.filter((car) => car.id !== carId));
  };

  return (
    <div
      className="relative md:container font-poppins mx-auto p-6 md:flex flex-col items-center mt-10 
    w-full mb-14 bg-gradient-to-r from-gray-300 to-original2 overflow-hidden"
    >
      <div className="block md:flex justify-center items-center text-[1.2rem] mb-8">
        <h1 className="text-3xl font-bold  text-btnColor">Lease a Car</h1>
      </div>
      <div className="bg-gradient-to-r from-gray-300 to-original2 md:p-[2rem] md:w-full text-black  rounded-md">
        <form>
          <div className="md:w-[45rem] md:mx-auto mb-[3rem]">
            <div className="block md:flex justify-between mb-4 w-full">
              <div className="md:mr-[15rem] mb-4 md:mb-0">
                <label className=" ">Brand Name</label>
                <input
                  type="text"
                  id="1"
                  name="brandName"
                  onChange={handleChange}
                  className="block rounded-md p-2 w-[15rem]"
                  required
                />
              </div>
              <div>
                <label className="">Model Name Name</label>
                <input
                  type="text"
                  id="2"
                  name="modelName"
                  onChange={handleChange}
                  className="block rounded-md p-2 w-[15rem] "
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative bg-gray-600 w-full p-3 flex justify-center items-center mb-4 rounded-md">
                <input
                  type="file"
                  id="3"
                  name="image"
                  onChange={handleImage}
                  className="absolute my-[50%] ml-[30%]  cursor-pointer"
                  required
                />
                <img
                  src={image1}
                  alt="image"
                  className="w-full h-[15rem] object-cover rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4 rounded-md">
              <div>
                <label className="mr-3 ">Price</label>
                <input
                  type="number"
                  id="4"
                  name="price"
                  onChange={handleChange}
                  className="rounded-md p-2 w-36 md:w-[11.8rem]"
                  required
                />
              </div>
              <div>
                <label className="mr-3 ">Rating</label>
                <input
                  type="number"
                  id="5"
                  name="rating"
                  onChange={handleChange}
                  className="rounded-md p-2 w-36 md:w-[15rem]"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between mb-4 gap-4 md:gap-0 rounded-md">
              <select
                className="rounded-md p-2 w-56 md:w-[15rem] "
                id="6"
                name="transmission"
                onChange={handleChange}
                required
              >
                <option>Transmission</option>
                <option
                  value="Automatic"
                  name="transmission"
                  onChange={handleChange}
                  id="6a"
                >
                  Automatic
                </option>
                <option
                  value="Manual"
                  name="transmission"
                  onChange={handleChange}
                  required
                  id="6b"
                >
                  Manual
                </option>
              </select>
              <select
                className="rounded-md p-2  w-56 md:w-[15rem]"
                id="7"
                name="fuelType"
                onChange={handleChange}
                required
              >
                <option>Fuel Type</option>
                <option value="Gasoline" name="fuelType" id="7a">
                  Gasoline
                </option>
                <option value="Petrol" name="fuelType" id="7b">
                  Petrol
                </option>
                <option value="Diesel" name="fuelType" id="7c">
                  Diesel
                </option>
                <option value="Electric" name="fuelType" id="7d">
                  Electric
                </option>
              </select>
            </div>
            <div className="flex justify-between mb-10 md:mb-4 gap-4 md:gap-0 rounded-md">
              <select
                className="rounded-md p-2 w-56 md:w-[15rem]"
                id="8"
                name="capacity"
                onChange={handleChange}
                required
              >
                <option>Capacity</option>
                <option value="2-Seater" name="capacity" id="8a">
                  2-Seater
                </option>
                <option value="5-Seater" name="capacity" id="8b">
                  5-Seater
                </option>
                <option value="7-Seater" name="capacity" id="8c">
                  7-Seater
                </option>
              </select>
              <select
                className="rounded-md p-2 w-56 md:w-[15rem]"
                id="9"
                name="availability"
                onChange={handleChange}
                required
              >
                <option>Availabilty</option>
                <option
                  value="Available"
                  name="availability"
                  onChange={handleChange}
                  id="9a"
                >
                  Available
                </option>
                <option
                  value="Unavailable"
                  name="availability"
                  onChange={handleChange}
                  id="9b"
                >
                  Unavailable
                </option>
              </select>
            </div>
            <button
              className="bg-btnColor w-full md:w-[12rem] text-gray-100 p-3 rounded-md"
              id="
            submit"
              name="submit"
              onClick={handleSubmit}
            >
              Lease
            </button>
          </div>
        </form>
        {clicked && (
          <div className="block md:grid grid-cols-3 rounded-md border-[2px] border-black p-4">
            {cars.map((car) => {
              return (
                <div key={car.modelName}>
                  <div className="">
                    <div className=" md:w-[22rem] bg-slate-50 p-4 rounded-md mb-[2rem]">
                      <div className="flex justify-between gap-4 text-[0.7rem]">
                        <p>
                          <button className="text-xs md:text-md p-2  border-[1.5px] font-medium border-blackText rounded-md">
                            ⭐ <strong>{car.rating}/5</strong> (
                            {Math.floor(Math.random() * (30 - 10 + 10)) + 20})
                          </button>
                        </p>
                        <p>
                          <button
                            className={`bg-gradient-to-r from-gray-100 to-original3 p-2 md:w-[8rem] font-medium border-[1.5px] border-blackText rounded-md`}
                          >
                            {car.availability}
                          </button>
                        </p>
                        <p>
                          <button className="p-1 md:p-2 text-xs text-gray-700 font-normal">
                            {Math.floor(Math.random() * (300 - 10 + 100)) + 20}m
                          </button>
                        </p>
                      </div>
                      <img
                        src={image1}
                        alt="image1"
                        className="w-full my-[1.5rem]"
                      />
                      <p className="text-[0.7rem] text-gray-700 font-semibold">
                        {car.brandName}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-[0.8rem] font-bold text-black">
                          {car.modelName}
                        </p>
                        <p className="text-[0.8rem]">
                          <strong>${car.price}/hour</strong>
                        </p>
                      </div>
                      <div className="h-[1.5px] bg-slate-300 md:w-[19rem] mb-4 mt-4"></div>
                      <div className="grid grid-cols-3 md:grid-cols-2 text-[0.8rem] font-semibold text-gray-700">
                        <p className="mt-[2%]">
                          <button>{car.transmission}</button>
                        </p>
                        <p className="mt-[2%]">
                          <button>{car.fuelType}</button>
                        </p>
                        <p className="mt-[2%]">
                          <button>{car.capacity}</button>
                        </p>

                        <p className="col-span-3">
                          <button
                            id="delete"
                            onClick={() => handleDelete(car.id)}
                            className="mt-[5%] md:w-full p-3 md:p-3 cursor-pointer w-[15rem] 
                             bg-btnColor text-black font-bold rounded-md"
                          >
                            Delete Item
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lease;
