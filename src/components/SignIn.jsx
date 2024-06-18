import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <div className="block mb-14 w-full md:w-auto  md:flex bg-white shadow-lg">
        <div className="bg-white h-96 p-8 rounded-l-lg  max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 "
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
            <Link to="/">
              <button
                type="submit"
                className="w-full bg-btnColor text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </Link>
          </form>
          <p className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
        <div
          className="flex justify-center items-center md:w-96 h-96 rounded-t-3xl  
        md:rounded-l-[11.7rem] bg-btnColor md:rounded-r-sm"
        >
          <p className="text-[0.8rem] text-gray-200">
            <strong className="text-2xl text-black">EliteWheels</strong> <br />
            The Home of Luxury. . .
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
