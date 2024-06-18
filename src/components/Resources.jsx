import React from "react";

const resourcesData = [
  {
    title: "Travel Guide 2024",
    description:
      "An in-depth guide to the best travel destinations and tips for the upcoming year.",
    link: "#",
  },
  {
    title: "Car Maintenance Tips",
    description:
      "Learn how to keep your rental car in top condition during your trip.",
    link: "#",
  },
  {
    title: "Road Trip Essentials",
    description:
      "Everything you need to know to prepare for a memorable road trip.",
    link: "#",
  },
  {
    title: "Choosing the Right Rental Car",
    description:
      "A guide to help you choose the best rental car for your needs.",
    link: "#",
  },
  {
    title: "Safety Tips for Renting a Car",
    description:
      "Important safety tips to keep in mind while renting and driving a car.",
    link: "#",
  },
];

function Resources() {
  return (
    <div className="md:min-h-screen bg-gray-100 py-12">
      <div className="md:container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources</h2>
        <p className="text-gray-700 mb-6">
          Explore our collection of guides, tips, and articles to help you make
          the most of your car rental experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {resource.title}
              </h3>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
