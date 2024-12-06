import React from 'react';
import { FaRocket, FaBolt, FaTrophy } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-gray-800">
            San Antonio SEO Packages
          </h4>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium pb-12 text-gray-800">
            Unlock your business&apos;s potential with our tailored SEO packages designed to deliver measurable results for businesses in San Antonio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {/* Box 1: Steady Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaRocket className="text-[#ED1E3A] text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A]xl font-bold text-gray-800">Steady Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Basic Package</li>
                  <li>100 Key Phrases Optimized</li>
                  <li>Up to 20 Website Pages Optimized</li>
                  <li>Standard SEO Strategy</li>
                  <li>Up to 10 Local NAPs Listings</li>
                  <li>Standard KPI Reports and Reviews</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Tailored for businesses in San Antonio, this package focuses on delivering a consistent stream of organic traffic through content optimization and link-building strategies. Our local SEO company San Antonio ensures your business secures a prominent spot in local search results.
                </p>
              </div>
              <a href="#" className="text-[#ED1E3A] hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
              </a>
            </div>

            {/* Box 2: Faster Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaBolt className="text-[#ED1E3A] text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A]xl font-bold text-gray-800">Faster Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Steady Growth Pack Guaranteed</li>
                  <li>150 Key Phrases Optimized</li>
                  <li>Up to 30 Website Pages Optimized</li>
                  <li>Advanced SEO Strategy</li>
                  <li>Up to 20 Local NAPs Listings</li>
                  <li>Detailed KPI Reports (Monthly)</li>
                  <li>2 Hours of UX & Website Work (Monthly)</li>
                  <li>Lead Qualification</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  For growing businesses in San Antonio, this package provides comprehensive coverage across local and regional markets. With SEO companies San Antonio, you’ll see measurable results, including enhanced visibility and better audience engagement.
                </p>
              </div>
              <a href="#" className="text-[#ED1E3A] hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
              </a>
            </div>

            {/* Box 3: Full Speed Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaTrophy className="text-[#ED1E3A] text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A]xl font-bold text-gray-800">Full Speed Growth</h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Faster Growth Pack Guaranteed</li>
                  <li>200 Key Phrases Optimized</li>
                  <li>Up to 50 Website Pages Optimized</li>
                  <li>Full-Scale SEO Strategy</li>
                  <li>Up to 30 Local NAPs Listings</li>
                  <li>Custom KPI Reports (Monthly)</li>
                  <li>4 Hours of UX & Website Work (Monthly)</li>
                  <li>In-Depth Lead Qualification</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Designed for businesses aiming for dominance, this premium package ensures your success in the competitive San Antonio market. With expert guidance from our SEO company San Antonio TX, we amplify your reach and accelerate your growth.
                </p>
              </div>
              <a href="#" className="text-[#ED1E3A] hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
