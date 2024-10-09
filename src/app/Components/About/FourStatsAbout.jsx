import React from 'react'

export default function FourStatsAbout() {
  return (
<>

<section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-white">Projects Delivered</p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-white">70+</h3>
            <p className="text-white">In-House Specialists</p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-white">11+</h3>
            <p className="text-white">Years of Experience</p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-white">25+</h3>
            <p className="text-white">Industries Served</p>
          </div>
        </div>
      </div>
    </section>

</>
)
}
