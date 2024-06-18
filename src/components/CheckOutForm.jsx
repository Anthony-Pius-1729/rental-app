import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import carRentalData from "../data/dummyData";
import image1 from "../assets/lambo-removebg-preview.png";

function CheckOutForm() {
  const { id } = useParams();
  const carItem = carRentalData.filter((car) => car.id == id);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCardNumberChange = (event) => setCardNumber(event.target.value);
  const handleExpiryDateChange = (event) => setExpiryDate(event.target.value);
  const handleCvvChange = (event) => setCvv(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPaymentSuccess(true);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-start  mt-10  shadow-xl">
      <div>
        {carItem.map((car) => (
          <div
            key={car.id}
            className="h-[26rem] w-auto mx-4 md:mx-0  border-2 md:border-r-0  bg-slate-50 p-4 
            rounded-md md:rounded-r-none mb-6"
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
            <img
              src={image1}
              alt="image1"
              className="w-[12rem] my-[1.5rem] m-4"
            />
            <p className="text-[0.7rem] text-gray-700  font-semibold">
              {car.brandName}
            </p>
            <div className="flex justify-between mt-5">
              <p className="text-[0.8rem] font-bold text-black">
                {car.modelName}
              </p>
              <p className="text-[0.8rem]">
                <strong>${car.pricePerHour}</strong>/hour
              </p>
            </div>
            <div className="h-[1.5px] bg-slate-300 w-full mb-4 mt-4"></div>
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
              <p className=" mt-[2%] text-[0.8rem] font-semibold text-gray-700">
                Airbags
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:w-[22rem] sm:h-1 md:h-[26rem] md:w-1 bg-original2"></div>
      <div
        className="w-auto md:w-[22rem] h-[26rem] p-8 mx-4 md:mx-0 md:border-l-0 border-2 rounded-lg md:rounded-l-none
        bg-white mb-14"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full flex justify-center py-2 px-4 border border-transparent
           rounded-md shadow-sm text-sm font-medium text-gray-100 bg-btnColor
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
             focus:ring-blue-500 disabled:opacity-50"
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>

          {paymentSuccess && (
            <p className="text-green-500 text-center mt-4">
              Payment successful!
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CheckOutForm;
