import React from 'react';
import { FaRocket, FaBolt, FaTrophy } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-gray-800">
            El Paso SEO Packages
          </h4>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium pb-12 text-gray-800">
            Unlock your business&apos;s potential with our tailored SEO packages designed to deliver measurable results for businesses in El Paso.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {/* Box 1: Steady Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaRocket className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">🚀 Steady Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Basic package</li>
                  <li>100 key phrases optimized</li>
                  <li>Up to 15 website pages optimized</li>
                  <li>Standard SEO strategy</li>
                  <li>Up to 10 local NAP listings</li>
                  <li>Comprehensive KPI reports and reviews</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Tailored for businesses in El Paso, our Steady Growth package is designed to deliver consistent organic traffic and visibility through targeted SEO strategies. Whether you&apos;re a startup or a local business, this entry-level package ensures you establish a solid digital footprint within your community.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                GET STARTED
              </a>
            </div>

            {/* Box 2: Faster Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaBolt className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">⚡ Faster Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Includes Steady Growth Pack</li>
                  <li>150 key phrases optimized</li>
                  <li>Up to 20 website pages optimized</li>
                  <li>Advanced SEO strategy</li>
                  <li>Up to 20 local NAP listings</li>
                  <li>Monthly KPI reports with insights</li>
                  <li>2 hours of UX & website improvement</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  For medium-sized businesses, the Faster Growth package offers a robust SEO plan that boosts rankings across competitive keywords. With a focus on user experience and detailed reporting, we help businesses in El Paso dominate their niche and expand their reach online.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                GET STARTED
              </a>
            </div>

            {/* Box 3: Full Speed Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-red-500">
              <div>
                <div className="flex items-center mb-6">
                  <FaTrophy className="text-red-500 text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-3xl font-bold text-gray-800">🚨 Full Speed Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Includes Faster Growth Pack</li>
                  <li>200 key phrases optimized</li>
                  <li>Up to 40 website pages optimized</li>
                  <li>Comprehensive SEO strategy</li>
                  <li>Up to 30 local NAP listings</li>
                  <li>Monthly KPI reports with actionable insights</li>
                  <li>4 hours of UX & website consultation</li>
                  <li>Detailed lead qualification process</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Designed for businesses aiming to lead the El Paso market, our Full Speed Growth package ensures maximum keyword targeting and web optimization. We focus on elevating your brand to outperform competitors through data-driven SEO, ensuring exponential growth in organic traffic and leads.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
