import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon
import Form from '../../Form/Form';

export default function SeoQuote() {
  return (
    <>
      <section className='bg-gray-100'>
        <div className="flex flex-col md:flex-row justify-between container mx-auto py-12 gap-10">
          {/* Left Section */}
          <div className="max-w-xl pt-5">
            {/* Subheading */}
            <h2 className="2xl:text-lg lg:text-base text-sm font-medium text-gray-700 mb-2 uppercase">
              Let’s practically achieve what we’ve showcased.
            </h2>

            {/* Main Heading */}
            <h1 className="text-[#ED1E3A] text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
              Demand for Quote
            </h1>

            {/* Benefits List */}
            <ul className="list-disc ml-5 2xl:text-lg lg:text-base text-sm text-gray-600 mb-6 space-y-2 ">
              <li>Boost Brand Awareness & Loyalty
              </li>
              <li>Generate More Qualified Leads
              </li>
              <li>Maximize Conversion Rates
              </li>
              <li>Build a Loyal Customer Base
              </li>
              <li>Reduce Cost Per Lead
              </li>
              <li>Increase ROI on Marketing
              </li>
            </ul>

            {/* Ready to Speak Heading */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Interested in a direct conversation?
            </h3>

            {/* Phone Number with Icon */}
            <div className="flex items-center text-[#ED1E3A] 2xl:text-lg lg:text-base text-sm font-bold">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+44 20 4615 7000">+44 20 4615 7000</a>
            </div>
          </div>

          <Form />
        </div>
      </section>
    </>
  )
}
