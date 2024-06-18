import React, { useState } from "react";
import { Link } from "react-router-dom";

// ReactIcons

// Images
import image from "../assets/bmw-1617168_1920-removebg-preview.png";
import tesla from "../assets/teslaimg-removebg-preview.png";
import bently from "../assets/bently-removebg-preview.png";
import dodge from "../assets/dodge-removebg-preview.png";
import ferari from "../assets/ferari-removebg-preview.png";
import lambo from "../assets/lambo-removebg-preview.png";
import rolls from "../assets/rolls-royce-removebg-preview.png";
import toyota from "../assets/toyota-removebg-preview.png";
import aboutcars from "../assets/aboutcars.jpg";
import auto1 from "../assets/auto1.jpg";
import auto2 from "../assets/dodge-6156457_1280.jpg";
import auto3 from "../assets/car-7628340_1280.jpg";

const Home = () => {
  const ImageList = [
    {
      id: 1,
      image: tesla,
    },
    {
      id: 2,
      image: bently,
    },
    {
      id: 3,
      image: dodge,
    },
    {
      id: 4,
      image: ferari,
    },
    {
      id: 5,
      image: lambo,
    },
    {
      id: 6,
      image: rolls,
    },
    {
      id: 7,
      image: toyota,
    },
  ];
  const cardList = [
    {
      id: 1,
      image: auto1,
      title: "Luxury Fleet",
      description:
        "Experience the epitome of style and comfort with our exclusive selection of luxury vehicles.",
    },
    {
      id: 2,
      image: auto2,
      title: "Budget-Friendly Options",
      description:
        "Discover affordable rental solutions without compromising on quality. Explore our range of budget-friendly cars.",
    },
    {
      id: 3,
      image: auto3,
      title: "Flexible Rental Plans",
      description:
        "Tailored to your needs, our flexible rental plans offer convenience and freedom to suit your schedule and preferences.",
    },
  ];
  const [imageView, setImageView] = useState(dodge);
  const [model, setModel] = useState("Dodge");
  const [availability, setAvailability] = useState("Available");
  const [price, setPrice] = useState("$457/day");
  const [mileage, setMileage] = useState("65km/h");
  const [ratings, setRatings] = useState("5/5");
  const [rental, setRental] = useState("1 Month");

  const handleImageView = (event) => {
    if (event.currentTarget.id === "1") {
      setImageView(auto2);
      setModel("Dodge Challenger");
      setAvailability("Not Available");
      setPrice("$305/day");
      setMileage("68km/h");
      setRatings("5/5");
      setRental("21 days");
    } else if (event.currentTarget.id === "2") {
      setImageView(auto1);
      setModel("Bentley");
      setAvailability("Available");
      setPrice("$395/day");
      setMileage("98km/h");
      setRatings("5/5");
      setRental("10 days");
    } else if (event.currentTarget.id === "3") {
      setImageView(auto3);
      setModel("Tesla");
      setAvailability("Available");
      setPrice("$345/day");
      setMileage("60km/h");
      setRatings("4/5");
      setRental("2 Months");
    } else if (event.currentTarget.id === "4") {
      setImageView(auto1);
      setModel("Roys-Royce");
      setAvailability("Not Available");
      setPrice("$705/day");
      setMileage("168km/h");
      setRatings("5/5");
      setRental("15 days");
    } else {
      setImageView(dodge);
    }
  };
  return (
    <React.Fragment>
      <div className="font-poppins relative overflow-hidden">
        <div className="px-6 md:px-16 2xl:px-36   bg-gradient-to-br from-white to-gray-200">
          <div className="block  md:flex pt-5">
            <div>
              <p className="mobile:font-[600] text-3xl md:font-[500]">
                Cruise into Your Next Adventure with Confidence – Explore Our
                Diverse Fleet of Quality Vehicles Today!
              </p>
              <p className="text-lg pt-3 leading-7">
                Discover a world of convenience and luxury as you embark on your
                journey with us. From compact cars to spacious SUVs, we have the
                perfect ride to suit your needs. Explore our wide range of
                vehicles and enjoy seamless rentals tailored just for you.
              </p>
              <div className="block md:flex pt-3">
                <button className="bg-btnColor mobile:mb-4 w-[12rem] py-3 px-5 rounded mr-8">
                  <Link to="/cars">Book now</Link>
                </button>
                <button className="bg-black w-[12rem] rounded-md py-3 px-5 text-gray-300">
                  <Link to="/cars">See All Cars</Link>
                </button>
              </div>
            </div>
            <img
              src={image}
              alt="rolls-royce"
              className="w-[35rem] mobile:hidden md:block"
            />
          </div>
          <div className="flex justify-between py-[4rem] px-4 overflow-x-auto md:overflow-hidden">
            {ImageList.map((item) => {
              return (
                <img
                  src={item.image}
                  alt={item.id}
                  key={item.id}
                  className=" w-[7rem] p-4 "
                />
              );
            })}
          </div>
        </div>
        <div
          className="block mobile:mt-6 mobile:px-6 md:grid md:grid-cols-2 gap-4  
        md:py-[2rem] md:px-[4rem] "
        >
          <img
            src={aboutcars}
            alt="cars"
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="h-full">
            <button className="text-btnColor font-bold mobile:text-xl mobile:mt-6">
              <Link to="/">About us</Link>
            </button>
            <h2 className="text-black mobile:text-lg md:text-[2.4rem] font-bold py-3">
              Discover our fleet of cars, ready for your next ride.
            </h2>
            <p className=" text-gray-900 leading-8">
              Embark on your journey with confidence as you explore our
              extensive range of meticulously curated cars, offering
              unparalleled comfort, style, and performance. From eco-friendly
              hybrids to powerful SUVs, we have the perfect vehicle to match
              your unique needs and preferences. Let us be your trusted partner
              in driving excellence.
            </p>
            <button className="bg-btnColor text-gray-100  w-[11rem] p-3 rounded-md mt-3">
              <Link to="/contact-us">Contact Us</Link>
            </button>
          </div>
        </div>
        <div className="bg-bg2  h-[33rem] my-[1.5rem]  xl:m-0 p-[2rem] md:p-[4rem] md:mb-[75rem] lg:mb-auto  items-center">
          <div className=" z-0 md:w-[40rem] mx-auto text-center">
            <p className="text-btnColor text-xl">
              <Link>Our Services</Link>
            </p>
            <h1 className="text-whiteText text-lg py-4 md:text-4xl md:bg-black">
              Unveil Our Premium Services: Discover Tailored Excellence.
            </h1>
            <p className="text-gray-400">
              Elevate your experience with our premium services tailored to
              exceed your expectations. From seamless rentals to personalized
              assistance, we're here to make your journey exceptional.
            </p>
          </div>
          <div className="relative ">
            <div
              className="grid grid-cols-1 my-8 mb-14 md:left-auto md:right-auto mt-14 w-full mx-auto 
            items-center md:grid-cols-1  lg:grid-cols-3 lg:gap-5 md:mx-auto md:my-[2.5rem] 
            md:w-auto absolute z-10  2xl:right-[15%] text-start"
            >
              {cardList.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="bg-white col-span-1 w-full mx-auto md:w-full border-t-8 border-t-btnColor 
                    rounded-sm xl:w-96 "
                  >
                    <img
                      src={card.image}
                      alt="car_image"
                      className="md:w-full md:h-[14rem] object-cover "
                    />
                    <div className="p-4 w-full shadow-lg md:h-[13rem] mb-4 md:mb-8">
                      <h1 className="text-blackText font-semibold text-[1.3rem] my-2 ">
                        {card.title}
                      </h1>
                      <p className="text-[0.9rem] text-gray-700">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="relative ">
            <div className="absolute inset-x-0 mx-auto my-8 mb-14 mt-14 w-full md:my-[2.5rem] z-10 flex justify-center">
              <div className="grid grid-cols-1  md:grid-cols-3 gap-5 items-center w-full">
                {cardList.map((card) => {
                  return (
                    <div
                      key={card.id}
                      className="bg-white col-span-1 w-auto border-t-8 border-t-btnColor rounded-sm"
                    >
                      <img
                        src={card.image}
                        alt="car_image"
                        className="w-full md:h-[14rem] object-cover"
                      />
                      <div className="p-4 shadow-lg md:h-[13rem] mb-4 md:mb-8">
                        <h1 className="text-blackText font-semibold text-[1.3rem] my-2">
                          {card.title}
                        </h1>
                        <p className="text-[0.9rem] text-gray-700">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>

        {/* I STOPPED HEREEEEEEEEEEEEEEEEEEEEEEEEE */}
        {/* I STOPPED HEREEEEEEEEEEEEEEEEEEEEEEEEE */}
        {/* I STOPPED HEREEEEEEEEEEEEEEEEEEEEEEEEE */}

        <div
          className="block md:flex justify-between mx-4 md:mx-[8rem] mt-[72rem]
         2xl:mx-[25rem] md:mt-[22rem] mb-[5rem] "
        >
          <div>
            <img src={imageView} className="mb-[2.5rem] w-[38rem] h-[22rem]" />
            <div className="flex gap-6 ml-3 overflow-auto md:overflow-hidden">
              <img
                src={auto2}
                id="1"
                alt="auto2"
                className="w-[8rem] h-[6rem] rounded-md border-b-[0.2rem] border-b-white transition delay-150 duration-3000 ease-linear hover:border-b-btnColor transition-ease"
                onClick={handleImageView}
              />
              <img
                src={auto1}
                id="2"
                alt="auto2"
                className="w-[8rem] h-[6rem] rounded-md border-b-[0.2rem] border-b-white hover:border-b-btnColor"
                onClick={handleImageView}
              />
              <img
                src={auto3}
                id="3"
                alt="auto2"
                className="w-[8rem] h-[6rem] rounded-md border-b-[0.2rem] border-b-white hover:border-b-btnColor"
                onClick={handleImageView}
              />
              <img
                src={auto2}
                id="4"
                alt="auto2"
                className="w-[8rem] h-[6rem] rounded-md border-b-[0.2rem] border-b-white hover:border-b-btnColor"
                onClick={handleImageView}
              />
            </div>
          </div>
          <div className=" md:text-[1.4rem] font-medium md:w-[25rem] mx-4 mt-6 md:mt-0">
            <table className="leading-[1.5] mb-[1.5rem]">
              <h2 className="text-btnColor text-xl font-[600] md:font-[500] mb-3 md:text-[2rem]">
                Car Details
              </h2>
              <tr>
                <td className="pr-5">Model </td>
                <td className="text-[1rem] font-semibold">{model}</td>
              </tr>

              <tr>
                <td className="pr-5">Availability</td>
                <td className="text-[1rem] font-semibold">{availability}</td>
              </tr>
              <tr>
                <td className="pr-5">Price</td>
                <td className="text-[1rem] font-semibold">{price}</td>
              </tr>
              <tr>
                <td className="pr-5">Mileage</td>
                <td className="text-[1rem] font-semibold">{mileage}</td>
              </tr>
              <tr>
                <td className="pr-5">Ratings</td>
                <td className="text-[1rem] font-semibold">{ratings}</td>
              </tr>

              <tr>
                <td className="pr-5">Rental Duration</td>
                <td className="text-[1rem] font-semibold">{rental}</td>
              </tr>
            </table>
            <button className="w-[12rem] bg-btnColor p-3 rounded-md my-2 text-[1rem] text-gray-200">
              <Link to="/lease">View Model</Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
