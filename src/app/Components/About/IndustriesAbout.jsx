import React from 'react'

export default function IndustriesAbout() {
  return (

    <>

    
<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Column: Industries List */}
          <div>
            <h3 className="text-3xl font-bold text-red-500">
              Industries We Cater
            </h3>
            <p className="mt-4 text-gray-600">
              Empowering digital transformations with the most current IT solutions across a wide range of industries.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-md text-white">
                Lifestyle
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-md text-white">
                Education
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-md text-white">
                Tour & Travel
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-md text-white">
                Music
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-md text-white">
                Professional Services
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-md text-white">
                Property & Real Estate
              </div>
            </div>
          </div>

          {/* Right Column: Rotating Image */}
          <div className="relative">
            <div className="animate-spin-slow">
              <img
                src="/path/to/your/rotating-image.png"
                alt="Rotating Globe"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    </>

)
}
