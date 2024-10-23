import React from 'react';
import { FaRocket, FaBolt, FaTachometerAlt } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <h1 className="text-center font-semibold text-3xl sm:text-4xl pb-8 sm:pb-12 container">
          Chicago SEO Packages
        </h1>
        <div className="container mx-auto px-4 sm:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1: Steady Growth */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <FaRocket className="text-red-500 text-3xl mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold">Steady Growth</h2>
              </div>
              <ul className="list-disc list-inside mb-4 text-sm sm:text-base font-medium">
                <li>Basic package</li>
                <li>100 key phrases optimized</li>
                <li>Up to 20 website pages optimized</li>
                <li>Standard SEO strategy</li>
                <li>Up to 10 local NAPs listings</li>
                <li>Standard KPIs reports and review</li>
              </ul>
              <p className="mb-4 text-sm sm:text-base font-normal">
                Tailored to your service area in Chicago, we offer a compact yet effective content and link-building package, designed to draw in a stream of organic traffic. Watch as your business flourishes within the Chicago community with our targeted approach.
              </p>
            </div>
            <a href="#" className="text-red-500 hover:underline hover:text-red-600 self-start text-base font-medium">
              Get Started
            </a>
          </div>

          {/* Box 2: Faster Growth */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <FaBolt className="text-red-500 text-3xl mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold">Faster Growth</h2>
              </div>
              <ul className="list-disc list-inside mb-4 text-sm sm:text-base font-medium">
                <li>Steady Growth Pack Guaranteed</li>
                <li>150 key phrases optimized</li>
                <li>Up to 20 website pages optimized</li>
                <li>Detailed SEO strategy</li>
                <li>Up to 20 local NAPs listings</li>
                <li>Detailed KPIs reporting (monthly)</li>
                <li>2 hours of UX & website work (monthly)</li>
                <li>Lead qualification</li>
              </ul>
              <p className="mb-4 text-sm sm:text-base font-normal">
                For small and medium-sized businesses in Chicago hungry for SEO results, we present our package, that covers both local and national service areas in the Chicago metropolitan region. Complementing this are generous content and link-building packages, reinforcing our SEO efforts.
              </p>
            </div>
            <a href="#" className="text-red-500 hover:underline hover:text-red-600 self-start text-base font-medium">
              Get Started
            </a>
          </div>

          {/* Box 3: Full Speed Growth */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <FaTachometerAlt className="text-red-500 text-3xl mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold">Full Speed Growth</h2>
              </div>
              <ul className="list-disc list-inside mb-4 text-sm sm:text-base font-medium">
                <li>Faster Growth Pack Guaranteed</li>
                <li>200 key phrases optimized</li>
                <li>Up to 40 website pages optimized</li>
                <li>Full-Scale SEO strategy</li>
                <li>Up to 30 local NAPs listings</li>
                <li>Detailed KPIs reporting (monthly)</li>
                <li>4 hours of UX & website work (monthly)</li>
                <li>Thorough lead qualification</li>
              </ul>
              <p className="mb-4 text-sm sm:text-base font-normal">
                In the Chicago market, we go the extra mile by optimizing even more pages and keywords, ensuring you dominate in competitive markets within the Windy City. Paired with our extensive content and link-building packages, we’ll catapult your Chicago-based business to the pinnacle of success.
              </p>
            </div>
            <a href="#" className="text-red-500 hover:underline hover:text-red-600 self-start text-base font-medium">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
