import React from "react";

function JoinUs() {
  return (
    <div className="md:min-h-screen bg-gray-100 py-12">
      <div className="md:container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-700 mb-8">
            We’re looking for talented and passionate individuals to join our
            team. Explore our open positions and be part of a dynamic and
            innovative company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
            <h3 className="text-2xl font-semibold text-btnColor  mb-4">
              Software Engineer
            </h3>
            <p className="text-gray-700 mb-4">
              As a software engineer, you’ll be developing and enhancing our
              cutting-edge car rental platform.
            </p>
            <a
              href="#"
              className="inline-block bg-btnColor text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
            <h3 className="text-2xl font-semibold text-btnColor  mb-4">
              Marketing Specialist
            </h3>
            <p className="text-gray-700 mb-4">
              We are looking for a creative marketing specialist to lead our
              marketing campaigns and increase our brand awareness.
            </p>
            <a
              href="#"
              className="inline-block bg-btnColor text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
            <h3 className="text-2xl text-btnColor font-semibold  mb-4">
              Customer Support
            </h3>
            <p className="text-gray-700 mb-4">
              Join our customer support team and help us provide excellent
              service to our customers. So, Hurry up and be part of
              result-driven team.
            </p>
            <a
              href="#"
              className="inline-block bg-btnColor text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Why Join Us?
          </h2>
          <p className="text-gray-700 mb-8">
            At EliteWheels, we offer a collaborative work environment,
            opportunities for growth, and a chance to be part of a
            forward-thinking company.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
              <h4 className="text-xl font-semibold text-btnColor  mb-4">
                Innovative Projects
              </h4>
              <p className="text-gray-700">
                Work on exciting projects that push the boundaries of technology
                and customer experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
              <h4 className="text-xl font-semibold text-btnColor  mb-4">
                Collaborative Environment
              </h4>
              <p className="text-gray-700">
                Be part of a team that values collaboration, creativity, and
                open communication.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 delay-75 hover:shadow-2xl hover:shadow-gray-600 hover:scale-105">
              <h4 className="text-xl font-semibold text-btnColor  mb-4">
                Career Growth
              </h4>
              <p className="text-gray-900">
                We offer opportunities for professional development and career
                advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
