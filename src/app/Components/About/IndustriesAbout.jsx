import React from 'react'
import '../About/IndustriesAbout.css'


export default function IndustriesAbout() {
  return (
    <>
      <section className="py-10 2xl:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left Column: Icon List */}
            <div>
              <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#ED1E3A]">
                Industries We Served
              </h3>
              <p className="mt-4 2xl:text-lg lg:text-base text-sm">
                We cover diverse industries, bringing specialized digital solutions to businesses across various sectors.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {/* First Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-cogs text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Education</h4>
                </div>

                {/* Second Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-graduation-cap text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Healthcare</h4>
                </div>

                {/* Third Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-plane text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Entertainment</h4>
                </div>

                {/* Fourth Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-music text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Real Estate
                  </h4>
                </div>
                {/* First Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-cogs text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Travel </h4>
                </div>

                {/* Second Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-graduation-cap text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Food</h4>
                </div>

                {/* Third Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-plane text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Retail</h4>
                </div>

                {/* Fourth Icon */}
                <div className="flex items-center gap-3 px-5 py-3 shadow-md hover:bg-gradient-to-r hover:from-[#ED1E3A] hover:to-red-600 hover:text-white">
                  <div className="bg-gradient-to-r from-[#ED1E3A] to-red-600 p-2 rounded-full text-white shadow-md hover:text-white">
                    <i className="fas fa-music text-lg hover:text-white"></i> {/* Replace with your desired icon */}
                  </div>
                  <h4 className="2xl:text-lg font-semibold hover:text-white">Lifestyle</h4>
                </div>

                {/* Add more icons as needed */}
              </div>
            </div>

            {/* Right Column: Rotating Image */}
            <div className="relative">
              <div className="rotate-slow">
                <img
                  src="/Images/globe-image.png" // Replace with your rotating image
                  alt="Rotating Globe"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
