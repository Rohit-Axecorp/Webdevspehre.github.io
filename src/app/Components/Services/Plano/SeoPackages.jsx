

import React from 'react';
import { FaRocket, FaBolt, FaTachometerAlt } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-gray-800">
            Budget-Friendly SEO Solutions
          </h4>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium pb-12 text-gray-800">
            Web Dev Sphere offers top-tier SEO services in Plano that cater to all types of business. Achieving top rankings on SERP has never been this much easier!
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
                  <li>Basic package</li>
                  <li>100 keywords optimized</li>
                  <li>Up to 20 website pages optimized</li>
                  <li>Standard SEO strategy</li>
                  <li>Up to 10 local NAPs listings</li>
                  <li>Monthly SEO reporting</li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  This package includes all the essential SEO and link-building services your Plano-based business needs. It&apos;s ideal for companies aiming to maintain strong local visibility and achieve consistent growth through organic search traffic in the Plano area.
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
                  This package is ideal for large Plano businesses or those set on market leadership. It offers comprehensive content development, high-quality link-building, and the strategic tools needed to position your brand at the forefront of your industry.</p>
              </div>
              <a href="#" className="text-[#ED1E3A] hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                LET&apos;S GET STARTED
              </a>
            </div>

            {/* Box 3: Full Speed Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaTachometerAlt className="text-[#ED1E3A] text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A]xl font-bold text-gray-800">Full Speed Growth</h5>
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
                  This comprehensive package is crafted for large Austin businesses or those ready to take the market by storm. It includes extensive content creation, premium link-building strategies, and all the essential tools needed to establish your brand.
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
