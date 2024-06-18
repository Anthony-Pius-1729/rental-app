import React from "react";
import {
  FaCar,
  FaUsers,
  FaShieldAlt,
  FaDollarSign,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      className="md:container font-poppins mx-auto p-6 flex flex-col items-center mt-10 
    w-full mb-14 bg-gradient-to-r from-gray-300 to-original2"
    >
      <h1 className="text-2xl text-center font-bold mb-6 text-btnColor">
        About Our Car Rental Service
      </h1>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-800">
          At EliteWheels, our mission is to provide high-quality, affordable,
          and convenient car rental services to our customers. We strive to make
          your travel experience seamless and enjoyable. Our fleet of
          well-maintained vehicles includes a wide range of makes and models,
          from compact cars to spacious SUVs, to cater to your every need.
          Whether you're traveling for business or leisure, you can count on us
          to get you where you need to go safely and on time. We pride ourselves
          on our exceptional customer service.
          <br />
          <br />
          Our friendly and knowledgeable staff are dedicated to ensuring your
          rental experience is stress-free from start to finish. From helping
          you choose the perfect vehicle to providing 24/7 roadside assistance,
          we are here to make your life easier. At EliteWheels, we understand
          the importance of flexibility and convenience. That's why we offer a
          variety of rental options, including daily, weekly, and monthly rates,
          as well as drop-off and pick-up services at your preferred location.
          We also have multiple locations across the city to better serve our
          customers.
        </p>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 leading-10">
          <li>
            <strong>
              <FaUsers size={30} className="inline-block mr-2" /> Customer
              Satisfaction:
            </strong>{" "}
            We prioritize our customers' needs and services.
          </li>
          <li>
            <strong>
              <FaShieldAlt size={30} className="inline-block mr-2" />{" "}
              Reliability:
            </strong>{" "}
            Our fleet is regularly maintained to ensure safety and reliability.
          </li>
          <li>
            <strong>
              <FaDollarSign size={30} className="inline-block mr-2" />{" "}
              Affordability:
            </strong>{" "}
            We offer competitive pricing without compromising on quality.
          </li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Fleet</h2>
        <p className="text-gray-800">
          We offer a wide range of vehicles to suit your needs, from compact
          cars for city driving to SUVs for family trips. All our vehicles are
          well-maintained and equipped with modern amenities to ensure your
          comfort and safety.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor">
            <h3 className="text-xl font-semibold mb-2">
              <FaCar className="inline-block mr-2" /> Compact Cars
            </h3>
            <p className="text-gray-700">
              Ideal for city driving and short trips. Our compact car options
              are perfect for navigating the busy streets and limited parking
              spaces of the city.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor">
            <h3 className="text-xl font-semibold mb-2">
              <FaCar className="inline-block mr-2" /> SUVs
            </h3>
            <p className="text-gray-700">
              Perfect for family trips and outdoor adventures. When it's time to
              explore the great outdoors or embark on a family vacation, our
              spacious SUV and van rentals are the perfect choice.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-lg p-4 border-l-8 border-l-btnColor">
            <h3 className="text-xl font-semibold mb-2">
              <FaCar className="inline-block mr-2" /> Luxury Cars
            </h3>
            <p className="text-gray-700">
              Experience premium comfort and style. For those seeking a more
              luxurious driving experience, EliteWheels offers an exquisite
              collection of premium vehicles. Indulge in true luxury sedans.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700">
          With EliteWheels, you can expect exceptional customer service, a
          diverse selection of vehicles, and a hassle-free rental experience.
          Whether you're traveling for business or leisure, we have the perfect
          vehicle for you.
        </p>
      </section>

      <section className="mb-8 ">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-black border rounded-lg shadow-lg p-4">
            <p className="text-gray-200 mb-2">
              <FaQuoteLeft className="inline-block mr-2" /> Great service and
              reliable cars. Highly recommend!
            </p>
            <p className="text-gray-300 text-sm">- John Doe</p>
            <p className="text-yellow-500">
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
            </p>
          </div>
          <div className="bg-black border rounded-lg shadow-lg p-4">
            <p className="text-gray-200 mb-2">
              <FaQuoteLeft className="inline-block mr-2" /> Affordable prices
              and excellent customer support.
            </p>
            <p className="text-gray-300 text-sm">- Jane Smith</p>
            <p className="text-yellow-500">
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
            </p>
          </div>
          <div className="bg-black border rounded-lg shadow-lg p-4">
            <p className="text-gray-200 mb-2">
              <FaQuoteLeft className="inline-block mr-2" /> The car was in
              perfect condition and the rental process was smooth.
            </p>
            <p className="text-gray-300 text-sm">- Emma Johnson</p>
            <p className="text-yellow-500">
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
              <FaStar className="inline-block mr-1" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
