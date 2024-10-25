import React from 'react';
import { FaRocket, FaBolt, FaTachometerAlt } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold pb-4 ">
            Affordable SEO Company Dallas TX Packages
          </h1>
          <p className="text-center text-base md:text-lg lg:text-xl font-normal pb-8   sm:pb-12">
          Looking to grow your company in Dallas? Our Dallas SEO services deliver impressive results at an affordable price.
          </p>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Box 1: Steady Growth */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <FaRocket className="text-red-500 text-3xl mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold">Steady Growth</h2>
                </div>
                <ul className="list-disc list-inside mb-4 text-sm sm:text-base font-medium">
                  <li>Basic package</li>
                  <li>100 keywords optimized</li>
                  <li>Up to 20 website pages optimized</li>
                  <li>Standard SEO strategy</li>
                  <li>Up to 10 local NAPs listings</li>
                  <li>Detailed monthly SEO reporting</li>
                </ul>
                <p className="mb-4 text-sm sm:text-base font-normal">
                This package includes all the essential SEO and link-building services you need for your Dallas-based business. Perfect for businesses looking to maintain steady visibility in the Dallas area and grow consistently with organic search traffic.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 self-start text-base font-medium">
                LET&apos;S GET STARTED
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
                  <li>150 keywords optimized</li>
                  <li>Up to 20 website pages optimized</li>
                  <li>Advanced SEO strategy</li>
                  <li>Up to 20 local NAPs listings</li>
                  <li>In-depth SEO reporting (monthly)</li>
                  <li>2 hours of UX & website work per month                  </li>
                  <li>Lead qualification</li>
                </ul>
                <p className="mb-4 text-sm sm:text-base font-normal">
                Ideal for medium-sized Dallas businesses looking to dominate local search results, this package offers customized SEO strategies and continuous content optimization to help you attract more leads across the Dallas-Fort Worth metroplex.
                </p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 self-start text-base font-medium">
                LET&apos;S GET STARTED

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
                  <li>In-depth reporting & analytics (monthly)</li>
                  <li>4 hours of UX & website work per month</li>
                  <li>Thorough lead qualification</li>
                </ul>
                <p className="mb-4 text-sm sm:text-base font-normal">
                A comprehensive package designed for large Dallas businesses or those ready to dominate the market. It offers extensive content creation, top-notch link-building strategies, and all the tools you need to achieve leadership in the industry.</p>
              </div>
              <a href="#" className="text-red-500 hover:underline hover:text-red-600 self-start text-base font-medium">
                LET&apos;S GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
