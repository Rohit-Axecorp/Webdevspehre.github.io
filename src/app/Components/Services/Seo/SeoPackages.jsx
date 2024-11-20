import React from 'react';
import { FaRocket, FaBolt, FaTachometerAlt } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-gray-800">
            Precisely Tailored Houston SEO Packages
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {/* Box 1: Steady Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaRocket className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">Steady Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Essential SEO package</li>
                  <li>100 key phrases optimized</li>
                  <li>Up to 20 website pages optimized</li>
                  <li>Comprehensive keyword strategy</li>
                  <li>Up to 10 local NAP listings</li>
                  <li>Monthly KPI reports</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Our Steady Growth package is designed for businesses in Houston aiming for consistent results. It focuses on tailored SEO strategies, ensuring your site ranks effectively while attracting targeted traffic to your niche.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                Get Started
              </a>
            </div>

            {/* Box 2: Faster Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaBolt className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">Faster Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Steady Growth features plus more
                  </li>
                  <li>150 key phrases optimized</li>
                  <li>Up to 25 website pages optimized
                  </li>
                  <li>Detailed local SEO strategies</li>
                  <li>Up to 20 local NAP listings</li>
                  <li>Advanced KPI reporting and review</li>
                  <li>Monthly user experience analysis
                  </li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Perfect for businesses seeking a competitive edge, the Faster Growth package combines in-depth analysis with actionable improvements, elevating your online presence with targeted keyword optimization and link-building strategies                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                Get Started
              </a>
            </div>

            {/* Box 3: Full Speed Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaTachometerAlt className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">Full Speed Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>All Faster Growth features included</li>
                  <li>200 key phrases optimized</li>
                  <li>Up to 40 website pages optimized
                  </li>
                  <li>Enhanced content strategies</li>
                  <li>Up to 30 local NAP listings</li>
                  <li>Dedicated SEO consultant</li>
                  <li>Comprehensive lead qualification</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Our Full Speed Growth package is the ultimate solution for businesses aiming for exponential growth. This package ensures you dominate local and competitive markets with robust SEO, cutting-edge tactics, and maximum visibility.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
