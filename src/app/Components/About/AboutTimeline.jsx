import React from 'react'

export default function AboutTimeline() {
  return (
    <>
    
    <div className="bg-black text-white py-12">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-12">
        Explore 11+ Years Of Ideation. Innovation. Transformation
      </h2>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="border-l-4 border-gray-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="flex flex-col space-y-10">
            {/* Timeline Block 1 */}
            <div className="relative flex justify-start items-center">
              <div className="w-1/2 text-right pr-8">
                <h3 className="text-lg font-bold">2012</h3>
                <p className="text-sm">Pro Web was launched to cater businesses in evolving tech.</p>
              </div>
              <div className="w-1/12 text-center">
                <div className="bg-orange-500 h-8 w-8 rounded-full"></div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Timeline Block 2 */}
            <div className="relative flex justify-end items-center">
              <div className="w-1/2"></div>
              <div className="w-1/12 text-center">
                <div className="bg-orange-500 h-8 w-8 rounded-full"></div>
              </div>
              <div className="w-1/2 pl-8">
                <h3 className="text-lg font-bold">2013</h3>
                <p className="text-sm">Team strength increased to 30+ designers & developers.</p>
              </div>
            </div>

            {/* Add more timeline blocks as per your image */}
            {/* For example, repeat the block structure for 2014, 2015, etc. */}

          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
