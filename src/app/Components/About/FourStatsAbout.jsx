import React from 'react';

export default function FourStatsAbout() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        {/* Grid layout for the boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* First stat box */}
          <div className="bg-gradient-to-r from-[#ED1E3A] to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="/Images/g1.png" // Replace with your image URL
              alt="Projects Delivered"
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-2xl 2xl:text-3xl font-bold text-white">500+</h3>
            <p className="2xl:text-lg lg:text-base text-sm text-white">Projects Delivered
            </p>
          </div>

          {/* Second stat box */}
          <div className="bg-gradient-to-r from-[#ED1E3A] to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="/Images/g2.png" // Replace with your image URL
              alt="In-House Specialists"
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-2xl 2xl:text-3xl font-bold text-white">80+</h3>
            <p className="2xl:text-lg lg:text-base text-sm text-white">Expert Team
            </p>
          </div>

          {/* Third stat box */}
          <div className="bg-gradient-to-r from-[#ED1E3A] to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="/Images/g3.png" // Replace with your image URL
              alt="Years of Experience"
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-2xl 2xl:text-3xl font-bold text-white">10+</h3>
            <p className="2xl:text-lg lg:text-base text-sm text-white">Years of Experience
            </p>
          </div>

          {/* Fourth stat box */}
          <div className="bg-gradient-to-r from-[#ED1E3A] to-red-700 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <img
              src="/Images/g4.png" // Replace with your image URL
              alt="Industries Served"
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-2xl 2xl:text-3xl font-bold text-white">30+</h3>
            <p className="2xl:text-lg lg:text-base text-sm text-white">Industries Served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
