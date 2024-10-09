import React from 'react'

export default function IndustriesAbout() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left Column: Icon List */}
            <div>
              <h3 className="text-3xl font-bold text-red-500">
                Industries We Cater
              </h3>
              <p className="mt-4 text-gray-600">
                Empowering digital transformations with the most current IT solutions across a wide range of industries.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {/* First Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-cogs text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Lifestyle</h4>
                </div>

                {/* Second Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-graduation-cap text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Education</h4>
                </div>

                {/* Third Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-plane text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Tour & Travel</h4>
                </div>

                {/* Fourth Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-music text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Music</h4>
                </div>
                 {/* First Icon */}
                 <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-cogs text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Lifestyle</h4>
                </div>

                {/* Second Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-graduation-cap text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Education</h4>
                </div>

                {/* Third Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-plane text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Tour & Travel</h4>
                </div>

                {/* Fourth Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-music text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="text-lg font-semibold hover:text-white">Music</h4>
                </div>

                {/* Add more icons as needed */}
              </div>
            </div>

            {/* Right Column: Rotating Image */}
            <div className="relative">
              <div className="animate-spin-slow">
                <img
                  src="/Images/globe-image.png" // Replace with your rotating image
                  alt="Rotating Globe"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
