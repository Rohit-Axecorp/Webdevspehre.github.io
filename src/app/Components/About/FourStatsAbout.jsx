import React from 'react';

export default function FourStatsAbout() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        {/* Grid layout for the boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* First stat box */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Projects Delivered"
              className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">500+</h3>
            <p className="text-sm sm:text-base text-white">Projects Delivered</p>
          </div>

          {/* Second stat box */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="In-House Specialists"
              className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">70+</h3>
            <p className="text-sm sm:text-base text-white">In-House Specialists</p>
          </div>

          {/* Third stat box */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Years of Experience"
              className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">11+</h3>
            <p className="text-sm sm:text-base text-white">Years of Experience</p>
          </div>

          {/* Fourth stat box */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Industries Served"
              className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">25+</h3>
            <p className="text-sm sm:text-base text-white">Industries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
