import React from 'react';
import { FaRocket, FaBolt, FaTachometerAlt } from 'react-icons/fa';

export default function SeoPackages() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h4 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-6 text-gray-800">
            Our Customized Web Design Packages in Houston
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
            {/* Box 1: Steady Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaRocket className="text-[#ED1E3A]  text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A] font-bold text-gray-800">Essentials Package
                  </h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Responsive web design for all devices</li>
                  <li>Up to 5 custom pages designed and developed
                  </li>
                  <li>Basic SEO integration for local visibility
                  </li>
                  <li>Fast loading speeds and performance optimization
                  </li>
                  <li>Monthly analytics and performance reports
                  </li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Perfect for startups and small businesses, this package offers a cost-effective solution to establish your online presence. With sleek designs and a responsive approach, you&apos;ll captivate your audience and generate leads in no time.
                </p>
              </div>
              <a href="#" className="text-[#ED1E3A]  hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                Get Started
              </a>
            </div>

            {/* Box 2: Faster Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaBolt className="text-[#ED1E3A]  text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A] font-bold text-gray-800">Advanced Growth Package
                  </h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Tailored UI/UX design for your target audience
                  </li>
                  <li>Up to 10 custom pages with advanced features
                  </li>
                  <li>Integrated SEO strategy to improve rankings
                  </li>
                  <li>E-commerce compatibility for online sales
                  </li>
                  <li>Regular maintenance and updates
                  </li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  Designed for growing businesses, this package focuses on delivering a seamless user experience while helping you stay ahead in search rankings. Elevate your brand identity and convert visitors into loyal customers.
                </p>
              </div>
              <a href="#" className="text-[#ED1E3A]  hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                Get Started
              </a>
            </div>

            {/* Box 3: Full Speed Growth */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[600px] overflow-y-auto border-x-4 border-[#ED1E3A]">
              <div>
                <div className="flex items-center mb-6">
                  <FaTachometerAlt className="text-[#ED1E3A]  text-4xl mr-4" />
                  <h5 className="text-2xl sm:text-[#ED1E3A] font-bold text-gray-800">Premium Performance Package
                  </h5>
                </div>
                <ul className="list-disc list-inside mb-6 text-base sm:text-lg font-medium text-gray-700 space-y-2">
                  <li>Full-scale custom web design for unlimited pages
                  </li>
                  <li>Comprehensive SEO optimization for global reach
                  </li>
                  <li>Integration of advanced analytics and user tracking
                  </li>
                  <li>Dedicated website support and management
                  </li>
                  <li>E-commerce ready with payment gateway integration
                  </li>
                </ul>
                <p className="mb-6 text-base sm:text-lg font-normal text-gray-600">
                  For enterprises and established businesses, this package ensures your website dominates the market. With cutting-edge design and enhanced functionalities, your online presence will set a benchmark for competitors.
                </p>
              </div>
              <a href="#" className="text-[#ED1E3A]  hover:underline hover:text-red-600 font-semibold text-lg sm:text-xl">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
