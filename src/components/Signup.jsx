import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <div className="block w-full md:w-auto md:flex bg-white shadow-lg mb-14 md:mb-0">
        <div className="bg-white p-8 rounded-lg  max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full px-3 transition-all ease-in-out duration-500 delay-75 hover:py-2  border-b-2
                 border-b-blue-500 hover:border-b-btnColor focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full px-3 transition-all ease-in-out duration-500 delay-75 hover:py-2  border-b-2
                 border-b-blue-500 hover:border-b-btnColor focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full px-3 transition-all ease-in-out duration-500 delay-75 hover:py-2  border-b-2
                 border-b-blue-500 hover:border-b-btnColor focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                className="w-full px-3 transition-all ease-in-out duration-500 delay-75 hover:py-2  border-b-2
                 border-b-blue-500 hover:border-b-btnColor focus:outline-none"
              />
            </div>
            {confirmPassword && password !== confirmPassword && (
              <p className=" text-[0.9rem] transition-all ease-in duration-100 delay-75 my-2 text-red-600">
                Passwords do not match{" "}
              </p>
            )}
            <Link to="/">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </Link>
          </form>
          <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/sign-in">
              Sign In
            </Link>
          </p>
        </div>
        <div
          className="flex justify-center items-center w-full h-80 md:w-[30rem] md:h-[32rem] rounded-t-3xl
        md:rounded-l-[15rem] bg-btnColor md:rounded-r-sm"
        >
          <p className="text-[0.7rem] text-gray-200">
            <strong className="text-xl md:text-2xl text-black">
              EliteWheels
            </strong>{" "}
            <br />
            The Home of Luxury. . .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
