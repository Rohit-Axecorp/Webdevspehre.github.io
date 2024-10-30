import React from 'react';
import { FaRocket, FaBolt, FaTachometerAlt } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-gray-800">
            Affordable SEO Company in Fortworth Packages
          </h4>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium pb-12 text-gray-800">
            We believe that quality SEO shouldn't come with a huge price tag. Our competitive pricing ensures that you get exceptional value for your investment.

          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {/* Box 1: Steady Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaRocket className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">Steady Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Basic package</li>
                  <li>100 keywords optimized</li>
                  <li>Up to 20 website pages optimized</li>
                  <li>Standard SEO strategy</li>
                  <li>Up to 10 local NAPs listings</li>
                  <li>Monthly SEO reporting</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  This package offers all the essential SEO and link-building services required for your Fort Worth-based business. It's ideal for companies aiming to maintain consistent visibility in the Fort Worth area while steadily increasing organic search traffic.

                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
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
                  <li>Guaranteed Steady Growth Pack</li>
                  <li>150 keywords optimized</li>
                  <li>20 website pages optimized</li>
                  <li>Advanced SEO strategy</li>
                  <li>20 local NAPs listings</li>
                  <li>Monthly in-depth SEO reporting</li>
                  <li>2 hours of UX & website work per month</li>
                  <li>Lead qualification</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  This package is designed for medium-sized businesses in Fort Worth looking to dominate local search results. It offers tailored SEO strategies and continuous content optimization to help you attract more leads across the Fort Worth.

                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
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
                  <li>Guaranteed Faster Growth Pack</li>
                  <li>200 keywords optimized</li>
                  <li>40 website pages optimized</li>
                  <li>Comprehensive SEO strategy</li>
                  <li>30 local NAPs listings</li>
                  <li>Monthly analytics and reporting</li>
                  <li>4 hours of UX & website work per month</li>
                  <li>Detailed lead qualification</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  This comprehensive package is tailored for large Fort Worth-based businesses or those prepared to take the lead in the market. It includes extensive content creation, exceptional link-building strategies, and all the tools necessary to establish industry leadership.

                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
